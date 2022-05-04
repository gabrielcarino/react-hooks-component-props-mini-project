import React from "react";

function Article({
  title,
  date = "January 1, 1970",
  preview,
  time,
}) {
  const readTime = (min) => {
    let emojis = ``
    if (min >= 30) {
      emojis = "🍱".repeat(Math.ceil(min / 10));
    }
    else {
      emojis = "☕️".repeat(Math.ceil(min / 5));
    }
    return `${emojis} ${min} min read`
  }
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}•{readTime(time)}</small>
      <p>{preview}</p>
    </article>
  )
}

export default Article;