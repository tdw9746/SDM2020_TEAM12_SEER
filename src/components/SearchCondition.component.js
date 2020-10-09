import React, { Component } from "react";
import axios from "axios";
import _ from 'lodash';

// import faker from 'faker';

// import DropdownMultipleSelection from './DropdownMultipleSelection.component';

// // semantic
import {
  Dropdown,
  Grid,
  Button,
  Radio,
  Form,
  Input,
  Checkbox
} from 'semantic-ui-react'

const currentYear = (new Date()).getFullYear();
const years = Array.from(new Array(currentYear - 1900 + 1), (val, index) => currentYear - index);

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
    fromYear: 1950,
    toYear: currentYear,
    method: "",
    claims: [],
  };



  componentDidMount() {
    // const a = $('#selectAll');
    // console.log("#########################################");
    // console.log(a);
    
    // $(document).on('change', '#selectAll', function (e) {
    //   if ($(this).prop("checked") == true) {
    //     const options = $('#benefitDropdown > .menu > .item').toArray().map((obj) => obj.dataset.value);
    //     console.log(options);
    //     $('#benefitDropdown').dropdown('set exactly', options);
    //   } else if ($(this).prop("checked") == false) {
    //     $('#benefitDropdown').dropdown('clear');
    //   }
    // });

    // $('#selectAll').checkbox({
    //   onChecked() {
    //     console.log("JQuery call");
    //     const options = $('#benefitDropdown > .menu > .item').toArray().map((obj) => obj.dataset.value);
    //     $('#benefitDropdown').dropdown('set exactly', options);
    //   },
    //   onUnchecked() {
    //     $('#benefitDropdown').dropdown('clear');
    //   },
    // });

    // $('#benefitDropdown').dropdown({
    //   label: {
    //     duration: 0,
    //   },
    //   debug: true,
    //   performance: true,
    // });

    //     $('.ui.checkbox')
    //   .checkbox({
    //     onChecked() {
    //       console.log("JQuery call");
    //       const options = $('#benefitDropdown > option').toArray().map(
    //         (obj) => obj.value
    //       );
    //       $('#benefitDropdown').dropdown('set exactly', options);
    //     },
    //     onUnchecked() {
    //       $('#benefitDropdown').dropdown('clear');
    //     },
    //   });
  }

  clearInputfields = () => {
    this.setState({ title: "", author: "", yearSelection: "all", fromYear: 1950, toYear: currentYear, method: "", claims: [] });
  }

  searchSeerArticle = () => {
    const task = { title: this.state.title, author: this.state.author, yearSelection: this.state.yearSelection, fromYear: this.state.fromYear, toYear: this.state.toYear, method: this.state.method, claims: this.state.claims };
    console.log(task);
    // if(task.title && task.title.length > 0){
    axios
      .post("/search/filter", task)
      .then((res) => {
        if (res.data) {
          this.props.showSeerArticleList(res.data);
          // this.setState({ title: "", author: "", fromYear: year-10, toYear:currentYear, method: "", claims: [] });
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
      fromYear: value,
      yearSelection: "custom"
    });
  }
  handleToYear = (e, { value }) => {
    console.log(value);
    this.setState({
      toYear: value,
      yearSelection: "custom"
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
    switch (value) {
      case "all":
        this.setState(
          {
            fromYear: 1950,
            toYear: currentYear,
          }
        )
        break;
      case "thisYear":
        this.setState(
          {
            fromYear: currentYear,
            toYear: currentYear,
          }
        );
        break;
      case "fiveYears":
        this.setState(
          {
            fromYear: currentYear - 4,
            toYear: currentYear,
          }
        );
        break;
      case "tenYears":
        this.setState(
          {
            fromYear: currentYear - 9,
            toYear: currentYear,
          }
        );
        break;
      default:
        break;
    }
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

        <Grid stackable divided='vertically' verticalAlign="middle">
          <Grid.Row columns={4}>
            <Grid.Column width={6}>
              <Input placeholder='Title'
                // class="search_input"
                fluid
                type="text"
                onChange={this.handleTitleChange}
                onKeyDown={this.handleKeyDown}
                value={title}
              />
            </Grid.Column>
            <Grid.Column width={6}>
              <Input 
                // class="search_input"
                fluid
                type="text"
                onChange={this.handleAuthorChange}
                onKeyDown={this.handleKeyDown}
                value={author}
                placeholder="Author"
              />
            </Grid.Column>
            <Grid.Column floated='right' width={2}>
              <Button onClick={this.clearInputfields}>Clear</Button>
            </Grid.Column>
            <Grid.Column floated='right' width={2}>
              <Button onClick={this.searchSeerArticle}>Search</Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={8}>
            <Grid.Column textAlign="left">
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
            {/* <Grid.Column >
              <Radio
                label='Custom'
                name='radioGroup'
                value='custom'
                checked={this.state.yearSelection === 'custom'}
                onChange={this.handleRadio}
              />
            </Grid.Column> */}
            <Grid.Column width={3}>
              From : <Dropdown search scrolling className="small_dropdown" placeholder='From' selection options={yearOptions} value={fromYear} onChange={this.handleFromYear} onKeyDown={this.handleKeyDown} />
            </Grid.Column>
            <Grid.Column width={3}>
              To : <Dropdown search scrolling className="small_dropdown" placeholder='To' selection options={yearOptions} value={toYear} onChange={this.handleToYear} onKeyDown={this.handleKeyDown} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={3}>
            <Grid.Column width={4}>
              {/* <div class="search"> */}
              {/* <DropdownMultipleSelection/> */}
              <Dropdown fluid placeholder='Please select an SE practice' clearable search selection options={practiceOptions} value={method} onChange={this.handleMethodChange} />
            </Grid.Column>
            <Grid.Column width={8}>
              <Dropdown id="benefitDropdown" fluid placeholder='Claimed benefit' multiple search selection options={claimOptions} value={claims} onChange={this.handleClaimSelect} />
              {/* <Select multi options={options} values={claim} onChange={(value) => console.log(value)} placeholder="Claims"/> */}
              {/* <Select multi options={options} values={claim} onChange={(values) => this.handleClaimSelect(values)} placeholder="Claims"/> */}
            </Grid.Column>
            <Grid.Column floated="left" width={4}>
              <Checkbox id="selectAll" toggle label='Select all' />
            </Grid.Column>
          </Grid.Row>

        </Grid>
      </Form>
    );
  }
}

export default SearchCondition;
