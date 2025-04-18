import React from 'react'
import { useSelector } from 'react-redux'
import EditProfile from '../components/profileComponent/EditProfile';

const Profile = () => {
  const user = useSelector(store => store.user);
  return (
    <div>
      {
        user && (
          <div>
            <EditProfile user={ user} />
          </div>
        )
      }
    </div>
  )
}

export default Profile