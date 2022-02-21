import React, { useState, useEffect } from 'react';
import Comment from './Comment';
import './CommentList.scss';

function CommentList() {
  const [commentList, setCommentList] = useState([]); // 댓글 내용만 모아놓은 배열

  useEffect(() => {
    fetch('http://localhost:3000/data/hyejinKim/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCommentList(data);
      });
  }, []);

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
