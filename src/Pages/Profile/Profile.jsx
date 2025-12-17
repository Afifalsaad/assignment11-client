import React from "react";
import useAuth from "../../Hooks/useAuth";
import useRole from "../../Hooks/useRole";
import LoadingSpinner from "../Loading/Loading";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Profile = () => {
  const { user, loading, logOut } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { role } = useRole();

  const { data: currentUser = [] } = useQuery({
    queryKey: [user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/status?email=${user.email}`);
      return res.data;
    },
  });

  const { data: feedback } = useQuery({
    queryKey: [currentUser?._id],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/suspend-feedback/${currentUser?._id}`
      );
      return res.data;
    },
  });

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  const handleLogout = () => {
    logOut()
      .then(() => {
        {
          Swal.fire({
            title: "Logout Successful",
            icon: "success",
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: `Logout Error ${error.message}`,
          icon: "error",
        });
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-3xl mx-auto justify-center bg-base-200 rounded-2xl shadow-lg p-6">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center mb-6">My Profile</h2>

        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Profile Image */}
          <div className="shrink-0">
            <img
              src={user?.photoURL}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-primary"
            />
          </div>

          {/* Profile Info */}
          <div className="flex-1 space-y-3">
            <div>
              <p className="text-sm text-gray-500">Full Name</p>
              <p className="text-lg font-semibold">{user?.displayName}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="text-lg">{user?.email}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Role</p>
              <span className="badge badge-primary text-black/60 font-semibold">{role}</span>
            </div>
            <div>
              <p className="text-sm text-gray-500">Status</p>
              <span className="badge badge-primary text-black/60 font-semibold">{currentUser?.status}</span>
            </div>
            {currentUser?.status === "suspended" && feedback && (
              <div className="mt-4 p-4 rounded-xl border border-red-200 bg-red-50">
                <h3 className="text-sm font-semibold text-red-600 mb-2">
                  Account Suspension Details
                </h3>

                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="font-medium text-gray-700">Reason:</span>{" "}
                    <span className="text-gray-600">{feedback?.reason}</span>
                  </p>

                  <p className="text-sm">
                    <span className="font-medium text-gray-700">Feedback:</span>{" "}
                    <span className="text-gray-600">{feedback?.feedback}</span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={handleLogout}
            className="btn btn-outline btn-primary">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
