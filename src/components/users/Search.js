import React, { Component } from "react";

export default class Search extends Component {
  state = {
    text: "",
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.value);
  };

  render() {
    return (
      <div>
        <form className="form">
          <input
            type="text"
            name="text"
            value={this.state.text}
            placeholder="Search users..."
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="search"
            className="btn btn-dark btn-block"
          />
        </form>
      </div>
    );
  }
}
