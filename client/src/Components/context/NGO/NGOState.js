import NGOContext from './NGOContext'
import { useState } from 'react'
import API_BASE_URL from '../../../config/api'

export default function NGOState(props) {
  const NGOInitial = []

  const [NGO, setNGO] = useState(NGOInitial)

  //Add a note

  const getNGO=async(email)=>{
    // console.log("inside get NGO" , email);
    const response = await fetch(`${API_BASE_URL}/api/auth/ngo/fetchallngo?email=${encodeURIComponent(email)}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setNGO(json)
  }

  return (
    <NGOContext.Provider value={{ getNGO ,NGO}}>
      {props.children}
    </NGOContext.Provider>
  )
}
