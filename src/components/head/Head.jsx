import React from "react"
import SettingsIcon from "@mui/icons-material/Settings"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined"
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined"

const Head = ({ dark, setMode }) => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='left'>
            <div className='logo'>
              <img src='./assets/images/logo.png' alt='' />
            </div>
          </div>
          <div className='right flexCenter'>
            <div className='search flexCenter'>
              <input type='text' placeholder='Search...' />
              <SearchOutlinedIcon className='iconHead' />
            </div>
            <NotificationsNoneOutlinedIcon className='iconHead' />
            <div className='profile flexCenter'>
              <img className='imageCircle' src='https://images.pexels.com/photos/1964970/pexels-photo-1964970.jpeg?cs=srgb&dl=pexels-edgar-serrano-1964970.jpg&fm=jpg' alt='' />
              <span>Nowak</span>
              <KeyboardArrowDownOutlinedIcon className='iconHead' />
            </div>
            <button onClick={() => setMode(!dark)}>
              <SettingsIcon className='iconHead' />
            </button>
            {/*<button onClick={toggleStyle}>
              <SettingsIcon className='iconHead' />
              {btn}
            </button>*/}
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
