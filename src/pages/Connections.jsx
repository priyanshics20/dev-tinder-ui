import React, { useEffect } from 'react'
import GetConnections from '../services/Connections.Service'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { addConnections } from '../utils/connectionsSlice';


export const Connections = () => {

    const dispatch = useDispatch();
    const connections = useSelector(store => store.connections);

    const getConnections = async () => {
        try {
            const res = await GetConnections();
            // console.log(res?.data?.data); 
            dispatch(addConnections(res?.data?.data))
        }
        catch (err) {
            toast.error(err?.response?.data);
        }
    }

    useEffect(() => {
        getConnections(); 
    },[])

    if (!connections) return;
    if (connections.length === 0)
        return (
            <div className='flex justify-center my-10'>
                <h1 className='text-bold text-2xl'>You don't have any connections</h1>
            </div>
        )
    return (
        <div className='flex flex-col justify-center text-center my-10'>
            <h1 className='text-bold text-2xl'>Connections</h1>
            {connections.map((connection) => {
            const { _id , firstName, lastName, photoURL, age, gender, about } = connection;
            return (
              <div key={_id} className="flex m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto">
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
              </div>
            );
          })}
        </div>
    ) 
}
