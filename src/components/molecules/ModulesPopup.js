import React from "react";

const ModulesPopup = () => {
  return (
    <div className="modules__popup">
      <h3 className="popup__h3">Help</h3>
      <p className="popup__p">
        Each module has a specific number of total words that will be generated
        for you randomly. Your first goal is to guess what the correct
        definition of the word is. Writing down this definition is not obliged
        but can be helpful to organize your thoughts.
        <br></br>
        <br></br>
        When you tell the app you understand a word, you will gain a "progress
        percentage" of 25. When this percentage reaches 100, you will have
        mastered the word, and it will disappear from the module forever.
        <br></br>
        <br></br>
        To really understand a word, we must also know how to actually use it in
        practice. That's why we encourage you to make example sentences. This is
        not required to progress but can still be tremendously helpful. What
        matters is that you become comfortable with actually using newly learned
        words.
        <br></br>
        <br></br>
        Please note that most words in English have more than one definition. In
        this app, we always present you one specific definition and one
        definition only.
      </p>
    </div>
  );
};

export default ModulesPopup;
