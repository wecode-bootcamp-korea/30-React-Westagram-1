import Comment from './Comment';
import './CommentList.scss';

function CommentList({ commentList, feedCommentList }) {
  return (
    <div className="commentList">
      {feedCommentList.map(feedComment => {
        return (
          <Comment
            key={feedComment.id}
            name={feedComment.userName}
            comment={feedComment.content}
          />
        );
      })}
      {commentList.map(comment => {
        return (
          // <div key={index}>
          <Comment
            key={comment.id}
            name={comment.userName}
            comment={comment.content}
          />
          // </div>
        );
      })}
    </div>
  );
}

export default CommentList;
