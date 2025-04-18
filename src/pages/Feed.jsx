import React, { useEffect } from 'react'
import GetFeedService from '../services/GetFeed.Service'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../utils/feedSlice';
import UserCard from '../components/UserCard';

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);

  const getFeed = async () => {
    if (feed.length > 0 ) return;
    const res = await GetFeedService();
    // console.log(res);
    dispatch(addFeed(res?.data?.data));
  }

  useEffect(() => {
    getFeed();
  }, [])

  return (
    <div className='flex flex-col items-center my-10'>
      <div className="flex flex-col justify-center" >
        {
          feed?.length > 0 ? (
            feed.map((user) => <UserCard key={user._id} user={user} />)
          ): (
              <p> 
                No user Found
              </p>
          )
        }
      </div>
    </div>
  )
}

export default Feed;