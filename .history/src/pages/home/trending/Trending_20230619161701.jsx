import React from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
  import SwitchTab from '../../../components/switchTabs/SwitchTab';
const Trending = () => {
  return (
    <div className='carouselSection'>
        <ContentWrapper>
<span className="carouselTitle">Trending</span>
<SwitchTab/>
        </ContentWrapper>
        </div>
  );
}

export default Trending;