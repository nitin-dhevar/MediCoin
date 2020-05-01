import React from 'react';
import {Container,Image} from 'semantic-ui-react';
import Header from './header'
import Head from 'next/head'

export default (props)=>{
return(
    <div >
        <Container>
            <Head>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
            </Head>
        <Header/>
        
        {props.children}
       
        </Container>
    </div>
)
};