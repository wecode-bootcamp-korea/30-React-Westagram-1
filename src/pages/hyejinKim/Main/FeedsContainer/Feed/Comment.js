import './Comment.scss';

function Comment({ name, comment }) {
  return (
    <div className="comment">
      <p>
        <b className="commentUser">{name} </b>
        {comment}
      </p>
      <div
        className="commentLikeBtn commentLikeBtn-white"
        // onClick="commentLike(event)"
      />
    </div>
  );
}

export default Comment;
