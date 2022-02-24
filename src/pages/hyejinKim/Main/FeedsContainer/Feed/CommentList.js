import Comment from './Comment';

// 스타일이 없는 div는 <>로 처리한다.
// commentList.scss 삭제
function CommentList({ commentList, feedCommentList }) {
  return (
    <>
      {feedCommentList.map(feedComment => {
        const { id, userName, content } = feedComment;
        return <Comment key={id} name={userName} comment={content} />;
      })}
      {commentList.map(comment => {
        const { id, userName, content } = comment;
        return <Comment key={id} name={userName} comment={content} />;
      })}
    </>
  );
}

export default CommentList;
