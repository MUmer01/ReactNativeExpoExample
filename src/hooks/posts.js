import { useContext } from 'react';
import { PostsContext } from '../Provider/Posts/context';

const usePostsContext = () => {
  const postsData = useContext(PostsContext);
  return postsData;
};

export { usePostsContext };
