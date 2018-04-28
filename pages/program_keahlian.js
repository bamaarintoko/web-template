import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Layout from "../Container/Content"
import Index from "./index.js"
import { Col, Row } from "react-materialize"
// function mapStateToProps(state) {
//     return {

//     };
// }

export default () => (
    <Index>
        <Col className="story_top" m={12} s={12}>

            <Row className="child_">
                <Col m={4} s={12} style={{marginTop:20}}>
                    <div className="_card" style={linkStyle} >

                    </div>
                </Col>
                <Col m={4} s={12} style={{marginTop:20}}>
                    <div className="_card" style={linkStyle} >

                    </div>
                </Col>
                <Col m={4} s={12} style={{marginTop:20}}>
                    <div className="_card" style={linkStyle} >

                    </div>
                </Col>
                <Col m={4} s={12} style={{marginTop:20}}>
                    <div className="_card" style={linkStyle} >

                    </div>
                </Col>
                <Col m={4} s={12} style={{marginTop:20}}>
                    <div className="_card" style={linkStyle} >

                    </div>
                </Col>
                <Col m={4} s={12} style={{marginTop:20}}>
                    <div className="_card" style={linkStyle} >

                    </div>
                </Col>
                <Col m={4} s={12} style={{marginTop:20, marginBottom:20}}>
                    <div className="_card" style={linkStyle} >

                    </div>
                </Col>
                <Col m={4} s={12} style={{marginTop:20}}>
                    <div className="_card" style={linkStyle} >

                    </div>
                </Col>
                <Col m={4} s={12} style={{marginTop:20}}>
                    <div className="_card" style={linkStyle} >

                    </div>
                </Col>
            </Row>
        </Col>
    </Index>
)
const linkStyle = {
    height: 200, borderWidth: 1, borderColor: '#BDBDBD', borderRadius: 10,
  }
// class PageHome extends Component {
//     render() {
//         return (
//             <Index>
//                 <p>Hello Next.js</p>
//             </Index>
//         );
//     }
// }
// export default PageHome;
// export default connect(
//     mapStateToProps,
// )(PageHome);