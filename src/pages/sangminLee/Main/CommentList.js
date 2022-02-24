import React, { useState, useEffect } from 'react';

function CommentList() {
  const [commentList, setCommentList] = useState([]);
  const [comment, setComment] = useState([]);
  const getValue = event => {
    const { value } = event.target;
    console.log(value);
    setComment({ content: value });
  };

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
        {commentList.map((comment, idx) => {
          return (
            <li key={idx}>
              {comment.userName}
              {comment.content}
            </li>
          );
        })}
      </ul>
      <input
        onChange={getValue} //input내용 catch
        className="feed-input"
        placeholder="댓글 달기..."
        name="ID"
      />
      <button
        className="feed-button"
        onClick={() => {
          console.log(commentList);
          setCommentList(commentList.concat(comment));
        }}
      >
        게시
      </button>
    </div>
  );
}

export default CommentList;
