import React from 'react';

function CommentInput() {
  return (
    <div className="feed-commentbox">
      <div className="feed-comment">
        <input className="feed-input" placeholder="댓글 달기..." />
        <button className="feed-button" onClick={() => alert('알람뜸')}>
          게시
        </button>
      </div>
    </div>
  );
}

export default CommentInput;
