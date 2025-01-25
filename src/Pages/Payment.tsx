import { useParams } from 'react-router-dom';

const Payment = () => {
  const { paymentId } = useParams();
  console.log(paymentId);
  
  return (
    <div>Payment : {paymentId}</div>
  )
}

export default Payment