import React from "react";
import useRole from "../Hooks/useRole";
import ForbiddenPage from "../Pages/Forbidden/Forbidden";
import LoadingSpinner from "../Pages/Loading/Loading";

const ManagerRoute = ({ children }) => {
  const { role, isLoading } = useRole();

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (role !== "Manager") {
    return <ForbiddenPage></ForbiddenPage>;
  }

  return children;
};

export default ManagerRoute;
