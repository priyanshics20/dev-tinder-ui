import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { removeUserFromFeed } from '../utils/feedSlice';

const UserCard = ({ user }) => {
  const { _id, about, firstName, gender, lastName, photoURL, skills, age } = user;
  const dispatch = useDispatch();

  const handleSendRequest = async (status, userId) => {
    try {
      const res = await axios.post(BASE_URL + "/request/send/" + status + "/" + userId, {}, { withCredentials: true });
      dispatch(removeUserFromFeed(userId));
    } catch (err) {
      toast.error(err?.response?.data);
    } 
  }

  return ( 
    <div className="card bg-base-100 w-96 shadow-sm my-4 py-4">
      <figure>
        <img
          src={photoURL}
          alt={firstName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        <div>
          <span>{age+ " "}</span>
          <span>{ gender }</span>
        </div>
        <p>{about}</p>
        {skills?.length > 0 && (
            <div className="mt-2 flex gap-2 flex-wrap">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="badge badge-outline badge-primary"
                >
                  {skill}
                </span>
              ))}
            </div>
        )}
        <div className="card-actions justify-center">
        <button className="btn btn-primary" onClick={()=>handleSendRequest( "ignored", _id )}>Ingonre</button>
          <button className="btn btn-secondary" onClick={()=>handleSendRequest( "interested", _id )}>Interested</button>
        </div>
      </div>
    </div>
  )
}

export default UserCard;