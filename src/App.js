import React from 'react';
import NavBar from './Component/NavBar/NavBar';
import './App.css'
import Banner from './Component/Banner/Banner';
import RowPost from './Component/RowPost/RowPost';
import {actions,originals} from './Url';


function App() {





  
  return (
    
  <div className='App'> 
 <NavBar/>
 <Banner/>
 <RowPost  url={originals} title='Netflix Originals' />
 <RowPost  url={actions }title='Actions' isSmall  />
</div>
  
  );

}
export default App;
