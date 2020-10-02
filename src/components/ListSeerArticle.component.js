import React from 'react';
import _ from 'lodash'

import { Header, Table, Rating } from 'semantic-ui-react'
import { render } from '@testing-library/react';

const ListSeerArticle = ({ seerArticles }) => (
  // <ul>
  //   <lh>Title | Author | Method</lh>
  //   {
  //     seerArticles &&
  //       seerArticles.length > 0 ?
  //       (
  //         seerArticles.map(seerArticle => {
  //           return (
  //             <li key={seerArticle._id} >
  //               {seerArticle.title}
  //                   | {seerArticle.author}
  //                   | {seerArticle.SEmethods}
  //                   | {seerArticle.claims[0]}
  //             </li>
  //           )
  //         })
  //       )
  //       :
  //       (
  //         <li>No SeerArticle(s) found</li>
  //       )
  //   }
  // </ul>
  <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Title</Table.HeaderCell>
        <Table.HeaderCell>Author</Table.HeaderCell>
        <Table.HeaderCell>Year</Table.HeaderCell>
        <Table.HeaderCell singleLine>SE Practice</Table.HeaderCell>
        <Table.HeaderCell>Claim</Table.HeaderCell>
        <Table.HeaderCell>Evidence</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {
        !seerArticles || seerArticles.length <= 0 ?
          (
            <Table.Row>
              <Table.Cell colSpan='5'>
                No SeerArticle(s) found
              </Table.Cell>
            </Table.Row>
          )
          :
          (

            seerArticles.map(seerArticle => {
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
)

export default ListSeerArticle