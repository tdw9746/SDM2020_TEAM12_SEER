import React, { Component } from "react";
import axios from "axios";

class Input extends Component {
  state = {
    title: "",
  };

  searchSeerArticle = () => {
    const task = { title: this.state.title, SEmethods: this.state.SEmethods };

    // if(task.title && task.title.length > 0){
    axios
      .post("/search/filter", task)
      .then((res) => {
        if (res.data) {
          this.props.showSeerArticleList(res.data);
          this.setState({ title: "", SEmethods: "" });
        }
      })
      .catch((err) => console.log(err));
    // }else {
    //   console.log('input field required')
    // }
  };

  handleTitleChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };
  handleSEmethodsChange = (e) => {
    this.setState({
      SEmethods: e.target.value,
    });
  };

  handleKeyDown = (e) => {
    if (e.key === "Enter") {
      this.searchSeerArticle();
    }
  };

  render() {
    let { title } = this.state;
    let { SEmethods } = this.state;
    return (
      <div class="search">
        <input
          class="search_input"
          type="text"
          onChange={this.handleTitleChange}
          onKeyDown={this.handleKeyDown}
          value={title}
          placeholder="Title"
        />
        <input
          class="search_input"
          type="text"
          onChange={this.handleSEmethodsChange}
          onKeyDown={this.handleKeyDown}
          value={SEmethods}
          placeholder="SE methods"
        />
        <button onClick={this.searchSeerArticle}>Search</button>
      </div>
    );
  }
}

export default Input;
