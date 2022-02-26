import './Comment.scss';

function Comment({ userName, content }) {
  return (
    <div className="comment">
      <p>
        <strong className="commentMan">{userName}</strong>
        {content}
      </p>
    </div>
  );
}

export default Comment;
