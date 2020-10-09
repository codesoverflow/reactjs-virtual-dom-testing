import React, {useState} from 'react'

export default function FixedForm(props) {
    const {outsideName, setOutsideName} = props
    const [innerName, setInnerName] = useState('')
    return <div style={{
        position: 'fixed',
        top:30,
        left: 50,
        zIndex: 99999999999
    }}>

    <div>
        OuterState :  <input type="text" value={outsideName} onChange={(event) => {
            setOutsideName(event.target.value)
        }} />
    </div>

    <div>
        InnerState : <input type="text" value={innerName} onChange={(event) => {
            setInnerName(event.target.value)
        }} />
    </div>

    </div>
}