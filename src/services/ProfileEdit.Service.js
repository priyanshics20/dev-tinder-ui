import axios from "axios";
import { BASE_URL } from "../utils/constants";
import toast from "react-hot-toast";

const ProfileEdit = async ({ firstName, lastName, photoURL, age, gender, about, skills }) => {
    try {
        const buildRequestBody = (data) => {
            const result = {};
            Object.keys(data).forEach((key) => {
                const value = data[key];
                if (value !== undefined && value !== null && value !== "") {
                    result[key] = key === "age" ? parseInt(value) : value;
                }
            });
            return result;
        };

        const body = buildRequestBody({ firstName, lastName, photoURL, age, gender, about, skills });
        const res =await axios.put(BASE_URL + "/profile/edit", body, { withCredentials: true });
        console.log("profile service", res)
        toast.success("Profile Updated Successfully");
        return res;
    }
    catch (err) {
        console.log(err,"err")
        toast.error(err.response.data);
    }

}

export default ProfileEdit;