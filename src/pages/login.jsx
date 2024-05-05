import React, {useState} from 'react'
import styled from "styled-components";
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';
import {onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
position: relative;
.content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template: rows; 
   
    .body {
        gap: 1rem;
        .text {
            gap: 1rem;
            text-align: center;
            font-size: 2rem;
        }
        .form {
            display: grid;
            width: 30%;
            input {
                font-size: 2rem;
                height: 3rem;
            }
            button {
                padding: 0.5rem 1rem;
                background-color: #e50974;
                border: none;
                cursor: pointer;
                color: white;
                border-radius: 0.2rem;
                font_weight: bolder;
                font-size: 1.05rem;
            }
        }
        button {
            padding: 0.5rem 1rem;
            background-color: #e50974;
            border: none;
            cursor: pointer;
            color: white;
            border-radius: 0.2rem;
            font_weight: bolder;
            font-size: 1.05rem;
        }
    }
}
`;


export default function Login(){
    const navigate = useNavigate();

    const [formValues,setFormValues] = useState({email: "", password: ""})

    const handleLogin = async() => {
        
        try {
            const {email,password} = formValues;
            await signInWithEmailAndPassword(firebaseAuth,email,password)
            console.log(formValues)
        } catch (error) {
            console.log(error)
        }
        
    }

    onAuthStateChanged(firebaseAuth,(currentUser) => {
        if(currentUser) navigate("/")
    })
  return (
    <Container>
      <BackgroundImage/>
          <div className="content">
              <Header/>
              <div className='body flex column a-center j-center'>
                  <div className='form'>
                      <input type='email' placeholder='Enter your email' name='email' value = {formValues.email} onChange={e => setFormValues({...formValues,[e.target.name] : e.target.value})}/>
                      <input type="password" placeholder='password' name='password' value= {formValues.password} onChange={e => setFormValues({...formValues,[e.target.name] : e.target.value})}/>
                  </div>
                  <button onClick={handleLogin}> Login </button>
              </div>
          </div>

    </Container>
  );
}




