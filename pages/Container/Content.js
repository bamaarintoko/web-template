import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from "../Components/Header"
// function mapStateToProps(state) {
//     return {

//     };
// }


const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
  }
  
  const Layout = (props) => (
    <div style={layoutStyle}>
      <Header />
      {props.children}
    </div>
  )
  
  export default Layout
// class Content extends Component {
//     render() {
//         console.log(this.props.children)
//         return (
//             <div>
//                 <Header/>
//                 ASu
//             </div>
//         );
//     }
// }

// export default Content;