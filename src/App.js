import './App.css';
import React from 'react';
import {Header, Navbar, About, Projects, Footer} from "./components/index"

function App() {
  return (
    <main>
      <header className='header-bg'>
        <Navbar />
        <Header />
      </header>
      {/* <div className='grad1'></div> */}
      <div  className='header-bg' ><About/></div>
      {/* <div className='grad2'></div> */}
      <div className='header-bg'>
        <Projects />
      </div>
      <Footer/>
      
    </main>
  );
}

export default App;
