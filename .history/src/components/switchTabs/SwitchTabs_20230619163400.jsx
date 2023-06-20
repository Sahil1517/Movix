import React,{useState} from 'react'
import "./style.scss";
const SwitchTab = ({data, onTabChange}) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);

const activeTab = (t)

  return (
    <div className='switchingTabs'>
      <div className="tabItems">
         {data.map((tab, index)=>(
          <span key={index} className={`tabItem`}>
            {tab}
          </span>
         ))}
         <span className="movingBg" style={{left}}/>
      </div>
    </div>
  )
}

export default SwitchTab