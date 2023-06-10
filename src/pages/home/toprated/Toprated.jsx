import React, { useState } from 'react';

import ContentWrapper from '../../../components/contentwrapper/ContentWrapper';
import SwitchTab from '../../../components/switchtab/SwitchTab';
import useFetch from '../../../Hooks/useFetch';
import Carousel from '../../../components/carousel/Carousel';





export default function Toprated() {
    
  const [endpoints, setEndpoints] = useState("movie");

  const {data, loading} = useFetch(`/${endpoints}/top_rated`);
    const onTabChange = (tab)=>{
      setEndpoints(tab === "Movies" ? "movie" : "tv");

    }
  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className='carouselTitle'>Top Rated</span>
        <SwitchTab data={["Movies", "Tv Shows"]} onTabChange={onTabChange}/>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endpoints={endpoints}/>
    </div>
  )
}
