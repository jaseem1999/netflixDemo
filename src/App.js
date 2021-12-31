
import React from 'react';
import './App.css';
import {orginals,action,horror,comedy,romance,documentaries,tranding} from './Url'
import Banner from './Components/Banner/Banner';
import NavBar from './Components/Navabr/NavBar';
import RowPost from './Components/RowPost/RowPost';
function App() {
  return (
    <div className="App">
       <NavBar/>
       <Banner/>
       <RowPost url={orginals} title="Netflix Orginals"/>
       <RowPost url={action} title="Actoin" isSmall/>
       <RowPost url={horror} title="Horror" isSmall/>
       <RowPost url={comedy} title="Comedy" isSmall/>
       <RowPost url={romance} title="Romance" isSmall/>
       <RowPost url={documentaries} title="Documetries" isSmall/>
       <RowPost url={tranding} title="Tranding"/>
       
    </div>
  );
}

export default App;
