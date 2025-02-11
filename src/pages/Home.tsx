import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

export default function Home() {
    const redirect = () => {
        window.location.replace('https://comarlau.com/business-management');
    }

    return(
        <> 
            Portfolio home
            <button onClick={redirect}>go to business-management</button>
        </>
    );
}