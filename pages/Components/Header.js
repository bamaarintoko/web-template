import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Link from 'next/link'
import { Navbar, NavItem, Icon } from "react-materialize";
// import stylesheet from '../styles/b.css'
function mapStateToProps(state) {
    return {

    };
}
const linkStyle = {
    marginRight: 15
}
const a = "/pages/home"
class Header extends Component {
    render() {
        return (
            <div>
                <Navbar fixed={true} style={{ backgroundColor: '#212121' }} right>

                    <NavItem>
                        <Link as="/" href='/pages/home'>
                            <span className="menu_text" style={{ float: "left" }}>Beranda</span>
                        </Link>
                    </NavItem>
                    {/* <NavItem href='#' style={{position:'absolute',left:0}}>
    <img width={64} src={logo}/>
</NavItem> */}
                    <NavItem>
                        <Link as="/tentang" href='/pages/tentang'>
                            <span className="menu_text" style={{ float: "left" }}>Tentang</span>
                        </Link>
                    </NavItem>
                    <NavItem href='#'><span className="menu_text" style={{ float: "left" }}>Program Keahlian</span></NavItem>
                    <NavItem href='/Pages/Home/page-home'><span className="menu_text" style={{ float: "left" }}>Berita</span></NavItem>
                    <NavItem href={a}><span className="menu_text" style={{ float: "left" }}>Kegiatan</span></NavItem>
                </Navbar>
                {/* <Link href="/">
                    <a style={linkStyle}>Home</a>
                </Link>
                <Link href="/Pages/Home/page-home">
                    <a style={linkStyle}>About</a>
                </Link> */}
            </div>
        );
    }
}
export default Header;
// export default connect(
//     mapStateToProps,
// )(Header);