import React from 'react'
import AllCtx from '../util-functions/allCtx';

function Users() {
  const {users} = AllCtx()

  return (
      <div>
              { users.length > 0 &&   <ul className="  mt-10 space-y-2 ">
        {users.map((user, i) => (
          <li key={i}>
            {i + 1}. {user.name.first} {user.name.last.toUpperCase()}{" "}
            <span className="text-sm">
              ({user.gender},{" "}
              {user.nat === "US"
                ? "USA"
                : user.nat === "GB"
                ? "England"
                : user.nat === "AU"
                ? "Australia"
                : ""}
              , {user.dob.age}yo)
            </span>
          </li>
        ))}
      </ul>}
</div>
  )
}

export default Users