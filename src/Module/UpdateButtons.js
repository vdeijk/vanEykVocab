import React, { Component } from 'react';
import { connect } from 'react-redux';


class UpdateButtons extends Component {  
    
    render () {
    return (
        <div className="update_buttons-div">
            <input type ="button" className="btn-app update-buttons" name="submit" 
            id="submitButton" value ="Yes, I do" 
            onClick={this.props.answeredCorrectly} />
            <input type ="button" className="btn-app update-buttons" name="submit" 
            id="submitButton" value ="No, I don't" 
            onClick={this.props.handleSubmit} />
        </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: () => dispatch ({
        type: 'HANDLE_SUBMIT'}),

        answeredCorrectly: () => dispatch ({
        type: 'ANSWERED_CORRECTLY'}),
    }
  };
  
export default connect(null, mapDispatchToProps)(UpdateButtons);
  
