import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import { connect } from 'react-redux';


class MasteredButton extends Component {  
render() {  
    return (
    <Link to="/">
        <input type ="button" className="btn-app"  name="submit" id="submitButton"  value ={this.props.buttonValue}  />
    </Link>
        );
    }
}
  
const mapStateToProps = (state) => {
    return {
        buttonValue: state.buttonValue
    };
  };
  
export default connect(mapStateToProps, null)(MasteredButton);
  
