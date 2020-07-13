import React, { Component } from 'react';

class Help extends Component {      
     
    render () {
    return (
        <div className="menu_pages-container">
            <div>
                <p>This app helps you understand words. It was made for English language learners.</p>

                <p>This app teaches you how to use the most common words in the English language. Research shows
                    that the 3.000 most common words in any language made up over 95% of all written communication.
                    For spoken communication, the percentage is even higher.In this app, we use this principle to achieve
                    maximum effectiveness.</p>

                <p>Right now, the app has only two modules available. However, others will be added in the near future. Eventually,
                    it will have around 23 modules to represent all letter of the alphabet. 
                </p>
                <p> Once you are inside a module, the app shows you its words randomly. It is up to you to remember the
                    correct definition of a word. If you do, you will score 25% on that word's "Word progress meter". If you do not, 
                    your progress on the word will be reset to zero. To clear a module completely, master all of its inidivual words to 100%. 
                     </p>
                    <p>This app has additional features to help you learn words better as well. Because the better you learn to use 
                        words in practice, the less you have to practice repitition. That is also the main principle upon which this app is based. 
                    </p>

            </div>
        </div>
    )
    }
}


export default Help;
  