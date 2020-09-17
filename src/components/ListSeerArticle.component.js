import React from 'react';

const ListSeerArticle = ({ seerArticles }) => {

  return (
    <ul>
      {
        seerArticles &&
          seerArticles.length > 0 ?
            (
              seerArticles.map(seerArticle => {
                return (
                  <li key={seerArticle._id} >{seerArticle.title}</li>
                )
              })
            )
            :
            (
              <li>No SeerArticle(s) found</li>
            )
      }
    </ul>
  )
}

export default ListSeerArticle