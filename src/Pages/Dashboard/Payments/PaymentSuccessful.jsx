import React, { useEffect } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const PaymentSuccessful = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const axiosSecure = useAxiosSecure();
  console.log(sessionId);

  useEffect(() => {
    axiosSecure
      .patch(`/payment-success?session_id=${sessionId}`)
      .then((res) => {
        console.group(res.data);
      });
  }, [sessionId, axiosSecure]);

  return (
    <div>
      <h2 className="text-4xl font-bold">Payment Successful</h2>
    </div>
  );
};

export default PaymentSuccessful;
