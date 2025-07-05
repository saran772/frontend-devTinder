import axios from "axios";
import Footer from "./footer";
import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import { BASE_URL } from "./utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adduser } from "./utils/userlice";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userdata = useSelector((store) => store.user);
  const fetchuser = async () => {
    if (userdata) return;
    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(adduser(res.data));
    } catch (err) {
      if (err.status === 401) {
        navigate("/login");
      }
      console.error(err);
    }
  };
  useEffect(() => {
    fetchuser();
  }, []);
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
