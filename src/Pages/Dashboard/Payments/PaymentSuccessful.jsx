import React from "react";
import { useSearchParams } from "react-router";

const PaymentSuccessful = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  console.log(sessionId);

  return (
    <div>
      <h2 className="text-4xl font-bold">Payment Successful</h2>
    </div>
  );
};

export default PaymentSuccessful;
