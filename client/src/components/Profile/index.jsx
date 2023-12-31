export default function Profile() {
  return (
    <section className="p-6 ">
      <h1 className="text-3xl text-white text-center"> Profile Settings</h1>
      <div className="Profile Card  w-96 m-auto p-8 ">
        <div className="profilePicture flex flex-col gap-2 items-center bg-white py-5 rounded-t-3xl">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="profilePicture"
            className=" rounded-full w-[200px] h-[200px] object-cover"
          />
          <div className="flex gap-2">
            <button className=" p-3 px-3  text-white font-bold text-xs  bg-deep-orange-700 rounded-full hover:bg-deep-orange-700 hover:text-deep-orange-700 hover:bg-opacity-10 border border-deep-orange-700 transition-all duration-300 ">
              Upload Image
            </button>
            <button className=" p-3 px-3  text-white font-bold text-xs  bg-deep-orange-700 rounded-full hover:bg-deep-orange-700 hover:bg-opacity-10 border border-deep-orange-700 hover:text-deep-orange-700 transition-all duration-300 ">
              Remove Image
            </button>
          </div>
        </div>
        <div className="flex flex-col text-white gap-3 bg-deep-orange-800 bg-opacity-20 p-3 rounded-b-xl ">
          <div>
            <p>Personal Info</p>
            <p className="text-xs text-gray-500">Login Credentials</p>
          </div>

          <p><span className="font-bold italic">Name</span> : Jane Doe</p>
          <p><span className="font-bold italic">Email</span> : Jane@doe.com</p>
          <button className="border border-deep-orange-500 text-sm font-bold w-fit p-2 rounded-full hover:bg-deep-orange-700 hover:bg-opacity-20 ">
            Change Password
          </button>
        </div>
      </div>
    </section>
  );
}
