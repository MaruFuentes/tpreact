import React from 'react';
import './spinner.css'

export const Spinner = () => {
    return (
       <div
        style={{
            height:'100vh',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#ece2ed'
        }}
       >
         <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
       </div>
    )
}
