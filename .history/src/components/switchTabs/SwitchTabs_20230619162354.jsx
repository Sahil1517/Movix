import React from 'react'
import "./style.scss";
const SwitchTab = ({data, onTabChange}) => {
  return (
    <div className='switchingTabs'>
      <div className="tabItems">
         {data.map(())}
      </div>
    </div>
  )
}

export default SwitchTab