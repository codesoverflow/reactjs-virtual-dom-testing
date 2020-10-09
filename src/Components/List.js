import React, {useState} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

import ImageCard from './ImageCard'
import FixedForm from './FixedForm'


const getArrayItems = () => {
  return  Array.from(Array(100).keys())
}

export default function AlignItemsList() {
  
  const [list, setList] = useState(() => {
    return getArrayItems()
  })
  const [name, setName] = useState('')

  return (
    <>
    <FixedForm outsideName={name} setOutsideName={setName} />
    <InfiniteScroll
      dataLength={list.length}
      next={() => {
        console.log('called' + list.length)
        const newList = getArrayItems()
        setList([...list, ...newList])
      }}
      //style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
      //inverse={true} //
      hasMore={true}
      loader={<h4>Loading...</h4>}
      //scrollableTarget="scrollableDiv"
    >
      {list.map((item, index) => {
        return <ImageCard key={index} />
      })}
        
      
      </InfiniteScroll>
    </>
  );
}