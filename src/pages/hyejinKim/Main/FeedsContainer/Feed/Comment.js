import './Comment.scss';

function Comment({ content }) {
  return (
    <div className="comment">
      <p>
        <b className="commentUser">test01 </b>
        {content}
      </p>
      <div
        className="commentLikeBtn commentLikeBtn-white"
        onClick="commentLike(event)"
      />
    </div>
  );
}

export default Comment;
