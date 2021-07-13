import React from 'react'
import './styles.css'

const index = ({show,click}) => {
    return show&&<div className="backdrop" onClick={click}></div>
}

export default index
