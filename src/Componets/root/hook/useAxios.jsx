import { useState } from "react";
import axios from "axios";

const useAxios = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const sendRequest = async (endpoint, method = "POST", body = null) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios({
        url: `http://localhost:5000${endpoint}`,
        method,
        data: body,
      });
      setData(res.data);
      return res.data;
    } catch (err) {
      setError(err);
      console.error(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, data, sendRequest };
};

export default useAxios;
