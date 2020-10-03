import React from 'react';
import logo from '../src/img/Arb_logo.png';
import './App.css';

function App() {
  return (
    <div className="App">

    <div className="PreHeader">         
    </div>

    <div className="Header">
      
      <img className="logo" src={logo} />
    </div>

    <div className="PostHeader">         
    </div>

    <div class="container">


    <div class="flex-container">
      <div className="column1">
        <h2>About Us</h2>
    <div class="WhoisArbBox"></div>
    <div class="ChrisBox"></div>
    <div class="RickBox"></div>
    <div class="RecruitWithUsBox"></div>
    <div class="PastPlacementsBox"></div>
      </div>

      

      <div className="column2"><h2>Vacancies</h2>
      
      <div class="Job1Box"></div>
      <div class="Job2Box"></div>
      <div class="Job3Box"></div>
      <div class="Job4Box"></div>
      <div class="Job5Box"></div>
      
      </div>

      <div className="column3"><h2>Twitter</h2></div>

    </div>

    </div>

    <div className="Footer">    
    +44 203 823 .... | +1 786 818 ... | firstcontact@arbitrage-search....  
    </div>


    <div className="PostFooter1">
    
    
    </div>
    <div className="PostFooter2">
    
    © Arbitrage Search 
    ALL RIGHTS RESERVED.
    </div>




    </div>
  );
}

export default App;
