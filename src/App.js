import React from 'react';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton } from 'react-twitter-embed';
import logo from '../src/img/Arb_logo.png';
import chris from '../src/img/Chris_circle.png';
import rick from '../src/img/Rick_circle.png';
import ContactsFooter from '../src/img/ContactsFooter.png';
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
        <h1>Economists & Strategists</h1>
          <div class="WhoisArbBox">

          <h5>Executive Search since 2011 </h5>
          <b>Specialised in Macro </b>
          <p>
          From inception we started as a firm recruiting Economists and Strategists and have grown that to include Quants, Sales, Trading and Portfolio Managers.</p> 
          <p>
          We have recruited into half of the worlds top 10 hedge funds and top 10 asset managers.
          </p>
          <p> Retained & Contingent Search on a case by case basis</p>



          </div>
          <div class="ChrisBox">
          <h5>Chris Apostolou</h5>
          <b>Partner</b><p></p>
          <img className="logo" src={chris} />
          <p> After 10 years working as an Economist, Bond & Credit Analyst at JPMorgan, Mizuho Bank, New Bond Street Asset Management, Chris started Arbitrage Search placing Economists in 2011.</p>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/apostolouc/">Connect to Chris on Linkedin</a>




          </div>
          <div class="RickBox">
          <h5>Rick Robinson</h5>
          <b>Partner</b><p></p>
          <img className="logo" src={rick} />
          <img></img>
          <p> As a journalist Rick built many of the same skills in seeking out information that he has used in his 12 year year career as a headhunter. He has been with Arbitrage since 2014</p>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/robinsonrick/">Connect to Rick on Linkedin</a>
          </div>

          <div class="WeHave"><p> We have recruited in London, New York, Hong Kong, Singapore, Germany, France, Cyprus, Palm Beach, Miami etc</p></div>
          
          
      </div>
     

      <div className="column2"><h2>Vacancies</h2>
      
          <div class="Job1Box">
              <h5> Credit Analyst, Sovereigns & Financials</h5>
              <p>Niche bank with global presence seeks an experienced analyst to lead all coverage of credit</p>


          </div>
          <div class="Job2Box">
          <h5> Asia Economist ex-China</h5>
              <p>Top Tier Global Macro Hedge Fund seeks an analyst with 5-10 years of experience covering countries such as Indonesia and Philippines, forecasting GDP, Inflation and high frequency indicators</p>
          </div>
          
          
          <div class="Job3Box">
          <h5> Asset Raiser, FX & Credit Hedge Fund</h5>
              <p>Sales analyst with 1-3 years to support a new head of team. Client with highly regarded reputation among hedge fund community</p>
          </div>
          <div class="pleaseconnect"><p> for all vacancies please connect to us on linkedin or send an email/call in</p></div>
          <div class="Job4Box" onClick="">
          <h5> Portfolio Manager / Proprietary Trader, London or NY</h5>
              <p>Global Fund with Capital to deploy seeks only the best performing traders with strong track records. Min $100m+ book</p>
          </div>
          
          <div class="Job5Box">
          <h5> Macro Research Sales</h5>
              <p>Independent Research firm with quality research output seeks to expand its sales presence, CSA / Subscription sales experience sought</p>
          </div>
          <div class="Job6Box">
          <h5> Quantitative Analyst</h5>
              <p> Building High Frequency trading FX models, using python, MatLab and with awareness of FIX protocol and low latency technologies</p>
          </div>
          <div class="pleaseconnect"><p> for all vacancies please connect to us on linkedin or send an email/call in</p></div>
          <div class="RecruitWithUsBox">
          <h5> Request more information for a search</h5>
              <p> Contact us to discuss different approaches in how to add alpha to your team. +44 203 823 4541.</p>


          </div>
          
      
      </div>

      <div className="column3"><h2>Top Vacancies & Charts</h2>
      <TwitterFollowButton
    screenName={'arbitragesearch'}
  />
      <TwitterTimelineEmbed
          sourceType="profile"
          screenName="arbitragesearch"
          options={{height: 1010}}
          
        />

<div class="WeHave2"><p> Recruiting Economists, FX Strategist, Equity Strategist, Macro Portfolio Manager, Multi-Asset PM, EM Debt Analysts</p></div>
       


      </div>

    </div>

    </div>

    <div className="Footer">    
    
    <img className="logo" src={ContactsFooter} />
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
