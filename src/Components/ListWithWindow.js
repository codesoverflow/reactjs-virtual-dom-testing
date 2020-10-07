import React, {useState} from 'react';
import { FixedSizeList as List } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";

import ImageCard from './ImageCard'

const getArrayItems = () => {
  return  Array.from(Array(10).keys())
}

export default function AlignItemsList() {
  
  const [list, setList] = useState(() => {
    return getArrayItems()
  })

  const loadMoreItems = () => {
    console.log('called' + list.length)
    const newList = getArrayItems()
    setList([...list, ...newList])
  }
  


  return (
    
    <InfiniteLoader
        isItemLoaded={() => {
          return true
        }}
        itemCount={1000}
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
    
  );
}

function RowItem({ index, style }) {
      
      return (
        <div className="ListItem" style={style}>
          <ImageCard key={index} />
        </div>
      );
  }

