import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './postsSlice';

const PostsView = () => {
    const { isLoading, posts, error } = useSelector((state) => state.posts);
    console.log(posts)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(fetchPosts())
    }, [dispatch])
    
    return (
        <div>
            <h4>post view</h4>
            {isLoading && <h2>Loading....</h2>}
            {error && <h2>{error}</h2>}
            <section>{
                posts?.map(post => {
                    return <article key={post.id}>
                        <h5>{post.title}</h5>
                        <h5>{post.body}</h5>
                    </article>
                })
            }</section>
        </div>
    );
};

export default PostsView;