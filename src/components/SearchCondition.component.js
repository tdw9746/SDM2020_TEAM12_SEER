import React, { Component } from "react";
import axios from "axios";
import _ from 'lodash'

// import faker from 'faker';

// import DropdownMultipleSelection from './DropdownMultipleSelection.component';

// // semantic
import {
  Dropdown,
  Grid,
  Button
} from 'semantic-ui-react'

const year = (new Date()).getFullYear();
const years = Array.from(new Array(40),( val, index) => year - index);

// this.years.map((year, index) => {
//   return <option key={`year${index}`} value={year}>{year}</option>
// })

const yearOptions = _.map(years, (year, index) => ({
  key: year,
  text: year,
  value: year,
}));

const options = [
  { key: 'performance', text: 'Improve Performance', value: 'performance' },
  { key: 'security', text: 'Improve security', value: 'Security' },
  { key: 'codeQuality', text: 'Improve Code Quality', value: 'codeQuality' },
  { key: 'productQuality', text: 'Improve Product Quality', value: 'productQuality' },
];

const practiceOptions = [
  { key: 'tdd', text: 'TDD', value: 'tdd' },
  { key: 'ddd', text: 'DDD', value: 'ddd' },
  { key: 'udd', text: 'UDD', value: 'udd' },
]

// const DropdownMultipleSelection = () => (
//   <Dropdown placeholder='Claims' fluid multiple selection options={options} />
// )

class SearchCondition extends Component {
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
          this.setState({ title: "", author: "", method: "", claim: [] });
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

  handleClaimSelect = (values) => {
    this.setState({
      claim: values
    });
  }

  render() {
    let { title } = this.state;
    let { author } = this.state;
    let { method } = this.state;
    let { claim } = this.state;
    return (
      <Grid columns={3} divided>
        <Grid.Row>
          <Grid.Column>
            From: <Dropdown placeholder='From' selection options={yearOptions} />
          </Grid.Column>
          <Grid.Column>
            To: <Dropdown placeholder='To' selection options={yearOptions} />
          </Grid.Column>
          <Grid.Column>
            <Button onClick={this.searchSeerArticle}>Search</Button>

          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            {/* <div class="search"> */}

            {/* <DropdownMultipleSelection/> */}
            <Dropdown placeholder='SE practice' selection options={practiceOptions} />
          </Grid.Column>
          <Grid.Column>
            <Dropdown placeholder='Claims' fluid multiple selection options={options} />
            {/* <Select multi options={options} values={claim} onChange={(value) => console.log(value)} placeholder="Claims"/> */}
            {/* <Select multi options={options} values={claim} onChange={(values) => this.handleClaimSelect(values)} placeholder="Claims"/> */}
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>


            {/* <input
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
            <input
              class="search_input"
              type="text"
              onChange={this.handleMethodChange}
              onKeyDown={this.handleKeyDown}
              value={method}
              placeholder="SE methods"
            /> */}

            {/* </div> */}
          </Grid.Column>

        </Grid.Row>
      </Grid>
    );
  }
}

export default SearchCondition;
