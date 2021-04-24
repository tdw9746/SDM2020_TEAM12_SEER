import React, { Component } from "react";
import _ from 'lodash'

import "../style.css";

import { Header, Table, Rating } from 'semantic-ui-react'

import $ from "jquery";

class ListSeerArticle extends Component {

  componentDidMount(){
    $('table').tablesort();
    
  }

  render() {
    console.log(this.props.seerArticles);
    let seerArticles = this.props.seerArticles;
    return (
      <Table sortable striped compact>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell rowSpan='2' textAlign="center" className="cell-width" >Title</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2' textAlign="center" className="cell-width-small" >Author</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2' textAlign="center" className="cell-width-small">Year</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2' textAlign="center" className="cell-width-small" singleLine>SE Practice</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2' textAlign="center" className="cell-width">Claimed benefits</Table.HeaderCell>
            <Table.HeaderCell colSpan='3' textAlign="center" >Evidence</Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell textAlign="center">Type</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Strength</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Support</Table.HeaderCell>
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
                    <Table.Row className="row" key={seerArticle._id} >
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
                            <p>{claim.benefit}</p>
                          )
                        }
                        )}
                      </Table.Cell>
                      <Table.Cell>
                      {seerArticle.claims.map((claim) => {
                          return (
                            <p>{claim.type}</p>
                          )
                        }
                        )}
                      </Table.Cell>
                      <Table.Cell>
                      {seerArticle.claims.map((claim) => {
                          return (
                            <p>{claim.strength}</p>
                          )
                        }
                        )}
                      </Table.Cell>
                      <Table.Cell>
                      {seerArticle.claims.map((claim) => {
                          return (
                            <p>{claim.isSupport}</p>
                          )
                        }
                        )}
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