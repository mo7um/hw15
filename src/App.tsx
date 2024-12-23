import React, { useState } from 'react';
import styled from 'styled-components';
import PostCard from './components/PostCard';

interface Post {
    id: number;
    title: string;
    content: string;
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1000px;
    padding: 40px;
    background: linear-gradient(to right, #6a11cb, #2575fc);
    border-radius: 16px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);

    @media (max-width: 768px) {
        padding: 20px;
        max-width: 90%;
    }
`;

const Title = styled.h1`
    font-style: 3em;
    color: #ffffff;
    text-align: center;
    margin-bottom: 40px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);

    @media (max-width: 768px) {
        font-size: 2.2em;
    }
`;

const App: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([
        {
            id: 1,
            title: 'Вы когда нибудь дружили с моржом?',
            content:
                'Что делать если вашим единственным другом был морж и того вы съели? План действий простой, приглашаем домой нерадивого журналиста, угощаем чаем с печеньками, ну а дальше понятно'
        },
        {
            id: 2,
            title: 'Хотите стать лучшей версией себя? Нужно всего лишь выпить простую советскую...',
            content: ' '
        }
    ]);

    const handleDeletePost = (id: number) => {
        setPosts(posts.filter((post) => post.id !== id));
    };

    return (
        <>
            <Container>
                <Title>Посты</Title>
                {posts.map((post) => (
                    <PostCard
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        content={post.content}
                        onDelete={handleDeletePost} /* Получаем состояние от карточки */
                    />
                ))}
            </Container>
        </>
    );
};

export default App;
