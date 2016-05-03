import { createAction, handleAction, handleActions } from 'redux-actions';

export const selectSubreddit = createAction('SELECT_SUBREDDIT');
export const invalidateSubreddit = createAction('INVALIDATE_SUBREDDIT');
export const requestPosts = createAction('REQUEST_POSTS');
export const receivePosts = createAction('RECEIVE_POSTS', (subreddit, json) => ({
  posts: json.data.children.map(child => child.data),
  subreddit,
  receivedAt: Date.now(),
}));
