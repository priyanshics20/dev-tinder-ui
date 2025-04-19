import axios from "axios";
import toast from "react-hot-toast";
import { BASE_URL } from "../utils/constants";

const GetConnections = async () => {
    try {
        const res = await axios.get(BASE_URL + "/user/connections", { withCredentials: true })
        return res;
    }
    catch (err) {
        toast.error(err?.response?.data)
    }
}

export default GetConnections;