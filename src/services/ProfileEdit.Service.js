import axios from "axios";
import { BASE_URL } from "../utils/constants";
import toast from "react-hot-toast";

const ProfileEdit = async ({ firstName, lastName, photoURL, age, gender, about, skills }) => {
    try {
        const body = {
            firstName,
            lastName,
            photoURL,
            age: parseInt(age),
            gender,
            about,
            skills
        }
        console.log(body, "body")
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