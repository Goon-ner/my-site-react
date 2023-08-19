import React from 'react'
import { useState } from 'react'
import './CommentForm.css'

const CommentForm = ({ addChange }) => {
  const [text, setText] = useState([])

  function formSubmit(event) {
    event.preventDefault()
    addChange(text)
    setText([])
  }
  return (
    <form className="commentForm" onSubmit={formSubmit}>
      <h2>Оставьте комментарий:</h2>
      <input
        className="nameInput"
        value={text.name}
        placeholder="Ваше имя"
        onChange={(e) => setText({ ...text, name: e.target.value })}
      ></input>
      <textarea
        className="commentInput"
        value={text.comment}
        type="text"
        placeholder="Ваш комментарий"
        onChange={(e) => setText({ ...text, comment: e.target.value })}
      ></textarea>
      <button className="commentButton" title="submit" type="submit">
        Отправить
      </button>
    </form>
  )
}

export default CommentForm
