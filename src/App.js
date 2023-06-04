import React from 'react';
import './App.css';
import MainRoutes from './routes/MainRoutes';

function App() {

  const navItems=document.getElementsByClassName('active');
  setTimeout(() => {
    for (let i=0;i<navItems.length;i++){
      navItems[i].classList.add('on');
    };
  }, 0);
  

  return (
   <>
   <MainRoutes/>
   </>
  );
}

export default App;
