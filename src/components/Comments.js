import Comment from './Comment'

const Comments = ({ addComment }) => {
  console.log(addComment)
  return (
    <div className="comments">
      <h2>Комментарии:</h2>

      {addComment.map((comment) => (
        <Comment comment={comment} />
      ))}
    </div>
  )
}

export default Comments
