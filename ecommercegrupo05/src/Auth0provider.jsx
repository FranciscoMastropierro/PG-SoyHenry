import React from 'react';
import { Auth0Provider } from "@auth0/auth0-react";


export default function ({children}) {


    return (
        <Auth0Provider
        domain='dev-81nqhdy2.us.auth0.com'
        clientId='A6q8eeIevBO37mbaercJOAcuJU1LRRns'
        redirectUri={window.location.origin}
        >
            {children}
        </Auth0Provider>
    )
}