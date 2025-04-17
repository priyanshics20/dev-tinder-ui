import axios from "axios";
import { BASE_URL } from "../utils/constants";

const ProfileService = async () => {
    try {
        const res =await  axios.get(BASE_URL + "/profile/view", {
            withCredentials:true,
        });
        return res; 
    } catch (err) {
        throw err;
    }
}

export default ProfileService;