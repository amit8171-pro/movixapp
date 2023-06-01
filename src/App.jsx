import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { fetchDataFromApi } from './utils/Api'
import { useSelector, useDispatch } from 'react-redux';
import { getApiConfiguration, getGenres } from './store/homeSlice';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Pagenotfound from './pages/404/Pagenotfound';
import Detailes from './pages/details/Detailes';
import Explore from './pages/explore/Explore';
import Searchresult from './pages/searchresult/Searchresult';
import Footer from './components/footer/Footer';



export default function App() {

  const dispatch = useDispatch();
  const {url} = useSelector((state)=>
    state.home
  );

  

  useEffect(()=>{

    fetchApiConfig();
    genresCall();

  }, [])

  const fetchApiConfig =()=>{
    fetchDataFromApi('/configuration').then((res)=>{
      console.log(res);
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",


      };
      dispatch(getApiConfiguration(url));
    });
  };

  const genresCall = async()=> {
    let promises = []
    let endPoints = ["tv", "movie"]
    let allGenres = {}
    endPoints.forEach((url)=>{
      promises.push(fetchDataFromApi(`/genre/${url}/list`))

    });

    const data = await Promise.all(promises);
    console.log(data);
    data?.map(({genres})=>{
       return  genres?.map((item)=>(allGenres[item.id] = item))
    });

    dispatch(getGenres(allGenres));


        
    
  }

  return (
    <div>
          <BrowserRouter>
          <Header/>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/:mediaType/:id' element={<Detailes/>} />
              <Route path='/search/:query' element={<Searchresult/>} />
              <Route path='/explore/:mediaType' element={<Explore/>} />
              <Route path='*' element={<Pagenotfound/>} />
            </Routes>
            <Footer/>
          </BrowserRouter>
    </div>
  )
}
