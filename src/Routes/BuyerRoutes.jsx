import React from "react";
import useRole from "../Hooks/useRole";
import ForbiddenPage from "../Pages/Forbidden/Forbidden";
import LoadingSpinner from "../Pages/Loading/Loading";

const BuyerRoutes = ({ children }) => {
  const { role } = useRole();

  if (role !== "Buyer") {
    return <ForbiddenPage></ForbiddenPage>;
  }

  return children;
};

export default BuyerRoutes;
