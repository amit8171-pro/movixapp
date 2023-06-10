import React, { useState } from 'react';

import ContentWrapper from '../../../components/contentwrapper/ContentWrapper';
import SwitchTab from '../../../components/switchtab/SwitchTab';
import useFetch from '../../../Hooks/useFetch';
import Carousel from '../../../components/carousel/Carousel';





export default function Trending() {
    
  const [endpoints, setEndpoints] = useState("day");

  const {data, loading} = useFetch(`/trending/all/${endpoints}`);
    const onTabChange = (tab)=>{
      setEndpoints(tab === "Day" ? "day" : "week");

    }
  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className='carouselTitle'>Trending</span>
        <SwitchTab data={["Day", "Week"]} onTabChange={onTabChange}/>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading}/>
    </div>
  )
}
