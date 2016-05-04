import { createAction } from 'redux-actions';

export const selectSubreddit = createAction('SELECT_SUBREDDIT');
export const invalidateSubreddit = createAction('INVALIDATE_SUBREDDIT');
export const requestPosts = createAction('REQUEST_POSTS');
export const receivePosts = createAction('RECEIVE_POSTS', (subreddit, json) => ({
  subreddit,
  posts: json.data.children.map(child => child.data),
  receivedAt: Date.now(),
}));

export function fetchPosts(subreddit) {
  return function (dispatch) {
    dispatch(requestPosts(subreddit));

    return fetch(`http://www.reddit.com/r/${subreddit}.json`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(subreddit, json)));
  };
}

function shouldFetchPosts(state, subreddit) {
  const posts = state.postsBySubreddit[subreddit];

  if (!posts) {
    return true;
  } else if (posts.isFetching) {
    return false;
  } else {
    return posts.didInvalidate;
  }
}

export function fetchPostsIfNeeded(subreddit) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), subreddit)) {
      return dispatch(fetchPosts(subreddit));
    } else {
      return Promise.resolve();
    }
  };
}
