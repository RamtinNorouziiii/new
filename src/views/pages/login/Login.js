import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CImage,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import  bankLogo  from 'src/assets/images/bank-logo.png'
import { RiLoginBoxLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
const Login = () => {
  const navigate = useNavigate()
  const [username,setUsername]=useState()
  const [password,setPassword]=useState()
const InputHandler = (e)=>{
  console.log(e)
if(e.target.name==="username"){
setUsername(e.target.value)
}else{
  setPassword(e.target.value)
 
}
}
const submitForm = ()=>{
  if(username==="adminAvin" && password==="adminAvin"){
    window.localStorage.setItem("TOKENAVIN","admin")
window.location.href="http://localhost:3000/#/forms/validation"
  }else{
    window.localStorage.removeItem("TOKENAVIN")

    return toast.error(" نام کاربری یا رمز عبور اشتباه میباشد ")
  }
}
  return (
    <div className=" min-vh-100 d-flex flex-row align-items-center loginBg"  >
      <CContainer>
      <div style={{width:"100%",textAlign:"center"}} >
      <CImage
          style={{margin:"auto",marginBottom:"20px"}}
                src={bankLogo}
               height="70px"
              />
      </div>
        <CRow className="justify-content-center">
       
          <CCol md={4}>
         
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h6 className='text-center' >  ورود به سامانه جامع FPL </h6>
                    <br />
                    <CInputGroup className="mb-3">
                      
                      <CFormInput placeholder="نام کاربری" name='username' onChange={(e)=>{InputHandler(e)}} />
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                     
                      <CFormInput
                        type="password"
                        placeholder="رمز عبور"
                        name="password"
                        onChange={(e)=>{InputHandler(e)}}
                      />
                       <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                    </CInputGroup>
                    <CRow>
                      <CCol style={{textAlign:"center"}} >
                       
                        <CButton  className="px-4" style={{fontSize:"12px",backgroundColor:"#d92f42",color:"white"}} onClick={submitForm} >
                       <RiLoginBoxLine style={{margin:"auto",fontSize:"16px"}} />
                       <span className='mx-2' >  ورود </span>
                        </CButton>
                      </CCol>
                      
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
