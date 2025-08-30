import RESContext from './RESContext'
import { useState } from 'react'
import API_BASE_URL from '../../../config/api'

export default function RESState(props) {
  const RESInitial = []

  const [RES, setRES] = useState(RESInitial)

  //Add a note

  const getRES=async(email)=>{
    // console.log("inside get Res" , email);
    const response = await fetch(`${API_BASE_URL}/api/auth/res/fetchallres?email=${encodeURIComponent(email)}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setRES(json)
  }

  return (
    <RESContext.Provider value={{ getRES ,RES}}>
      {props.children}
    </RESContext.Provider>
  )
}