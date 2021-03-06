import React, { Component } from 'react';
import { connect } from 'react-redux';
import Index from "./index.js"
import { Slide, Row, Card, Slider, Col, Footer } from "react-materialize"
// function mapStateToProps(state) {
//     return {

//     };
// }

export default () => (
    <Index>
        
        <Col className="story_top" m={12} s={12}>

            <Row className="child_">
                <Col m={8} s={12} style={{ borderBottomWidth: 1, borderBottomColor: 'black' }}>
                    <div style={{ borderBottom: '1px solid #FF9800' }}>
                        <h4>Pengumuman</h4>
                    </div>
                    <div style={{ paddingBottom: 20 }}>
                        <h5>Ut in consequat nunc, sit amet finibus ex. In hac.</h5>
                        <p>Morbi et tellus consequat, tristique lorem a, accumsan quam. Praesent ac ante tellus.
                            Phasellus vel condimentum urna. Vivamus ut nibh dui. Phasellus massa eros, mollis
                            sit amet quam lacinia, sodales vulputate turpis. Aenean elementum magna et augue
                            porta, quis imperdiet ligula finibus. Vestibulum velit arcu, molestie a ligula at,
                            fermentum volutpat mi. Integer hendrerit semper lacus, id egestas nulla hendrerit
                                    eget.</p>
                    </div>
                    <div>
                        <h5>Integer nec ex quis libero consequat porta eget id justo.</h5>
                        <p>Mauris porta nibh est, vel molestie enim porttitor eu. Nulla elementum, elit sed
                            porttitor sodales, risus urna viverra odio, ultricies dignissim mi nisl non ipsum.
                            Donec eget rutrum turpis. Nunc ornare nisl neque, quis dignissim arcu porttitor
                            vitae. Vivamus faucibus et orci quis rutrum. Nulla facilisi. Aenean non lacus
                                    sapien.</p>
                    </div>
                </Col>
                <Col m={4} s={12} style={{ borderBottomWidth: 1, borderBottomColor: 'black' }}>
                    <div style={{ borderBottom: '1px solid #FF9800' }}>
                        <h4>Agenda</h4>
                    </div>
                    <Card className='blue-grey darken-1' textClassName='white-text' title='Card title'
                        actions={[<a href='#'>This is a link</a>]}>
                        I am a very simple card.
                            </Card>
                </Col>
            </Row>
            <Row className="child_">
                <Col m={12} s={12}>
                    <div style={{ borderBottom: '1px solid #FF9800' }}>
                        <h4>Berita Utama</h4>
                    </div>
                </Col>
                <Col m={4} s={12} style={{ borderBottomWidth: 1, borderBottomColor: 'black' }}>
                    <Card className='blue-grey darken-1' textClassName='white-text' title='Card title'
                        actions={[<a href='#'>This is a link</a>]}>
                        I am a very simple card.
                            </Card>
                </Col>
                <Col m={4} s={12} style={{ borderBottomWidth: 1, borderBottomColor: 'black' }}>
                    <Card className='blue-grey darken-1' textClassName='white-text' title='Card title'
                        actions={[<a href='#'>This is a link</a>]}>
                        I am a very simple card.
                            </Card>
                </Col>
                <Col m={4} s={12} style={{ borderBottomWidth: 1, borderBottomColor: 'black' }}>
                    <Card className='blue-grey darken-1' textClassName='white-text' title='Card title'
                        actions={[<a href='#'>This is a link</a>]}>
                        I am a very simple card.
                            </Card>
                </Col>
            </Row>
            <Row className="child_">
                <Col m={12} s={12}>
                    <div style={{ borderBottom: '1px solid #FF9800' }}>
                        <h4>Kegiatan</h4>
                    </div>
                </Col>
                <Col m={4} s={12} style={{ borderBottomWidth: 1, borderBottomColor: 'black' }}>
                    <Card className='blue-grey darken-1' textClassName='white-text' title='Card title'
                        actions={[<a href='#'>This is a link</a>]}>
                        I am a very simple card.
                            </Card>
                </Col>
                <Col m={4} s={12}>
                    <Card className='blue-grey darken-1' textClassName='white-text' title='Card title'
                        actions={[<a href='#'>This is a link</a>]}>
                        I am a very simple card.
                            </Card>
                </Col>
                <Col m={4} s={12} style={{ borderBottomWidth: 1, borderBottomColor: 'black' }}>
                    <Card className='blue-grey darken-1' textClassName='white-text' title='Card title'
                        actions={[<a href='#'>This is a link</a>]}>
                        I am a very simple card.
                            </Card>
                </Col>
            </Row>
        </Col>
        
    </Index>
)

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