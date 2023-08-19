import './Comments.css'
function Comment({ comment }) {
  return (
    <div className="comment">
      <h3>{comment.name}</h3>
      <div>{comment.text}</div>
    </div>
  )
}

export default Comment
