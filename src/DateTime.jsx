import React, { useState, useEffect } from 'react';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"

function DateTime() {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const displayTodayDate = dateTime.getDate()+'/'+(dateTime.getMonth()+1)+'/'+dateTime.getFullYear();
    const dt = dateTime.toDateString();
    const displayTime = dateTime.getHours()+':'+dateTime.getMinutes()+':'+dateTime.getSeconds();

    return (
        <div>
            <center>
                <div className='container'>
                <p class="h4"> {dt} - {displayTime}</p>
                </div>
              
            </center>
        </div>
    );
}

export default DateTime;
