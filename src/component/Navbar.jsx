import React, { useEffect } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../App/cartSlice';

export default function Navbar() {

  const {totalQuantity,cart}=useSelector((state)=>state.carts);
const dispatch=useDispatch();
useEffect(()=>{
dispatch(getCartTotal())
},[cart])

  return (
    <MDBNavbar style={{marginBottom:"1rem"}} light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand>Navbar</MDBNavbarBrand>
        <span>
          <Link to="/">All Product</Link></span>
        <MDBBtn>
          <Link to="/cartpage" style={{color:"black"}}>Cart({totalQuantity})</Link></MDBBtn> 
      </MDBContainer>
    </MDBNavbar>
  );
}