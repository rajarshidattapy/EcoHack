import orderContext from './orderContext'
import { useState } from 'react'
import API_BASE_URL from '../../../config/api'

export default function OrderState(props) {
  const orderInitial = []

  const [order, setOrder] = useState(orderInitial)

  //Add a note

  const getOrder=async(email)=>{
    // console.log("inside get Order" , email);
    const response = await fetch(`${API_BASE_URL}/api/auth/user/fetchallorder?email=${encodeURIComponent(email)}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setOrder(json)
  }

  const getOrderByres=async(email)=>{
    // console.log("inside get Order" , email);
    const response = await fetch(`${API_BASE_URL}/api/auth/user/fetchallorderbyres?email=${encodeURIComponent(email)}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setOrder(json)
  }

  const addOrder=async(veg,nonveg,reason,restro,vegmeal,nonvegmeal,totalprice)=>{
    // console.log("inside add Order" , email);
    const response = await fetch(`${API_BASE_URL}/api/auth/user/addorder`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({veg,nonveg,reason,restro,vegmeal,nonvegmeal,totalprice}),
    });
    const json = await response.json();
    console.log(json)
  }

  return (
    <orderContext.Provider value={{ getOrder,getOrderByres,addOrder,order}}>
      {props.children}
    </orderContext.Provider>
  )
}