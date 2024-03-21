import { useState, useEffect } from "react";
import axios from "axios";

const useGet = (url) => {
  const [state, setState] = useState({
    usuarios: [],
    loading: true,
    error: null,
  });

  const getUsuarios = async () => {
    try {
      const response = await axios.get(url);
      const arrayUsuarios = response.data;

      setState({
        usuarios: arrayUsuarios,
        loading: false,
        error: null,
      });
    } catch (error) {
      console.error("", error.message);
      setState({
        usuarios: null,
        loading: false,
        error: error,
      });
    }
  };

  useEffect(() => {
    if (!url) return;
    getUsuarios();
  }, [url]);

  return state;
};

export default useGet;
  