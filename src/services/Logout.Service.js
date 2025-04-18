import axios from "axios";
import toast from "react-hot-toast";
import { BASE_URL } from "../utils/constants";

const LogoutService = async () => {
    try {
        return await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
    }
    catch (error) {
        toast.error(error.response.data);
    }
}

export default LogoutService;