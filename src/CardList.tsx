import React from 'react';
import { Card } from './Card';
import './CardList.css';

interface CardItem {
    id: number;
    title: string;
    done: boolean;
}

interface CardListProps {
    list: CardItem[];
    onItemTitleChange: (id: number, value: string) => void;
    onItemToggle: (id: number) => void;
    onItemDelete: (id: number) => void;
}

export const CardList: React.FC<CardListProps> = ({
    list,
    onItemTitleChange,
    onItemToggle,
    onItemDelete,
}) => {
    return (
        <ul className="card-list">
            {list.map(({ id, title, done }) => {
                return (
                    <li key={id} className="card-list__item">
                        <Card
                            id={id}
                            title={title}
                            done={done}
                            onTitleChange={onItemTitleChange}
                            onToggle={onItemToggle}
                            onDelete={onItemDelete}
                        />
                    </li>
                );
            })}
        </ul>
    );
};
