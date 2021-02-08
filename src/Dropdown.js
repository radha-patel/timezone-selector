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
      const choices = this.props.results ? this.props.results.map((item, i) => <p key={i}>{item}</p>) : <></>
    return (
        <>
            <form className="Dropdown-div">
                <div>
                    <input placeholder="Nearest City" onChange={this.props.enterInput} />
                    {/* {this.props.results.map((item, i) => <p key={i}>{item}</p>)} */}
                    {choices}
                </div>
                <input type="submit" />
            </form>
        </>
    )
  };
};

export default Dropdown