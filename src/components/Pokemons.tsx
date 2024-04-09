// components/Posts.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRequest } from '../store/actions';
import { RootState } from '../store';

interface Post {
    name: string;
    url: string;
}

const Posts: React.FC = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state: RootState) => state.posts);
    const loading = useSelector((state: RootState) => state.loading);
    const error = useSelector((state: RootState) => state.error);

    useEffect(() => {
        dispatch(fetchRequest());
    }, [dispatch]);

    return (
        <>
            <h1>Pokemons</h1>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {posts.map((post: Post) => (
                <div key={post.name}>
                    <h3>{post.name}</h3>
                    <p>{post.url}</p>
                </div>
            ))}
        </>
    );
};

export default Posts;
