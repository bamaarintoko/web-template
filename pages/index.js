import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from './Container/Content'
import Header from "./Components/Header"
import { Slider, Slide, Col, Footer } from "react-materialize"
const Index = (props) => {
    // console.log(props.children)
    return (
        <div>
            <Head>
                <title>Web Template</title>
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="http://malaskoding.com/" />
                <meta property="og:title" content="We believe in a diverse range of talent and personality brings creative skills and ideas to the web." />
                <meta property="og:description" content="we designing anything you want, we open minds, we make your app design to the next level" />


                <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css" />
                <link href="http://fonts.googleapis.com/css?family=Anton|Righteous|Inconsolata" rel="stylesheet" />
                <link href="/static/style.css" rel="stylesheet" />
                <link rel="icon" type="image/x-icon" href="/static/favicon.png" />
            </Head>
            <Header />
            <Col m={12} s={12}>
                <Slider>
                    <Slide
                        src="#"
                        title="This is our big Tagline!">
                        Here's our small slogan.
                    </Slide>
                    <Slide
                        src="#"
                        title="Left aligned Caption"
                        placement="left">
                        Here's our small slogan.
                    </Slide>
                    <Slide
                        src="#"
                        title="Right aligned Caption"
                        placement="right">
                        Here's our small slogan.
                    </Slide>
                </Slider>
            </Col>
            {props.children}
            <Col m={12} s={12}>
                <Footer style={{ backgroundColor: '#757575' }} copyrights="&copy 2015 Copyright Text"
                    moreLinks={
                        <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                    }
                    links={
                        <ul>
                            <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                        </ul>
                    }
                    className='example'
                >
                    <h5 className="white-text">Footer Content</h5>
                    <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                </Footer>
            </Col>
            <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"></script>
        </div>
    )
}

export default Index