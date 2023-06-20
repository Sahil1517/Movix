import React from 'react'
import "./style.scss";
const SwitchTab = ({data, onTabChange}) => {
  return (
    <div className='switchingTabs'>
      <div className="tabItems">
         {data.map((tab, index)=>)}
      </div>
    </div>
  )
}

export default SwitchTab