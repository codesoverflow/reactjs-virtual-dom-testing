import React, {useState} from 'react';
import { FixedSizeList as List } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";

import ImageCard from './ImageCard'
import FixedForm from './FixedForm'

const getArrayItems = () => {
  return  Array.from(Array(10).keys())
}

export default function AlignItemsList() {
  
  const [list, setList] = useState(() => {
    return getArrayItems()
  })

  const [name, setName] = useState('')

  const loadMoreItems = () => {
    console.log('called' + list.length)
    const newList = getArrayItems()
    setList([...list, ...newList])
  }
  


  return (
    <>
    <FixedForm outsideName={name} setOutsideName={setName} />
    <InfiniteLoader
        isItemLoaded={() => {
          return true
        }}
        itemCount={10000}
        loadMoreItems={loadMoreItems}
    >


    {({ onItemsRendered, ref }) => (
          <List
            className="List"
            height={721}
            itemCount={1000}
            itemSize={721}
            onItemsRendered={onItemsRendered}
            ref={ref}
            //width={300}
          >
            {RowItem}
          </List>
        )}  
        
      
    </InfiniteLoader>
    </>
  );
}

function RowItem({ index, style }) {
      
      return (
        <div className="ListItem" style={style}>
          <ImageCard key={index} />
        </div>
      );
  }

