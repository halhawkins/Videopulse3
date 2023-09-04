import React, { useEffect } from 'react';
import './App.css';
import Trending from './Trending/Trending';
import { Route, Routes } from 'react-router';
import { useParams } from 'react-router-dom';

function App() {
  // const params = useParams();
  // console.log("params",params);
  useEffect(() => {
    console.log('App is running');
  }, []);

  return (
      <div className="App app-background flex justify-center">
        <Routes>
          <Route path={'/'} element={
          <div className="bg-red-100 basis-10/12 flex flex-col">
              <Trending p={1} />
          </div>} />
        </Routes>
      </div>
  );
}

export default App;
