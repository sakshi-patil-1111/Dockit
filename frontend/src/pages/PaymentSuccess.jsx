import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const PaymentSuccess = () => {
  const { backendUrl, token } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const sessionId = urlParams.get("session_id");

    if (sessionId) {
      axios
        .post(
          backendUrl + "/api/user/verify-payment",
          { sessionId },
          { headers: { token } }
        )
        .then((res) => {
          if (res.data.success) {
            toast.success("Payment successful!");
            navigate("/my-appointments");
          } else {
            toast.error(res.data.message || "Payment verification failed");
            navigate("/my-appointments");
          }
        })
        .catch((err) => {
          toast.error("Payment verification error");
          navigate("/my-appointments");
        });
    } else {
      toast.error("No session ID found");
      navigate("/my-appointments");
    }
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-xl font-bold mb-4">Verifying payment...</h2>
    </div>
  );
};

export default PaymentSuccess;
