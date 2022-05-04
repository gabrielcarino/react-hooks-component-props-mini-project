import React from "react";
import Article from "./Article";

function ArticleList ({posts}) {
  const articleDiv = posts.map(post => {
     return <Article time={post.minutes} key={post.id} title={post.title} date={post.date} preview={post.preview} />
  })
  return (
    <main>{articleDiv}</main>
  );
};

export default ArticleList;