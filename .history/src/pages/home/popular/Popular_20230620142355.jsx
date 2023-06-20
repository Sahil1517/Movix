import React, {useState} from 'react'
import Carousel from '../../../components/carousel/Carousel';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
  import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
  import useFetch from '../../../hooks/useFetch';
const Popular = () => {

    const [endpoint, setEndpoint] = useState("day");

    const {data, loading} = useFetch(`/trending/all/${endpoint}`)

    const onTabChange = (tab) =>{
       setEndpoint(tab === "Day" ? "day":"week")
    }
  return (
    <div className='carouselSection'>
        <ContentWrapper>
<span className="carouselTitle">What's Popular</span>
<SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange}/>
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading}/>
        </div>
  );
}

export default Popular;