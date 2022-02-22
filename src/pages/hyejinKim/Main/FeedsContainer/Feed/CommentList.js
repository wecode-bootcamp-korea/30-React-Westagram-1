import React from 'react';
import Comment from './Comment';
import './CommentList.scss';

function CommentList({ commentList }) {
  return (
    <div className="commentList">
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
