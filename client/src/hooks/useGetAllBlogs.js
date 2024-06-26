import Cookies from "js-cookie";
import { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
function useGetAllBlogs() {
  const [data, setData] = useState([]);
  const navigate=useNavigate();

     useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}api/v2/blog/AllBlog`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            "token":Cookies.get("userToken")? Cookies.get("userToken"):Cookies.get("superuserToken")
        }
    }).then(res => res.json())
        .then(res => {
            if (res.status === "OK") {
                setData(res.data);
            }
            else if (res.status === "EXPIRED_TOKEN") {
                navigate("/login");
            }
           
           
        })
        .catch(e => console.log("error : " + e));

}, [navigate])
    return [data, setData];
}
export default useGetAllBlogs;