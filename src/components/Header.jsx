import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
padding: 0 10rem;
.logo{
    img{
        height: 8rem;
    }
}

button{
    padding: 0.5rem 1rem;
    background-color: #e50974;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 0.2rem;
    font_weight: bolder;
    font-size: 1.05rem;

}
`;
const Header = (props) => {
    const navigate = useNavigate();
  return (
    <Container className='flex a-center j-between'>
        <div className='logo'>
        <img src={logo} alt="logo" />
        </div> 
        <button onClick={() => navigate(props.login ? "/Login" : "/Signup")}> {props.login ? "Login" : "Signup"} </button>
    </Container>
  )
}

export default Header
