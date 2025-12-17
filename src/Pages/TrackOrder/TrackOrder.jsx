import React from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";

const TrackOrder = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data } = useQuery({
    queryKey: [user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/my-orders?email=${user?.email}`);
      console.log(res.data.trackingId);
      return res.data;
    },
  });

  const orders = Array.isArray(data) ? data : [];

  return (
    <div className="text-secondary">
      <h2 className="text-4xl font-bold text-center mb-3">Track Order</h2>
      {/* Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Total</th>
              <th>Payment Method</th>
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
                  <Link to={`/trackings-log/${order.trackingId}`}>
                    <button className="btn bg-cyan-500 text-white border-none hover:cursor-pointer mx-1">
                      Track Order
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Responsive Cards */}
      <div className="md:hidden space-y-4">
        {orders.map((order) => (
          <div
            key={order._id}
            className="p-4 border rounded-lg shadow-sm bg-base-100">
            <div className="flex items-center gap-3 mb-3">
              <h3 className="font-semibold">{order.title}</h3>
            </div>

            <p>
              <span className="font-semibold">Price:</span> {order.order_price}
            </p>
            <p>
              <span className="font-semibold">Payment Method:</span>{" "}
              {order.payment_option}
            </p>

            <Link to={`/trackings-log/${order.trackingId}`}>
              <button className="btn bg-cyan-500 text-white border-none hover:cursor-pointer mt-3">
                Track Order
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackOrder;
