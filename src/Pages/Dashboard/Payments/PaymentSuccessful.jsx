import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const PaymentSuccessful = () => {
  const [searchParams] = useSearchParams();
  const [payment, setPayment] = useState({});
  const sessionId = searchParams.get("session_id");
  const axiosSecure = useAxiosSecure();
  console.log(sessionId);

  useEffect(() => {
    axiosSecure
      .patch(`/payment-success?session_id=${sessionId}`)
      .then((res) => {
        setPayment({
          trackingId: res.data.trackingId,
          transactionId: res.data.transactionId,
        });
      });
  }, [sessionId, axiosSecure]);

  return (
    <div>
      <h2 className="text-4xl font-bold mb-3">Payment Successful</h2>
      <p>Your TransactionId : {payment.transactionId}</p>
      <p>Your TrackingId : {payment.trackingId}</p>
    </div>
  );
};

export default PaymentSuccessful;
