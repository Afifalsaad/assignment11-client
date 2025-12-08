import React from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const MyOrders = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: orders = [] } = useQuery({
    queryKey: [user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/my-orders?email=${user?.email}`);
      return res.data;
    },
  });

  const handlePayment = async (order) => {
    const paymentInfo = {
      order_price: order.order_price,
      title: order.title,
      id: order._id,
      email: order.email,
    };

    const res = await axiosSecure.post(
      "/payment-checkout-session",
      paymentInfo
    );
    window.location.assign(res.data.url);
  };

  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-6">
        My Orders: {orders.length}
      </h2>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Total</th>
              <th>Payment Method</th>
              <th>Payment Options</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id}>
                <th>{index + 1}</th>
                <td>{order.title}</td>
                <td>{order.order_price}</td>
                <td>{order.payment_option}</td>
                <td>
                  <button
                    onClick={() => handlePayment(order)}
                    className="btn btn-primary btn-outline text-black">
                    Pay
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
