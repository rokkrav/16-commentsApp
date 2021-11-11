import './index.css'

import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentDetails, clickOnLike, deleteComment} = props
  const {id, name, comment, isLiked, initialClassName, date} = commentDetails
  const initialOfName = name ? name[0].toUpperCase() : ''
  const likeClassName = isLiked ? 'button blue-color' : 'button'
  const likeImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const postedTime = formatDistanceToNow(date)

  const onClickLike = () => {
    clickOnLike(id)
  }

  const onDeleteComment = () => {
    deleteComment(id)
  }

  return (
    <li className="comment-item">
      <div className="comment-section">
        <div className={initialClassName}>
          <p className="initial">{initialOfName}</p>
        </div>
        <div>
          <div className="name-details">
            <p className="name">{name}</p>
            <p className="time-count">{postedTime}</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="reaction-container">
        <div className="like-container">
          <img src={likeImageUrl} alt="like" className="like-img" />
          <button type="button" className={likeClassName} onClick={onClickLike}>
            Like
          </button>
        </div>
        <button
          type="button"
          className="button"
          onClick={onDeleteComment}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-img"
          />
        </button>
      </div>
      <hr className="line" />
    </li>
  )
}

export default CommentItem
