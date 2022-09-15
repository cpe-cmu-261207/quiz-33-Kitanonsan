import Comment from "../components/Comment";
import PostOwner from "../components/PostOwner";
import { comments } from "../libs/comments";

export default function Home() {
  comments;

  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        <PostOwner />
        {comments.map((x, i) => (
          <Comment
            username={x.username}
            commentText={x.commentText}
            userImagePath={x.userImagePath}
            likeNum={x.likeNum}
            replies={x.replies}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}
