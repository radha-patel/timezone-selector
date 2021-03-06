import React, { Component } from "react";
import "./Dropdown.css";

class Dropdown extends Component {
    constructor(props) {
    super(props);
    this.state = {
        input: "",
    };
    }

    closeDropdown = (e) => {
        e.preventDefault();
        document.getElementById("Dropdown").style.display = "none";
    }

    onChange = (e) => {
        this.setState({ 
            input: e.target.value 
        });
        document.getElementById("Dropdown").style.display = "block";
        this.props.enterInput(e);
    }

    chooseCity = (e) => {
        this.props.onSelection(e);
        this.setState({ 
            input: e.target.id 
        });
        this.closeDropdown(e);
    }

    initializeLoc = () => {
        if (this.props.pinLoc && this.props.pinLoc !== this.state.input) {
            this.setState({ 
                input: this.props.pinLoc 
            });
        }
    }

    reset = () => {
        this.setState({ 
            input: "" 
        });
        this.props.reset();
    }

    render () {
        if (this.props.status) {
            this.initializeLoc();
            this.props.changeState();
        }
        const choices = this.props.results ? this.props.results.map((item, i) => <p key={i} className="Dropdown-result" id={item} onClick={this.chooseCity}>{item}</p>) : <div></div>
    return (
        <div>
            <form className="Dropdown-div">
                <div>
                    <input placeholder="Nearest City" onChange={this.onChange} value={this.state.input} />
                    <div id="Dropdown" className="Dropdown-choices">{choices}</div>
                </div>
                <input type="reset" className="Dropdown-reset" onClick={this.reset} />
            </form>
        </div>
    )
    };
    };

export default Dropdown