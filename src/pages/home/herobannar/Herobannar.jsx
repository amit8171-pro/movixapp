import React, { useEffect, useState } from 'react';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../Hooks/useFetch';
import { useSelector } from 'react-redux';
import Lazyimg from '../../../components/lazyloadimg/Lazyimg';
import ContentWrapper from '../../../components/contentwrapper/ContentWrapper';







export default function Herobannar() {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const {data, loading} = useFetch("/movie/upcoming");
  const {url} = useSelector((state)=>state.home)


  useEffect(()=>{
    const bg = url.backdrop + data?.results?.[Math.floor(Math.random()*20)]?.backdrop_path;
    setBackground(bg);
  }, [data])

  const searchQueryEvent = (event)=>{
    if (event.key === "Enter" && query.length>0){
      navigate(`/search/${query}`);

    }

  }
  return (
    <div>
      <div className='herobannar'>
       {!loading &&   <div className='backdrop-img'>
        <Lazyimg src={background} alt=''/>
      </div>}
      <div className='opacity-layer'></div>
        <ContentWrapper>
          <div className='hero-Bannar-Content'>
            <span className='title'>Welcome.</span>
            <span className='subTitle'>Millions of movies, Tv Shows people
            to descover.
                 Explore now.</span>
                 <div className='search'>
                  <input type='text'
                    placeholder="Search for a movie or Tv shows..."
                    onChange={(e)=>setQuery(e.target.value)}
                    onKeyUp={searchQueryEvent}
                  />
                  <button>Search</button>
                 </div>
          </div>
        </ContentWrapper>
       
      </div>
    </div>
  )
}
