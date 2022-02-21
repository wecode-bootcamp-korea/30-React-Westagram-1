import './Comment.scss';

function Comment({ content }) {
  return (
    <div className="comment">
      <p>
        <strong className="commentMan">man01</strong>
        {content}
      </p>
    </div>
  );
}

export default Comment;
