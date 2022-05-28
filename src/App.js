import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Header from './components/header/header';
import { Home } from './pages/Home/Home';
import { Create } from './pages/create/Create';
import { Collection } from './pages/collection/Collection';
import { CreateCollections } from './pages/createCollections/CreateCollections';
//  import { Explore } from './pages/explore/Explore';
import { Stats } from './pages/stats/Stats';
import { Top } from './pages/Top/Top';
import { Connection } from './pages/connection/Connection';
import { Profile } from './pages/profile/Profile';
import { Collected } from './components/collected/Collected';
import { Created } from './components/created/Created';
import ListNFT from './pages/ListNFT/ListNFT'

// import Navbar from './components/header/Navbar';
import ListedNFTs from './pages/ListedNFTs/ListedNFTs';
import Moralis from "moralis/dist/moralis.min.js";
import {serverURL,appID} from "./moralis/credentials"


function App() {
  const serverUrl =serverURL;
  const appId =appID;
  Moralis.start({ serverUrl, appId });
  console.log("Connected");
 
  return (
    <div className="App">
      <Router>
      {/* <Navbar/> */}
        <Header />
        <div className='appContainer'>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/create' component={Create}></Route>
            <Route exact path='/collection' component={Collection} ></Route>
            <Route exact path='/createCollections' component={CreateCollections}></Route>
            <Route exact path='/explore' component={Top}></Route>
            <Route exact path='/stats' component={Stats}></Route>
            {/* <Route exact path='/top' component={Top}></Route> */}
            <Route exact path='/connection' component={Connection}></Route>
            <Route exact path='/profile' component={Profile}></Route>
            <Route exact path='/profile_collected' component={Collected}></Route>
            <Route exact path='/profile_created' component={Created}></Route>
            <Route exact path="/reSellNFTs" component={ListNFT}></Route>
            <Route exact path='/listedNfts' component={ListedNFTs}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
} 

export default App;
