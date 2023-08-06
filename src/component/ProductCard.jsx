import React from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import { useSelector,useDispatch } from 'react-redux';
import { addToCart } from '../App/cartSlice';
export default function ProductCard() {

  const items=useSelector((state)=>state.carts.items)
const dispatch=useDispatch();

  return (
    <div className='product'>
          <MDBContainer>
          <MDBRow className='mb-3'>
            {items.map((item)=>(
              <MDBCol key={item.id} size='md'>
              <MDBCard>
                  <MDBCardImage src={item.img} fluid alt='...' />
                <MDBCardBody>
                  <MDBCardTitle>{item.title}</MDBCardTitle>
                  <MDBCardText>
                   {item.price}
                  </MDBCardText>
                  <MDBBtn onClick={()=>dispatch(addToCart(item))}>Add to Cart</MDBBtn>
                </MDBCardBody>
              </MDBCard>
              </MDBCol >
            ))}
          
    </MDBRow>
    </MDBContainer>
    </div>
  );
}