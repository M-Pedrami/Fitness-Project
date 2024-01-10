import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RiAccountCircleFill } from "react-icons/ri";
import { RiDashboard2Fill } from "react-icons/ri";
import { RiLogoutCircleFill } from "react-icons/ri";
import UserPhoto from "../../assets/User.svg";
import { Link } from "react-router-dom";
import { useUser } from "../../utils/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function ProfileMenu() {
  const { activeUser, setActiveUser } = useUser();
  const navigate = useNavigate();
  const notify = () => {
    toast.success("Logout Successfull, See You Soon!", { theme: "dark" });
  };
  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/user/logout",
        {},
        { withCredentials: true }
      );
      if (response.status === 200) {
        setActiveUser(null);
        notify();
        navigate("/");
      }
    } catch (error) {
      console.log("handleLogOut", error);
    }
  };

  useEffect(() => {
    if (navigate.location?.pathname === "/") {
      // Call notify function when navigating to home page
      notify();
    }
  }, [navigate.location?.pathname]);
  return (
    <>
      <Menu>
        <MenuHandler>
          <Avatar
            variant="circular"
            alt="avatar"
            className="cursor-pointer ring ring-gray-900 hover:ring-orange-500"
            src={
              activeUser && activeUser.profilePic
                ? activeUser.profilePic
                : UserPhoto
            }
          />
        </MenuHandler>
        <MenuList className=" bg-white bg-opacity-20 border-deep-orange-600 hover:border-deep-orange-500">
          <Link to={"/Profile"}>
            <MenuItem className="flex items-center gap-2 focus:bg-white   text-deep-orange-400 focus:text-gray-900 ">
              <RiAccountCircleFill className="bg-transparent text-xl  " />
              <Typography className="bg-transparent  text-sm font-bold  hover:text-gray-900">
                My Profile
              </Typography>
            </MenuItem>
          </Link>
          <MenuItem className="flex items-center gap-2 focus:bg-white  text-deep-orange-400 focus:text-gray-900">
            <RiDashboard2Fill className="bg-transparent text-xl " />
            <Typography className="bg-transparent  text-sm font-bold  hover:text-gray-900">
              Dashboard
            </Typography>
          </MenuItem>

          <hr className="my-2 border-deep-orange-400" />
          <MenuItem className="flex items-center gap-2 focus:bg-white  text-white focus:text-gray-900">
            <RiLogoutCircleFill className="bg-transparent text-xl " />
            <Typography className="bg-transparent  text-sm font-bold   hover:text-gray-900">
              <button onClick={handleLogout}>Log Out</button>
            </Typography>
          </MenuItem>
      {<ToastContainer theme="dark" />}
        </MenuList>
      </Menu>
    </>
  );
}
