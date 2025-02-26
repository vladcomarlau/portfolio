import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

export default function Home() {
    const redirect = () => {
        window.location.href ='https://comarlau.com/business-management';
    }

    return(
        <> 
            Portfolio home - Kaniko test git 2
            <button onClick={redirect}>go to business-management web app</button>
        </>
    );
}
