import React, {Component} from 'react';
import axios from 'axios';

import SearchCondition from './SearchCondition.component';
import ListSeerArticle from './ListSeerArticle.component';

class Search extends Component {

  state = {
    seerArticles: []
  }

  componentDidMount(){
    this.getSeerArticles();
  }

  showSeerArticleList = (data) => {
    this.setState({
      seerArticles: data
    })
  }

  getSeerArticles = () => {
    axios.get('/search')
      .then(res => {
        if(res.data){
          this.setState({
            seerArticles: res.data
          })
        }
      })
      .catch(err => console.log(err))
  }

  // deleteSeerArticle = (id) => {

  //   axios.delete('/search/${id}')
  //     .then(res => {
  //       if(res.data){
  //         this.getSeerArticles()
  //       }
  //     })
  //     .catch(err => console.log(err))
  // }

  render() {
    let { seerArticles } = this.state;

    return(
      <div>
        <h1>Search articles</h1>
        <SearchCondition showSeerArticleList={this.showSeerArticleList}/>
        <ListSeerArticle seerArticles={seerArticles}/>
      </div>
    )
  }
}

export default Search;