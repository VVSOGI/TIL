import * as postsApi from "../api/posts";
import {
  createPromiseThunk,
  handleAsyncActions,
  handleAsyncActionsById,
  createPromiseThunkById,
  reducerUtils,
} from "../lib/asyncUtils";

/* 액션 타입 */

// 포스트 여러 개 조회하기
const GET_POSTS = "GET_POSTS";
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
const GET_POSTS_ERROR = "GET_POSTS_ERROR";

// 포스트 하나 조회하기
const GET_POST = "GET_POST";
const GET_POST_SUCCESS = "GET_POST_SUCCESS";
const GET_POST_ERROR = "GET_POST_ERROR";

export const getPosts = createPromiseThunk(GET_POSTS, postsApi.getPosts);
export const getPost = createPromiseThunkById(GET_POST, postsApi.getPostsById);

const initialState: PostState = {
  posts: reducerUtils.inital(),
  post: {},
};

export type PostState = {
  posts: {
    loading: boolean;
    data: null | [];
    error: null | any;
  };
  post: {};
};

export default function posts(
  state: PostState = initialState,
  action: { type: string; posts: []; post: []; error: any }
) {
  switch (action.type) {
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      return handleAsyncActions(GET_POSTS, "posts", true)(state, action);
    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
      return handleAsyncActionsById(GET_POST, "post")(state, action);
    default:
      return state;
  }
}
