import axios from "axios";
import toast from "react-hot-toast";
import { BASE_URL } from "../utils/constants";

const GetFeedService = async () => {
    try {
        const res = await axios.get(BASE_URL + "/feed", { withCredentials: true })
        return res;
    }
    catch (err) {
        toast.error(err?.response?.data);
    }
}

export default GetFeedService;