import axios from "axios"
import toast from "react-hot-toast";
import { BASE_URL } from "../utils/constants";

export const LoginService = async (emailId, password) => {
    try {
        const res = await axios.post(BASE_URL + "/login" , {emailId, password}, {withCredentials: true});
        toast.success("Loggedin Successfully");
        return res.data;
    }
    catch (err) {
        toast.error(err.response.data);
    }
}