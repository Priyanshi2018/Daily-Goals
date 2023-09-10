import React from 'react'
import {useParams,useNavigate} from "react-router-dom"

const User = () => {

    const params = useParams()
    const navigation= useNavigate()

    // <Route path="/user/:id" element={<User/>}/> jo yha id de rkha hai whi access krne me use krna h

    console.log(params.id)
  return (
    <div className='User'>
        <button onClick={()=>navigation("/about")}>Click me</button>
    </div>
  )
}

export default User