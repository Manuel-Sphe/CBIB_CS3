import React from 'react'
import {MemberData} from '../components/MemberExampleData';
import {RolesData} from '../components/RolesData';

function RoleAssign() {
  return (
    <div className='flex flex-col items-center'>

      
      <ul className="border-b space-y-3">


      {MemberData.map((item, index) => {
        return(
          <div className='border-b w-full py-5 grid grid-cols-2 space-x-5'>
            <li key={index}>{item.user.first_name} {item.user.last_name}</li>
            
            <select >
              <option>--select user role--</option>
              {RolesData.map((perm, permind) => {
                return(
                  <option key={permind}>{perm.role}</option>
                )
              })}
            </select>
          </div>
          )
        })}

        </ul>
    </div>
  )
}

export default RoleAssign
