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

    methodError: false,
    claimError: false,
    fromYearError: false,
    toYearError: false
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
    if (this.state.method == '') {
      
    } else {
      
    }

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
        <Form.Group >
          <Form.Dropdown error={this.state.practiceError} required width={3} label='SE practice' fluid placeholder='Please select SE practice' clearable search selection options={practiceOptions} value={method} onChange={this.handleMethodChange} />
          <Form.Dropdown required width={4} label='Claimed Benefit' id="benefitDropdown" fluid placeholder='Please enter claimed benefit' multiple search selection options={claimOptions} value={claims} onChange={this.handleClaimSelect} />
          <Form.Input width={3} label='Title' placeholder='Please enter title'
            // class="search_input"
            fluid
            type="text"
            onChange={this.handleTitleChange}
            onKeyDown={this.handleKeyDown}
            value={title}
          />
          <Form.Input width={2} label='Author'
            // class="search_input"
            fluid
            type="text"
            onChange={this.handleAuthorChange}
            onKeyDown={this.handleKeyDown}
            value={author}
            placeholder="Please enter author"
          />
          <Form.Button verticalAlign="" width={1} onClick={this.clearInputfields}>Clear</Form.Button>
          <Form.Button disabled={!this.state.method || this.state.claims.length==0 || !this.state.fromYear || !this.state.toYear} width={2} onClick={this.searchSeerArticle}>Search</Form.Button>
        </Form.Group>
        <Form.Group inline>
          <label>Publication Year</label>
          <Form.Radio
            label='All years'
            name='radioGroup'
            value='all'
            checked={this.state.yearSelection === 'all'}
            onChange={this.handleRadio}
          />
          <Form.Radio
            label='This year'
            name='radioGroup'
            value='thisYear'
            checked={this.state.yearSelection === 'thisYear'}
            onChange={this.handleRadio}
          />
          <Form.Radio
            label='Last 5 years'
            name='radioGroup'
            value='fiveYears'
            checked={this.state.yearSelection === 'fiveYears'}
            onChange={this.handleRadio}
          />
          <Form.Radio
            label='Last 10 years'
            name='radioGroup'
            value='tenYears'
            checked={this.state.yearSelection === 'tenYears'}
            onChange={this.handleRadio}
          />
          <Form.Dropdown required label="From" search scrolling className="small_dropdown" placeholder='From' selection options={yearOptions} value={fromYear} onChange={this.handleFromYear} onKeyDown={this.handleKeyDown} />
          <Form.Dropdown required label="To" search scrolling className="small_dropdown" placeholder='To' selection options={yearOptions} value={toYear} onChange={this.handleToYear} onKeyDown={this.handleKeyDown} />
        </Form.Group>
      </Form>
    );
  }
}

export default SearchCondition;
