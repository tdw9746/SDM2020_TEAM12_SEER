import React, { Component } from "react";
import _ from 'lodash'

import "../style.css";

import { Header, Table, Rating } from 'semantic-ui-react'
import { render } from '@testing-library/react';

import $ from "jquery";

class ListSeerArticle extends Component {
  // constructor(props) {
  //   super(props);
  //   console.log(this.props.seerArticles);
  //   this.state = { seerArticles: [] };
  // }
  // const ListSeerArticle  = ({ seerArticles }) => {
  // const tableData = [
  //   { _id: '1', title: "111", author: "jjj", fromYear: 2010, toYear:2020, method: "uuu", claims: ["a", "b"]  },
  //   { _id: '2', title: "222", author: "jjj", fromYear: 2010, toYear:2020, method: "uuu", claims: ["a", "b"]  },
  // ]

  // console.log(seerArticles);
  // console.log(data);

  
  // state = {
  //   records: []
  // }

  componentDidMount(){
    $('table').tablesort();
    
  }

  render() {
    console.log(this.props.seerArticles);
    let seerArticles = this.props.seerArticles;
    return (
      <Table sortable striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className="cell-width" >Title</Table.HeaderCell>
            <Table.HeaderCell className="cell-width-small" >Author</Table.HeaderCell>
            <Table.HeaderCell className="cell-width-small sorted descending">Year</Table.HeaderCell>
            <Table.HeaderCell className="cell-width-small" singleLine>SE Practice</Table.HeaderCell>
            <Table.HeaderCell >Claimed benefits</Table.HeaderCell>
            <Table.HeaderCell >Evidences</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            !seerArticles || seerArticles.length <= 0 ?
              (
                <Table.Row>
                  <Table.Cell colSpan='6'>
                    No SeerArticle(s) found
              </Table.Cell>
                </Table.Row>
              )
              :
              (
                seerArticles.map(seerArticle => {
                  // data.map(({_id, title, author, year, method, claims, evidence}) => {
                  // data.map(seerArticle => {
                  return (
                    <Table.Row key={seerArticle._id} >
                      <Table.Cell>
                        {seerArticle.title}
                      </Table.Cell>
                      <Table.Cell>
                        {seerArticle.author}
                      </Table.Cell>
                      <Table.Cell>
                        {seerArticle.year}
                      </Table.Cell>
                      <Table.Cell>
                        {seerArticle.method}
                      </Table.Cell>
                      <Table.Cell>
                        {seerArticle.claims.map((claim) => {
                          return (
                            <p>{claim}</p>
                          )
                        }
                        )}
                      </Table.Cell>
                      <Table.Cell>
                        {seerArticle.evidence}
                      </Table.Cell>
                    </Table.Row>
                  )
                })
              )
          }
        </Table.Body>
      </Table>
    );
  }
}

export default ListSeerArticle