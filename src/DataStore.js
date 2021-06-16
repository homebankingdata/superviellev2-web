import React from 'react';
import LogsTable from "./components/LogsTable.js";



function DataStore (){
    return (
        <div
            style={{
                marginTop:"75px",
                marginBottom:"100px",
                marginLeft:"150px",
                marginRight:"150px"
            }}>
            <div 
                style={{
                }}>
                <img id="img1" alt=""/>
                <img id="img2" alt=""/>
                <img id="img3" alt=""/>
            </div>
            <LogsTable/>
        </div>
    )
}

export default DataStore;
