import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserCard from '../UserCard';
import ProfileEdit from '../../services/ProfileEdit.Service';
import { addUser } from '../../utils/userSlice';

const EditProfile = () => {
    const user = useSelector(store => store.user);

    const [formValues, setFormValues] = useState({
        firstName : user.firstName || "",
        lastName:user.lastName || "",
        photoURL:user.photoURL || "",
        gender:user.gender,
        age:user.age || "",
        about:user.about || "",
        skills: user.skills || "",
    })
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const { firstName, lastName, photoURL, age, gender, about, skills } = formValues;

    const saveProfile = async () => {
        const res = await ProfileEdit({ firstName, lastName, photoURL, age, gender, about, skills });
        console.log("Edit profile", res);
        dispatch(addUser(res?.data?.data));
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((preValues) => ({
            ...preValues,
            [name]:value
        }))
    }



  return (
      <div className="flex justify-center my-10 ">
        <div>
            <div className="card bg-base-300 w-96 shadow-sm mx-10">
                <div className="card-body">
                    <h2 className="card-title justify-center">Edit Profile</h2>
                    <div>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">FirstName</legend>
                            <input type="text"
                                name="firstName"
                                value={formValues.firstName}
                                onChange={handleChange}
                                className="input"
                                placeholder="Type here" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">LastName</legend>
                            <input type="text"
                                name="lastName"
                                value={formValues.lastName}
                                onChange={handleChange}
                                className="input"
                                placeholder="Type here" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">PhotoURL</legend>
                            <input type="text"
                                name="photoURL"
                                value={formValues.photoURL}
                                onChange={handleChange}
                                className="input"
                                placeholder="Type here" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Gender</legend>
                            <input type="text"
                                name="gender"
                                value={formValues.gender}
                                onChange={handleChange}
                                className="input"
                                placeholder="Type here" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Age</legend>
                            <input type="text"
                                name="age"
                                value={formValues.age}
                                onChange={handleChange}
                                className="input"
                                placeholder="Type here" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">About</legend>
                            <input type="text"
                                name="about"
                                value={formValues.about}
                                onChange={handleChange}
                                className="input"
                                placeholder="Type here" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Skills</legend>
                            <input type="text"
                                name="skills"
                                value={formValues.skills}
                                onChange={handleChange}
                                className="input"
                                placeholder="Type here" />
                        </fieldset>
                    </div>
                  <div className="card-actions justify-around">
                  <button className="btn btn-primary" >Cancel</button>
                    <button className="btn btn-primary" onClick={saveProfile} >Save</button>
                    </div>
                </div>
              </div>
        </div>
            <div>
                <UserCard user={{firstName, lastName, photoURL, age, gender, about, skills}} />
            </div>
    </div>
  )
}

export default EditProfile