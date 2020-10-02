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
const years = Array.from(new Array(70), (val, index) => year - index);

const yearOptions = _.map(years, (year, index) => ({
  key: year,
  text: year,
  value: year,
}));

const claimOptions = [
  { key: 'performance', text: 'Improve Performance', value: 'Improve Performance' },
  { key: 'security', text: 'Improve Security', value: 'Improve Security' },
  { key: 'codeQuality', text: 'Improve Code Quality', value: 'Improve Code Quality' },
  { key: 'productQuality', text: 'Improve Product Quality', value: 'Improve Product Quality' },
];

const practiceOptions = [
  { key: 'TDD', text: 'TDD', value: 'TDD' },
  { key: 'DDD', text: 'DDD', value: 'DDD' },
  { key: 'UDD', text: 'UDD', value: 'UDD' },
]

// const DropdownMultipleSelection = () => (
//   <Dropdown placeholder='Claims' fluid multiple selection options={options} />
// )

class SearchCondition extends Component {
  state = {
    title: "",
    author: "",
    fromYear: year,
    toYear: year,
    method: "TDD",
    claim: [],
  };

  searchSeerArticle = () => {
    const task = { title: this.state.title, author: this.state.author, fromYear: this.state.fromYear, toYear: this.state.toYear, method: this.state.method, claim: this.state.claim };
    console.log(task);
    // if(task.title && task.title.length > 0){
    axios
      .post("/search/filter", task)
      .then((res) => {
        if (res.data) {
          this.props.showSeerArticleList(res.data);
          this.setState({ title: "", author: "", fromYear: year, toYear:year, method: "TDD", claim: [] });
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
  handleMethodChange = (e, {value}) => {
    console.log(value);
    this.setState({
      method: value,
    });
  };
  
  handleKeyDown = (e) => {
    if (e.key === "Enter") {
      this.searchSeerArticle();
    }
  };
  
  handleFromYear = (e) => {
    this.setState({
      fromYear: e.target.value
    });
  }
  handleToYear = (e) => {
    this.setState({
      toYear: e.target.value
    });
    
  }
  handleClaimSelect = (e, {value}) => {
    console.log(value);
    this.setState({
      claim: value
    });
  }

  render() {
    let { title } = this.state;
    let { author } = this.state;
    let { fromYear } = this.state;
    let { toYear } = this.state;
    let { method } = this.state;
    let { claim } = this.state;
    return (
      <Grid columns={3} divided>
        <Grid.Row>
          <Grid.Column>
            From: <Dropdown placeholder='From' selection options={yearOptions} value={fromYear} onChange={this.handleFromYear}/>
          </Grid.Column>
          <Grid.Column>
            To: <Dropdown placeholder='To' selection options={yearOptions} value={toYear} onChange={this.handleToYear}/>
          </Grid.Column>
          <Grid.Column>
            <Button onClick={this.searchSeerArticle}>Search</Button>

          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            {/* <div class="search"> */}

            {/* <DropdownMultipleSelection/> */}
            <Dropdown placeholder='SE practice' selection options={practiceOptions} value={method} onChange={this.handleMethodChange} />
          </Grid.Column>
          <Grid.Column>
            <Dropdown placeholder='Claims' fluid multiple selection options={claimOptions} value={claim} onChange={this.handleClaimSelect} />
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
