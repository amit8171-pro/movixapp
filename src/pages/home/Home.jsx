import React from 'react';
import './Style.scss';
import Herobannar from './herobannar/Herobannar';
import Trending from './trending/Trending';
import Popular from './popular/Popular';
import Toprated from './toprated/Toprated';

export default function Home() {
  return (
    <div className='homepages'>
    <Herobannar/>
    <Trending/>
    <Popular/>
    <Toprated/>
    </div>
  )
}
