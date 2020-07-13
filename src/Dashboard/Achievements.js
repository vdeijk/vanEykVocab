import React, { Component } from 'react';
import LevelButton from './LevelButton';


class Achievements extends Component {     

  render () {
      return (
        <div className="Level">
          <div className="Level_two">
            <p className="p_level">Your achievements: </p> &nbsp;&nbsp;
            
          </div>
            <LevelButton />
        </div>
      );
    }
  }

  /*
<p className="p_level_two"> B2</p>
*/

export default Achievements;
