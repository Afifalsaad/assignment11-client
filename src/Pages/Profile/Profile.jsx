import React, { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useRole from "../../Hooks/useRole";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import LoadingSpinner from "../Loading/Loading";

const Profile = () => {
  const { user, loading, logOut, updateUserProfile } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { role } = useRole();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    displayName: user?.displayName || "",
    photoURL: user?.photoURL || "",
  });

  // Fetch current user info from DB
  const { data: currentUser = {} } = useQuery({
    queryKey: [user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/status?email=${user.email}`);
      return res.data;
    },
  });

  const { data: feedback } = useQuery({
    queryKey: [currentUser?._id],
    queryFn: async () => {
      if (!currentUser?._id) return null;
      const res = await axiosSecure.get(`/suspend-feedback/${currentUser._id}`);
      return res.data;
    },
  });

  if (loading) return <LoadingSpinner />;

  const handleLogout = () => {
    logOut()
      .then(() => Swal.fire({ title: "Logout Successful", icon: "success" }))
      .catch((error) =>
        Swal.fire({ title: `Logout Error ${error.message}`, icon: "error" })
      );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleProfileUpdate = async () => {
    try {
      // Update Firebase Auth profile
      await updateUserProfile(formData);

      // Update backend DB
      await axiosSecure.put(`/users/${currentUser._id}`, formData);

      Swal.fire({ title: "Profile Updated", icon: "success" });
      setIsEditing(false);
    } catch (err) {
      Swal.fire({ title: "Update Failed", text: err.message, icon: "error" });
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({ ...prev, photoURL: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start py-12">
      <div className="w-full max-w-3xl mt-12 bg-base-100 rounded-2xl shadow-lg p-8 space-y-6">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center">My Profile</h1>

        {/* Profile Image */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex flex-col items-center gap-4">
            <img
              src={formData.photoURL || "/default-avatar.png"}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-primary"
            />
            {isEditing && (
              <label className="btn btn-sm btn-outline btn-primary cursor-pointer">
                Change Photo
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            )}
          </div>

          {/* Profile Info */}
          <div className="flex-1 space-y-4 w-full">
            {/* Name */}
            <div>
              <p className="text-secondary text-sm">Full Name</p>
              {isEditing ? (
                <input
                  type="text"
                  name="displayName"
                  value={formData.displayName}
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                />
              ) : (
                <p className="text-lg font-semibold">
                  {currentUser?.userName || user?.displayName}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <p className="text-gray-500 text-sm">Email</p>
              <p className="text-lg">{user?.email}</p>
            </div>

            {/* Role */}
            <div>
              <p className="text-gray-500 text-sm">Role</p>
              <span className="badge badge-primary text-black/60 font-semibold">
                {role}
              </span>
            </div>

            {/* Status */}
            <div>
              <p className="text-gray-500 text-sm">Status</p>
              <span className="badge badge-warning text-black/60 font-semibold">
                {currentUser?.status}
              </span>
            </div>

            {/* Suspension Feedback */}
            {currentUser?.status === "suspended" && feedback && (
              <div className="p-4 rounded-xl border border-red-200 bg-red-50">
                <h3 className="text-red-600 font-semibold mb-2">
                  Account Suspension Details
                </h3>
                <p>
                  <span className="font-medium text-gray-700">Reason:</span>{" "}
                  <span className="text-gray-600">{feedback?.reason}</span>
                </p>
                <p>
                  <span className="font-medium text-gray-700">Feedback:</span>{" "}
                  <span className="text-gray-600">{feedback?.feedback}</span>
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3">
          {isEditing ? (
            <>
              <button className="btn btn-primary" onClick={handleProfileUpdate}>
                Save Changes
              </button>
              <button
                className="btn btn-outline"
                onClick={() => setIsEditing(false)}>
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                className="btn btn-primary text-black"
                onClick={() => setIsEditing(true)}>
                Edit Profile
              </button>
              <button
                className="btn btn-outline btn-error"
                onClick={handleLogout}>
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
