import React, { useState } from "react"
import "./header.css"
import Head from "../head/Head"
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined"
import InvertColorsOutlinedIcon from "@mui/icons-material/InvertColorsOutlined"
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined"
import SupportOutlinedIcon from "@mui/icons-material/SupportOutlined"
import StyleOutlinedIcon from "@mui/icons-material/StyleOutlined"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"

const Header = ({ dark, setMode }) => {
  // Toogle Menu
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <section className='header'>
        <Head dark={dark} setMode={setMode} />
        <header>
          <div className='container'>
            {/*<ul className='navMenu'>*/}
            <ul className={Mobile ? "navMenu-list" : "link"} onClick={() => setMobile(false)}>
              <li>
                <a href='/' className='navIcon'>
                  <DashboardOutlinedIcon className='navIcon active' />
                  Dashboard
                </a>
              </li>
              <li>
                <InvertColorsOutlinedIcon className='navIcon' />
                <a href='/'>UI Elements</a>
              </li>
              <li>
                <GridViewOutlinedIcon className='navIcon' />
                <a href='/'>Apps</a>
              </li>
              <li>
                <SupportOutlinedIcon className='navIcon' />
                <a href='/'>Components</a>
              </li>
              <li>
                <StyleOutlinedIcon className='navIcon' />
                <a href='/'>Pages</a>
              </li>
            </ul>
            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </header>
      </section>
    </>
  )
}

export default Header
