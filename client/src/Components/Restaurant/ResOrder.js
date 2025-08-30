import React, { useContext, useEffect } from 'react';
import orderContext from "../context/Order/orderContext";
import { useNavigate } from 'react-router-dom';
import ResOrderCard from './ResOrderCard';

export default function ResOrder() {
    const navigate = useNavigate();
    const context = useContext(orderContext);
    
    const { order, getOrderByres } = context;
  
    useEffect(() => {
      
      const email = localStorage.getItem('email');
      if ( localStorage.getItem('restroAuthToken')) {
        getOrderByres(email);
      } else {
        
        navigate('/login');
      }
    }, [getOrderByres, navigate])

    console.log(order)
    return (
        <>
          <h1 className='text-4xl font-bold text-center mt-20 ' >Received Orders</h1>
          <hr className='ml-[41%] w-60 bg-green-600 h-[2px]' />
         {Array.isArray(order) && order.length > 0 ? (
          order.map((ord) => {
            return (
                <ResOrderCard order_detail={ord} />
          
            );
          })
        ) : ( 
          <p>No orders available</p>
        )}
        </>
        
    );
}