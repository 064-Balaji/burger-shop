import React from 'react'
import { useParams } from 'react-router-dom'

// useState

const Payment = () => {
  // {} => {Variable}
  const { paymentId } = useParams();
  console.log(paymentId);
  
  return (
    <div>Payment : {paymentId}</div>
  )
}

export default Payment