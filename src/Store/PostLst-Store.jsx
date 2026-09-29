import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE-POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId,
    );
  } else if (action.type === "ADD-POST") {
    newPostList = [action.payload, ...currentPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    PostListReducer,
    DEFAULT_POST_LIST,
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD-POST",
      payload: {
        id: Date.now(),
        tital: postTitle,
        body: postBody,
        reaction: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE-POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    tital: "Create New APP",
    body: "Hello Friends, I am create a new APP. That app unique to other app because that have extra feature for current condition ",
    reaction: "4",
    userId: "ram-7",
    tags: ["creater", "Science", "Developer"],
  },
  {
    id: "2",
    tital: "By a new Laptop",
    body: "according to my need for developing. i am buy a ACER compony Laptop. thats price $500",
    reaction: "65",
    userId: "dost-45",
    tags: ["laptop", "acer"],
  },
];

export default PostListProvider;
