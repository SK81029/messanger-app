import { useContext } from "react";
import { RiChatDeleteFill } from "react-icons/ri";
import { PostList } from "../Store/PostLst-Store";



const Post = ({ post }) => {

  const {deletePost} = useContext(PostList);

  return (
    <div className="card myPostCard" style={{ width: "30rem" }}>
      <div className="card-body bodyColor">
        <h5 className="card-title titalName">{post.tital}</h5>
        <p className="card-text">
          {post.body}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" 
          onClick={() => deletePost(post.id)}>
            <RiChatDeleteFill />
          </span>
        </p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-info hasTag">{tag}</span>
        ))}
        <div className="alert alert-success reaction" role="alert">
          This post has been reacted by {post.reaction} people.
        </div>
      </div>
    </div>
  );
};

export default Post;
