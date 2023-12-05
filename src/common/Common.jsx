import React from "react"
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined"

const Common = (props) => {
  return (
    <>
      <div className='cardHeading'>
        <h3>{props.title}</h3>
        <MoreVertOutlinedIcon className='headingIcon' />
      </div>
    </>
  )
}

export default Common
