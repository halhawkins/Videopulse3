import React, { useEffect } from 'react';
import './App.css';
import Trending from './Trending/Trending';
import { Route, Routes } from 'react-router';
import { useParams } from 'react-router-dom';
import TopNavigation from './TopNavigation/TopNavigation';
import BurgerMenu from './BurgerMenu/BurgerMenu';

function App() {
  // const params = useParams();
  // console.log("params",params);
  useEffect(() => {
    console.log('App is running');
  }, []);
  let params = useParams();
  let p = 1;
  params.p !== undefined? p = 1 : Number(params.p);

  return (
      <div className="App app-background flex justify-center absolute">
        <BurgerMenu />
        {/* <TopNavigation /> */}
        <Routes>
          <Route path={'/'} element={
          <div className="bg-red-100 basis-10/12 flex flex-col">
              <Trending p={1} />
          </div>} />
          <Route path={'/trending'} element={
          <div className="bg-red-100 basis-10/12 flex flex-col">
            {params.p !== undefined? <Trending p={1} /> : <Trending p={p} />}
              
          </div>} />
        </Routes>
      </div>
  );
}

export default App;
