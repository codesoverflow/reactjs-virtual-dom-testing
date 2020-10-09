import React, {Profiler, useState} from 'react';
import Container from '@material-ui/core/Container';
import './App.css';
import ListWithWindow from "./Components/ListWithWindow";
import InfiniteLoaderList from "./Components/List";

import {onRenderCallback} from './Components/ListUtils'
import SwitchListType from './Components/SwitchListType'


const App = () => {
  const [listType, setListType] = useState('InfiniteLoaderList')
return <Container fixed >
    <SwitchListType listType={listType} setListType={setListType}  />
    <Profiler id="List" onRender={onRenderCallback}>
    {listType === 'InfiniteLoaderList' ? <InfiniteLoaderList /> : 
    <ListWithWindow />
    }
    </Profiler>
</Container>
  
}


  

export default App;
