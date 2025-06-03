import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PaymentFailed = () => {
  const navigate = useNavigate();

  useEffect(() => {
    toast.error("Payment cancelled.");
    navigate("/my-appointments");
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-xl font-bold mb-4 text-red-600">Payment Cancelled</h2>
      <p className="text-gray-600">Redirecting to your appointments...</p>
    </div>
  );
};

export default PaymentFailed;
