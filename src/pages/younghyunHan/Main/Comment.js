import './Comment.scss';

function Comment(props){
  return (
    <div className="comment">
      <p>
        <strong className="commentMan">man01</strong>
        {props.content}
      </p>
    </div>
  );
}

export default Comment;
