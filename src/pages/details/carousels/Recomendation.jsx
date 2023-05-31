import React from 'react';
import Carousel from "../../../components/carousel/Carousel";
import useFetch from '../../../Hooks/useFetch';



export default function Recomendation({ mediaType, id }) {
    const { data, loading, error } = useFetch(
        `/${mediaType}/${id}/recommendations`
    );
  return (
    <Carousel
    title="Recommendations"
    data={data?.results}
    loading={loading}
    endpoint={mediaType}
/>
  )
}
