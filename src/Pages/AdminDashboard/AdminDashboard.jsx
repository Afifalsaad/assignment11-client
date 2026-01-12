import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AdminDashboard = () => {
  const axiosSecure = useAxiosSecure();

  const { data: stats = [] } = useQuery({
    queryKey: ["stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/trackings/stats");
      return res.data;
    },
  });

  const maxValue =
    stats.length > 0 ? Math.max(...stats.map((stat) => stat.count)) : 0;

  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-8">Admin Dashboard</h2>

      {/* Stats */}
      <div className="stats shadow flex flex-col md:flex-row items-center">
        {stats.map((stat) => (
          <div className="stat place-items-center">
            <div className="stat-title">{stat._id}</div>
            <div className="stat-value">{stat.count}</div>
          </div>
        ))}
      </div>

      {/* ReChart */}
      <div className="mt-5 w-full max-w-3xl mx-auto">
        <div style={{ width: "100%", height: 500 }}>
          <ResponsiveContainer>
            <RadarChart outerRadius="80%" data={stats}>
              <PolarGrid />
              <PolarAngleAxis dataKey="_id" />
              <PolarRadiusAxis domain={[0, maxValue + 5]} />
              <Radar
                name="Stats"
                dataKey="count"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
              />
              <Legend />
              <Tooltip></Tooltip>
            </RadarChart>
          </ResponsiveContainer>
        </div>
        {/* <BarChart
          style={{
            width: "100%",
            maxWidth: "700px",
            maxHeight: "70vh",
            aspectRatio: 1.618,
          }}
          responsive
          data={barChartData(stats)}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis width="auto" />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart> */}
      </div>
    </div>
  );
};

export default AdminDashboard;
