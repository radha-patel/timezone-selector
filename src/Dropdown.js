import React, { Component } from "react";
import "./Dropdown.css";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timezone: null,
    };
  }

  closeDropdown = (e) => {
      e.preventDefault();
      console.log('here')
      document.getElementById("Dropdown").style.display = "none";
  }

  onChange = (e) => {
      document.getElementById("Dropdown").style.display = "block";
      this.props.enterInput(e);
  }

  render () {
      const choices = this.props.results ? this.props.results.map((item, i) => <p key={i} className="Dropdown-result" id={item} onClick={this.props.onSelection}>{item}</p>) : <></>
    return (
        <>
            <form className="Dropdown-div">
                <div>
                    <input placeholder="Nearest City" onChange={this.onChange} />
                    <div id="Dropdown" className="Dropdown-choices">{choices}</div>
                </div>
                <input type="submit" className="Dropdown-submit" onClick={this.closeDropdown} />
            </form>
        </>
    )
  };
};

export default Dropdown