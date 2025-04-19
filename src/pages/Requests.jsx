import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import { addRequests } from '../utils/requestSlice'

const Requests = () => {
    const dispatch = useDispatch();
    const requests = useSelector(store => store.requests);

    const fetchRequests = async () => {
        try {
            const res = await axios.get(BASE_URL + "/user/requests/recieved", { withCredentials: true })
            dispatch(addRequests(res?.data?.data));
        }
        catch (err) {
            toast.error(err?.response?.data);
        }
    }

    useEffect(() => {
        fetchRequests();
    }, []);

    if (!requests) return;
    if (requests.length === 0)
        return (
            <div className='flex justify-center my-10'>
                <h1 className='text-bold text-2xl'>You don't have any Request</h1>
            </div>
        )
    return (
        <div className='flex flex-col justify-center text-center my-10'>
            <h1 className='text-bold text-2xl'>Requests Recieved</h1>
            {requests.map((request) => {
            const {_id, firstName, lastName, photoURL, age, gender, about } = request.fromUserId;
            return (
                <div key={_id} className="flex m-4 p-4 rounded-lg bg-base-300 w-2/3 mx-auto">
                <div>
                  <img
                    alt="photo"
                    className="w-20 h-20 rounded-full"
                    src={photoURL}
                  />
                </div>
                <div className="text-left mx-4 ">
                  <h2 className="font-bold text-xl">
                    {firstName + " " + lastName}
                  </h2>
                  {age && gender && <p>{age + ", " + gender}</p>}
                  <p>{about}</p>
                </div>
                <div>
                  <button className="btn btn-primary mx-2 my-2 w-1/2">Reject</button>
                  <button className="btn btn-secondary mx-2 w-1/2">Accept</button>
                </div>
              </div>
            );
          })}
        </div>
    ) 
}

export default Requests