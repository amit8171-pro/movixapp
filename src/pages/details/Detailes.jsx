import React from 'react';
import { useParams } from 'react-router-dom';
import DetailsBannar from './detailsbanner/DetailsBannar';

import useFetch from '../../Hooks/useFetch';
import './style.scss';
import Cast from './cast/Cast';
import VideoSection from './videoSections/VideoSection';
import Similler from './carousels/Similler';
import Recomendation from './carousels/Recomendation';

export default function Detailes() {
  const {mediaType, id} = useParams();
  const {data, loading} = useFetch(`/${mediaType}/${id}/videos`);
  const {data:credits, loading:loadingCredits} = useFetch(`/${mediaType}/${id}/credits`)
  
  return (
    <div>
      <DetailsBannar video={data?.results?.[0]} crew={credits?.crew}/>
      <Cast data={credits?.cast} loading={loadingCredits}/>
      <VideoSection data={data} loading={loading}/>
      <Similler mediaType={mediaType} id={id}/>
      <Recomendation mediaType={mediaType} id={id}/>
    </div>
  )
}
