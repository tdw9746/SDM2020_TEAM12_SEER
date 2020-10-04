import React from 'react';
import _ from 'lodash'

import "../style.css";

import { Header, Table, Rating } from 'semantic-ui-react'
import { render } from '@testing-library/react';



function exampleReducer(state, action) {
  switch (action.type) {
    case 'CHANGE_SORT':
      if (state.column === action.column) {
        return {
          ...state,
          data: state.data.reverse(),
          direction:
          state.direction === 'ascending' ? 'descending' : 'ascending',
        }
      }
      
      return {
        column: action.column,
        data: _.sortBy(state.data, [action.column]),
        direction: 'ascending',
      }
      default:
        throw new Error()
  }
}


const ListSeerArticle = ({ seerArticles }) => {
  // const tableData = [
  //   { _id: '1', title: "111", author: "jjj", fromYear: 2010, toYear:2020, method: "uuu", claims: ["a", "b"]  },
  //   { _id: '2', title: "222", author: "jjj", fromYear: 2010, toYear:2020, method: "uuu", claims: ["a", "b"]  },
  // ]
  const tableData = seerArticles;
  // console.log(tableData);
  // console.log(seerArticles);

  const [state, dispatch] = React.useReducer(exampleReducer, {
    column: null,
    data: tableData,
    direction: null,
  })
  const { column, data, direction } = state
  // console.log(seerArticles);
  // console.log(data);
  
  return (
    <Table sortable celled striped>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell className="cell-width" sorted={column === 'title' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'title' })}>
              Title
        </Table.HeaderCell>
        <Table.HeaderCell  className="cell-width" sorted={column === 'author' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'author' })}>Author</Table.HeaderCell>
        <Table.HeaderCell  >Year</Table.HeaderCell>
        <Table.HeaderCell  singleLine>SE Practice</Table.HeaderCell>
        <Table.HeaderCell  className="cell-width">Claim</Table.HeaderCell>
        <Table.HeaderCell  className="cell-width">Evidence</Table.HeaderCell>
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

export default ListSeerArticle