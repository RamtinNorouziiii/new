import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CHeader,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  useColorModes,
  CButton,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilContrast,
  cilEnvelopeOpen,
  cilExitToApp,
  cilList,
  cilMenu,
  cilMoon,
  cilSun,
} from '@coreui/icons'

import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'

const AppHeader = () => {
  const headerRef = useRef()
  const { colorMode, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')
  const [today, setDate] = React.useState(new Date());
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  useEffect(() => {
    document.addEventListener('scroll', () => {
      headerRef.current &&
        headerRef.current.classList.toggle('shadow-sm', document.documentElement.scrollTop > 0)
    })
    const timer = setInterval(() => { // Creates an interval which will update the current data every minute
      // This will trigger a rerender every component that uses the useDate hook.
      setDate(new Date());
    }, 60 * 1000);
    return () => {
      clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
    }
  }, [])

  return (
    <CHeader position="sticky" className="mb-4 p-0" ref={headerRef} style={{backgroundColor:"#EAEAEA"}} >
      <CContainer className="border-bottom px-4" fluid>
        <CHeaderToggler
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
          style={{ marginInlineStart: '-14px' }}
        >
          <CIcon icon={cilMenu} size="lg" style={{color:"#212631"}}  />
        </CHeaderToggler>
        <CHeaderNav className="d-none d-md-flex" style={{fontSize:"11px"}}>
          {/* <CNavItem>
            <CNavLink to="/dashboard" as={NavLink}>
              Dashboard
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Users</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Settings</CNavLink>
          </CNavItem> */}
          کاربر علیرضا مرادی خوش آمدید !
        </CHeaderNav>
        <CHeaderNav className="ms-auto">
          {/* <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilBell} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilList} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilEnvelopeOpen} size="lg" />
            </CNavLink>
          </CNavItem> */}
        </CHeaderNav>
        <CHeaderNav>
        {/* <li className="nav-item py-1">
            <div className="vr h-100 mx-2 text-body text-opacity-75"></div>
          </li>

          <span className='m-auto'  style={{fontSize:"11px"}}  > {today?.toLocaleTimeString("fa", { hour: 'numeric', hour12: true, minute: 'numeric' })} </span> */}
          {/* <CDropdown variant="nav-item" placement="bottom-end">
            <CDropdownToggle caret={false}>
              {colorMode === 'dark' ? (
                <CIcon icon={cilMoon} size="lg" />
              ) : colorMode === 'auto' ? (
                <CIcon icon={cilContrast} size="lg" />
              ) : (
                <CIcon icon={cilSun} size="lg" />
              )}
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem
                active={colorMode === 'light'}
                className="d-flex align-items-center"
                as="button"
                type="button"
                onClick={() => setColorMode('light')}
              >
                <CIcon className="me-2" icon={cilSun} size="lg" /> Light
              </CDropdownItem>
              <CDropdownItem
                active={colorMode === 'dark'}
                className="d-flex align-items-center"
                as="button"
                type="button"
                onClick={() => setColorMode('dark')}
              >
                <CIcon className="me-2" icon={cilMoon} size="lg" /> Dark
              </CDropdownItem>
              <CDropdownItem
                active={colorMode === 'auto'}
                className="d-flex align-items-center"
                as="button"
                type="button"
                onClick={() => setColorMode('auto')}
              >
                <CIcon className="me-2" icon={cilContrast} size="lg" /> Auto
              </CDropdownItem>
            </CDropdownMenu>
          </CDropdown> */}
          <span className='m-auto'  style={{fontSize:"11px"}} > {new Date().toLocaleDateString('fa-IR')}</span>

         
          <li className="nav-item py-1">
            <div className="vr h-100 mx-2 text-body text-opacity-75"></div>
          </li>
          {/* <AppHeaderDropdown /> */}
          <a className='d-flex' style={{textDecoration:"none"}}  href='http://localhost:3000/#/login' >

          <CButton
          onClick={()=>{
            window.localStorage.removeItem("TOKENAVIN")
          }}
          style={{fontSize:"9px",margin:"auto",display:"flex",alignItems:"center",backgroundColor:"#e33044"}}
                       
                      >
         
          
                        <CIcon  style={{width:"11px",margin:"auto",color:"white"}} icon={cilExitToApp} className="me-2" />
                      <span style={{margin:"auto",color:"white"}} > خروج</span>
                      
                      </CButton>
                      </a>

        </CHeaderNav>
      </CContainer>
    
    </CHeader>
  )
}

export default AppHeader