import React, { Component } from "react";
import axios from "axios";

class Input extends Component {
  state = {
    title: "",
  };

  searchSeerArticle = () => {
    const task = { title: this.state.title, author: this.state.author };

    // if(task.title && task.title.length > 0){
    axios
      .post("/search/filter", task)
      .then((res) => {
        if (res.data) {
          this.props.showSeerArticleList(res.data);
          this.setState({ title: "", author: "" });
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
  handleAuthorChange = (e) => {
    this.setState({
      author: e.target.value,
    });
  };

  handleKeyDown = (e) => {
    if (e.key === "Enter") {
      this.searchSeerArticle();
    }
  };

  render() {
    let { title } = this.state;
    let { author } = this.state;
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
          onChange={this.handleAuthorChange}
          onKeyDown={this.handleKeyDown}
          value={author}
          placeholder="Author"
        />
        <button onClick={this.searchSeerArticle}>Search</button>
      </div>
    );
  }
}

export default Input;
