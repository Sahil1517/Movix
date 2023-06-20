import React,{useState} from 'react'
import "./style.scss";
const SwitchTab = ({data, onTabChange}) => {
  const [selectedTab, setSelectedTab]
  return (
    <div className='switchingTabs'>
      <div className="tabItems">
         {data.map((tab, index)=>(
          <span key={index} className={`tabItem`}>
            {tab}
          </span>
         ))}
      </div>
    </div>
  )
}

export default SwitchTab