import React from 'react'

export default function SwitchListType(props) {
    const {listType, setListType} = props
    
    return <div style={{
        position: 'fixed',
        bottom:30,
        right: 50,
        zIndex: 99999999999
    }}>

    <select onChange={(event) => {
        setListType(event.target.value)
    }}
    value={listType}
    >
        <option value="InfiniteLoaderList">InfiniteLoaderList</option>
        <option value="InfiniteLoaderListWithWindow">InfiniteLoaderListWithWindow</option>
    </select>

    </div>
}