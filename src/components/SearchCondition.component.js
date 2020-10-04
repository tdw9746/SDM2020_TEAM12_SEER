import React, { Component } from "react";
import axios from "axios";
import _ from 'lodash'

// import faker from 'faker';

// import DropdownMultipleSelection from './DropdownMultipleSelection.component';

// // semantic
import {
  Dropdown,
  Grid,
  Button,
  Radio,
  Form
} from 'semantic-ui-react'

const year = (new Date()).getFullYear();
const years = Array.from(new Array(year - 1900 + 1), (val, index) => year - index);

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
    yearSelection: "all",
    fromYear: year - 10,
    toYear: year,
    method: "",
    claims: [],
  };

  searchSeerArticle = () => {
    const task = { title: this.state.title, author: this.state.author, yearSelection: this.state.yearSelection, fromYear: this.state.fromYear, toYear: this.state.toYear, method: this.state.method, claims: this.state.claims };
    console.log(task);
    // if(task.title && task.title.length > 0){
    axios
      .post("/search/filter", task)
      .then((res) => {
        if (res.data) {
          this.props.showSeerArticleList(res.data);
          // this.setState({ title: "", author: "", fromYear: year-10, toYear:year, method: "", claims: [] });
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

  handleMethodChange = (e, { value }) => {
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

  handleFromYear = (e, { value }) => {
    console.log(value);
    this.setState({
      fromYear: value
    });
  }
  handleToYear = (e, { value }) => {
    console.log(value);
    this.setState({
      toYear: value
    });
  }
  handleClaimSelect = (e, { value }) => {
    console.log(value);
    this.setState({
      claims: value
    });
  }

  handleRadio = (e, { value }) => {
    console.log(value);
    this.setState({
      yearSelection: value
    });
  }

  render() {
    let { title } = this.state;
    let { author } = this.state;
    let { fromYear } = this.state;
    let { toYear } = this.state;
    let { method } = this.state;
    let { claims } = this.state;
    return (
      <Form>

        <Grid columns={4}>
          <Grid.Row columns={6}>
            <Grid.Column>
              Publication Year
            </Grid.Column>
            <Grid.Column>
              <Radio
                label='All years'
                name='radioGroup'
                value='all'
                checked={this.state.yearSelection === 'all'}
                onChange={this.handleRadio}
              />
            </Grid.Column>
            <Grid.Column>
              <Radio
                label='This year'
                name='radioGroup'
                value='thisYear'
                checked={this.state.yearSelection === 'thisYear'}
                onChange={this.handleRadio}
              />
            </Grid.Column>
            <Grid.Column>
              <Radio
                label='Last 5 years'
                name='radioGroup'
                value='fiveYears'
                checked={this.state.yearSelection === 'fiveYears'}
                onChange={this.handleRadio}
              />
            </Grid.Column>
            <Grid.Column>
              <Radio
                label='Last 10 years'
                name='radioGroup'
                value='tenYears'
                checked={this.state.yearSelection === 'tenYears'}
                onChange={this.handleRadio}
              />
            </Grid.Column>
            <Grid.Column>
              <Button onClick={this.searchSeerArticle}>Search</Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={4}>
            <Grid.Column width={4} verticalAlign="middle">
              <Radio
                label='Custom range'
                name='radioGroup'
                value='customYears'
                checked={this.state.yearSelection === 'customYears'}
                onChange={this.handleRadio}
              />
            </Grid.Column>
            <Grid.Column  width={4}>
              From: <Dropdown placeholder='From' selection options={yearOptions} value={fromYear} onChange={this.handleFromYear} disabled={this.state.yearSelection == "customYears" ? false : true} />
            </Grid.Column>
            <Grid.Column width={4}>
              To: <Dropdown placeholder='To' selection options={yearOptions} value={toYear} onChange={this.handleToYear} disabled={this.state.yearSelection == "customYears" ? false : true} />
            </Grid.Column>
            <Grid.Column width={4}>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={4}>
              {/* <div class="search"> */}
              {/* <DropdownMultipleSelection/> */}
              <Dropdown placeholder='SE practice' clearable selection options={practiceOptions} value={method} onChange={this.handleMethodChange} />
            </Grid.Column>
            <Grid.Column width={8}>
              <Dropdown placeholder='Claims' fluid multiple search selection options={claimOptions} value={claims} onChange={this.handleClaimSelect} />
              {/* <Select multi options={options} values={claim} onChange={(value) => console.log(value)} placeholder="Claims"/> */}
              {/* <Select multi options={options} values={claim} onChange={(values) => this.handleClaimSelect(values)} placeholder="Claims"/> */}
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
      </Form>
    );
  }
}

export default SearchCondition;
