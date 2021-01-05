import React from "react";

import "./search-box.styles.css";

//This is a functional component, which, unlike a class component,
// does not have state, lifecycle methods and a constructor.

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={
      // this.setState({ searchField: e.target.value }); //searchField is updated 1 letter behind the input value,
      // bc setState is an asynchronous function
      // console.log(this.state);
      // Instead, this is what we should do - pass in a second param
      // that is a callback so that setState will invoke this function once it already done set state
      // this.setState({ searchField: e.target.value });
      handleChange
    }
  />
);
