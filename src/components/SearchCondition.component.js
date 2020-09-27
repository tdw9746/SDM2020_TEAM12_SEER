import React, { Component } from "react";
import axios from "axios";
import Select from "react-dropdown-select";

const options = [
  { label: 'Performance', value: 'performance' },
  { label: 'Security', value: 'Security' },
]

class Input extends Component {
  state = {
    title: "",
    author: "",
    method: "",
    claim: [],
  };

  searchSeerArticle = () => {
    const task = { title: this.state.title, author: this.state.author, method: this.state.method, claim: this.state.claim };

    // if(task.title && task.title.length > 0){
    axios
      .post("/search/filter", task)
      .then((res) => {
        if (res.data) {
          this.props.showSeerArticleList(res.data);
          this.setState({ title: "", author:"", method: "", claim: [] });
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
  handleMethodChange = (e) => {
    this.setState({
      method: e.target.value,
    });
  };

  handleKeyDown = (e) => {
    if (e.key === "Enter") {
      this.searchSeerArticle();
    }
  };

  handleClaimSelect = (e)=> {
    this.setState({
      claim: e.target.value,
    });
  }

  render() {
    let { title } = this.state;
    let { author } = this.state;
    // let { method } = this.state;
    let { claim } = this.state;
    return (
      <div class="search">
        <Select multi options={options} values={claim} onChange={(value) => console.log(value)} placeholder="Claims"/>
        {/* <Select multi options={options} values={claim} onChange={this.handleClaimSelect} placeholder="Claims"/> */}
        <br/>
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
        {/* <input
          class="search_input"
          type="text"
          onChange={this.handleMethodChange}
          onKeyDown={this.handleKeyDown}
          value={method}
          placeholder="SE methods"
        /> */}
        <button onClick={this.searchSeerArticle}>Search</button>
      </div>
    );
  }
}

export default Input;
