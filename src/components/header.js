import React from 'react';

export default (props)=>{
    return(
        <div className="companyHeader row">
            <h2 className="companyHeaderTitle">{props.companyName}</h2>
        </div>
    );
}