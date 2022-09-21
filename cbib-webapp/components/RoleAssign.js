import React from 'react'
import {MemberData} from '../components/MemberExampleData';
import {RolesData} from '../components/RolesData';

function RoleAssign(props) {
  return (
    <div className='flex flex-col items-center'>

      
      <ul className="border-b space-y-3">


      {MemberData.map((item, index) => {

        return(
          <div className='border-b w-full py-5 grid grid-cols-2 space-x-5'>
            <li key={index}>{item.user.first_name} {item.user.last_name}</li>
            
            {
              props.remove===true?<li key={index}><button className='text-blue-500 no-underline hover:underline text-sm cursor-pointer'>Remove</button></li>:
              <select >
              <option>{item.roles}</option>
              {RolesData.map((perm, permind) => {
                return(
                  <option key={permind}>{perm.roles}</option>
                )
              })}
            </select>
            
            }

          </div>
          )
        })}

        </ul>
    </div>
  )
}

export default RoleAssign
