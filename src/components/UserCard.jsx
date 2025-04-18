import React from 'react'

const UserCard = ({ user }) => {
  const { about, firstName, gender, lastName, photoURL, skills, age } = user;
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
        <button className="btn btn-primary">Ingonre</button>
          <button className="btn btn-secondary">Interested</button>
        </div>
      </div>
    </div>
  )
}

export default UserCard;