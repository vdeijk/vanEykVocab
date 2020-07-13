import React from "react";
import { wordData } from "../../Server/ServerFunctions";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";


export function PageZero() {
  return (
    <div className="main_window-app">
      <Link className="navItem" to="/">
        <IoIosCloseCircleOutline className="app_icon" />
      </Link>
      <h1 className="h1_app">{wordData.wordName}</h1>
      <p className="p_app">What does {wordData.wordName} mean?</p>
    </div>
  );
}

export function PageOne() {
  return (
    <div className="main_window-app">
      <Link className="navItem" to="/">
        <IoIosCloseCircleOutline className="app_icon" />
      </Link>
      <h1 className="h1_app">{wordData.wordName} means:</h1>
      <p className="p_app">{wordData.wordDefinition}</p>
    </div>
  );
}

export function PageTwo() {
  return (
    <div className="main_window-app">
      <Link className="navItem" to="/">
        <IoIosCloseCircleOutline className="app_icon" />
      </Link>
      <h1 className="h1_app">{wordData.wordName}</h1>
      <p className="p_app">Do you fully understand this word? </p>
    </div>
  );
}

export function PageThree() {
  return (
    <div className="main_window-app">
      <Link className="navItem" to="/">
        <IoIosCloseCircleOutline className="app_icon" />
      </Link>
      <h1 className="h1_app">{wordData.wordName}</h1>
      <p className="p_app">No problem! Let's continue with this word.</p>
    </div>
  );
}

export function PageFour() {
  return (
    <div className="main_window-app">
      <Link className="navItem" to="/">
        <IoIosCloseCircleOutline className="app_icon" />
      </Link>
      <h1 className="h1_app">{wordData.wordName}</h1>
      <p className="p_app">
        In your own words, what does {wordData.wordName} mean?{" "}
      </p>
    </div>
  );
}

export function PageFive() {
  return (
    <div className="main_window-app">
      <Link className="navItem" to="/">
        <IoIosCloseCircleOutline className="app_icon" />
      </Link>
      <h1 className="h1_app">{wordData.wordName}</h1>
      <p className="p_app">
        The feature "practice your pronunciation" will become available soon.
        For now, to practice, check out:
      </p>
      <a
        className="a_app"
        href="https://www.oxfordlearnersdictionaries.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Oxford Learn's Dictionaries
      </a>
    </div>
  );
}

export function PageSix() {
  return (
    <div className="main_window-app">
      <Link className="navItem" to="/">
        <IoIosCloseCircleOutline className="app_icon" />
      </Link>
      <h1 className="h1_app">{wordData.wordName}</h1>
      <p className="p_app">
        Can you make some example sentences with this word?{" "}
      </p>
    </div>
  );
}

export function PageSeven() {
  return (
    <div className="main_window-app">
      <Link className="navItem" to="/">
        <IoIosCloseCircleOutline className="app_icon" />
      </Link>
      <h1 className="h1_app">{wordData.wordName}</h1>
      <p className="p_app">
        This word has other important meanings too. See
      </p>{" "}
      <a
        className="a_app"
        href="https://www.oxfordlearnersdictionaries.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Oxford Learn's Dictionaries
      </a>
    </div>
  );
}

export function PageEight() {
  return (
    <div className="main_window-app">
      <Link className="navItem" to="/">
        <IoIosCloseCircleOutline className="app_icon" />
      </Link>
      <h1 className="h1_app">{wordData.wordName}</h1>
      <p className="p_app">Very good! Let's move on to the next word.</p>
    </div>
  );
}

export function PageNine() {
  return (
    <div className="main_window-app">
      <Link className="navItem" to="/">
        <IoIosCloseCircleOutline className="app_icon" />
      </Link>
      <h1 className="h1_app">{wordData.wordName}</h1>
      <p className="p_app">You have mastered this list!</p>
    </div>
  );
}
