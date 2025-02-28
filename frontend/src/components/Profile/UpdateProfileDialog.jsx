import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "../../utils/constant";
import { setUser } from "../../redux/authSlice";

const UpdateProfileDialog = ({ open, setOpen }) => {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    fullname: user?.fullname || "",
    email: user?.email || "",
    phoneNumber: user?.phoneNumber || "",
    bio: user?.profile?.bio || "",
    skills: user?.profile?.skills?.join(", ") || "",
    file: user?.profile?.resume || "",
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const fileChangeHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills);
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      setLoading(true);
      const res = await axios.post(
        `${USER_API_END_POINT}/profile/update`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        alert(res.data.message);
      }
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
    setOpen(false);
  };

  return open ? (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-lg font-semibold mb-4">Update Profile</h2>
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="fullname"
              value={input.fullname}
              onChange={changeEventHandler}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-3">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-3">
            <label className="block text-sm font-medium">Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={input.phoneNumber}
              onChange={changeEventHandler}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-3">
            <label className="block text-sm font-medium">Bio</label>
            <input
              type="text"
              name="bio"
              value={input.bio}
              onChange={changeEventHandler}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-3">
            <label className="block text-sm font-medium">Skills</label>
            <input
              type="text"
              name="skills"
              value={input.skills}
              onChange={changeEventHandler}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-3">
            <label className="block text-sm font-medium">Resume</label>
            <input
              type="file"
              name="file"
              accept="application/pdf"
              onChange={fileChangeHandler}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mt-4 flex justify-end space-x-2">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
              disabled={loading}
            >
              {loading ? "Updating..." : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : null;
};

export default UpdateProfileDialog;
