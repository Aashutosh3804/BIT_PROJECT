import React from 'react'
import MarksComp from './MarksComponent'
export default function MarksDiv() {
    let marks =[40,39,36]
    return (
        <div id="marksDivKaBaap">
            <MarksComp marks={marks} subject ={"DAA"}/>
            <MarksComp marks={marks} subject ={"OOP"}/>
            <MarksComp marks={marks} subject ={"OS"}/>
        </div>
    )
}
