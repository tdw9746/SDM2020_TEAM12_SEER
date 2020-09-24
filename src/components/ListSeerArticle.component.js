import React from 'react';

const ListSeerArticle = ({ seerArticles }) => {

  return (
    <ul>
      <lh>Title | Author | Method</lh>
      {
        seerArticles &&
          seerArticles.length > 0 ?
            (
              seerArticles.map(seerArticle => {
                return (
                  <li key={seerArticle._id} >{seerArticle.title} | {seerArticle.author} | {seerArticle.SEmethods}</li>
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