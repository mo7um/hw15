import React, {useState} from 'react';
import styled from 'styled-components';
import PostMenu from './PostMenu';

interface PostCardProps {
    id: number;
    title: string;
    content: string;
    onDelete: (id: number) => void; /* Передаем состояние от карточки контейнеру  */
}

const Card = styled.div`
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    margin: 16px;
    width: 400px;
    position: relative;
    transition: all 0.3s ease;
    background: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        width: 300px;
    }

    @media (max-width: 480px) {
        width: 100%;
    }
`

const MenuButton = styled.button`
    position: absolute;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 26px;
    right: 10px;
    top: 6px;
`

const PostCard: React.FC<PostCardProps> = ({id, title, content, onDelete}) => {

    const [isFavorite, setIsFavorite] = useState(false)
    const [menuVisible, setMenuVisible] = useState(false)
    const [postContent, setPostContent] = useState<string>(content)

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    }

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    }

    const deleteCard = () => {
        if (window.confirm('Подтвердите удаление')) {
            onDelete(id) /* Получаем состояние от кноки */
        }
    }

    const editCard = () => {
        const newContent = prompt('Введите новый текст поста:', postContent);
        if(newContent) {
            setPostContent(newContent)
        }
    }

    return (
        <Card>
            <h2>{title}</h2>
            <p>{postContent}</p>
            <p>{isFavorite ? 'В избранном' : ''}</p>
            <MenuButton onClick={toggleMenu}>⁝</MenuButton>
            {menuVisible && <PostMenu
                onFavorite={toggleFavorite}
                onDelete={deleteCard}
                onEdit={editCard}
            />}
        </Card>
    )
};

export default PostCard;
