import React from "react";
import useAuth from "../../Hooks/useAuth";
import useRole from "../../Hooks/useRole";
import LoadingSpinner from "../Loading/Loading";
import Swal from "sweetalert2";

const Profile = () => {
  const { user, loading, logOut } = useAuth();
  console.log(user);
  const { role } = useRole();

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
              <p className="text-sm text-gray-500">Phone</p>
              <p className="text-lg">{user?.phone}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Role</p>
              <span className="badge badge-primary">{role}</span>
            </div>
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
