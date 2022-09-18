import React from 'react'
import {RolesData} from '../components/RolesData';

function RoleManagement() {
  return (
    <div className='flex flex-col items-center'>

      
      <ul className="border-b space-y-3">


      {RolesData.map((item, index) => {
        return(
          <div className='border-b w-full py-5 grid grid-cols-2 space-x-5'>
            <li key={index}>{item.role}</li>
            
            <select >
              <option>Click To View List of Permissions</option>
              {item.access.map((perm, permind) => {
                return(
                  <option key={permind}>{perm}</option>
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

export default RoleManagement
