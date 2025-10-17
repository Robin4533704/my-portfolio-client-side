import { useState } from "react";
import axios from "axios";

const useAxios = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  // 🔧 API base URL from environment variable
  const baseURL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const sendRequest = async (endpoint, method = "POST", body = null) => {
    setLoading(true);
    setError(null);

    try {
      const res = await axios({
        url: `${baseURL}${endpoint}`,
        method,
        data: body,
        headers: {
          "Content-Type": "application/json",
        },
      });

      setData(res.data);
      return res.data;
    } catch (err) {
      setError(err.response?.data || err.message);
      console.error("❌ Axios Error:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, data, sendRequest };
};

export default useAxios;
