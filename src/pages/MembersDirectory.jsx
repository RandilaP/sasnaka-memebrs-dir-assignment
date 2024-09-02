import React from 'react'
import NavBar from '../components/NavBar'
import MemberFilter from '../components/MemberFilter'

function MembersDirectory() {
  return (
    <>
    <NavBar/>
    <div className='bg-gray h-screen pt-16'>
      <div>
       <div>
        <MemberFilter/>
       </div>
      </div>
    </div>
    </>
  )
}

export default MembersDirectory