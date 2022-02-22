import React, { useState, useEffect } from 'react';

function CommentList() {
  const [commentList, setCommentList] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/data/sangminLee/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCommentList(data);
      });
  }, []);

  return (
    <div className="commentList">
      <ul>
        {commentList.map(comment => {
          return (
            <li key={comment.id}>
              {comment.userName}
              {comment.content}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CommentList;
