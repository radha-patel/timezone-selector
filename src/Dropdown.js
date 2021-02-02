import React, { Component } from "react";
import "./Dropdown.css";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timezone: null,
    };
  }

  render () {
    return (
        <>
            <form className="Dropdown-div">
                <div>
                    <input placeholder="Nearest City" onChange={this.props.enterInput} />
                </div>
                <input type="submit" />
            </form>
        </>
    )
  };
};

export default Dropdown