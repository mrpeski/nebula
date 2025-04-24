import React from "react";
import userAvatar from "../assets/user.png";

interface EditProfileProps {
  // Define any props the component might need here
}

const EditProfile: React.FC<EditProfileProps> = (props) => {
  return (
    <>
      <div className="sm:flex justify-start gap-4">
        <div className="flex mb-4 justify-center sm:justify-end">
          <img src={userAvatar} className="size-32" />
        </div>
        <div className="flex-1 sm:grid grid-cols-2 gap-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <div className="bg-gray-200 p-4" key={i}>
              Content {i + 1}
            </div>
          ))}
        </div>
      </div>
      <div className="flex sm:justify-end py-5">
        <button className="w-full sm:w-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 active:bg-blue-700 transition duration-150 ease-in-out">
          Save
        </button>
      </div>
    </>
  );
};

export default EditProfile;
