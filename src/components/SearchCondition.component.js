import React, { Component } from 'react';
import axios from 'axios';

class Input extends Component {

  state = {
    title: ""
  }

  searchSeerArticle = () => {
    const task = {title: this.state.title}

    // if(task.title && task.title.length > 0){
      axios.post('/search/byTitle', task)
        .then(res => {
          if(res.data){
            this.props.showSeerArticleList(res.data);
            this.setState({title: ""})
          }
        })
        .catch(err => console.log(err))
    // }else {
    //   console.log('input field required')
    // }
  }

  handleChange = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.searchSeerArticle();
    }
  }

  render() {
    let { title } = this.state;
    return (
      <div>
        <input type="text" onChange={this.handleChange} onKeyDown={this.handleKeyDown} value={title} />
        <button onClick={this.searchSeerArticle}>Search</button>
      </div>
    )
  }
}

export default Input