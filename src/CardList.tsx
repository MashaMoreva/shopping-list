import React from 'react';
import './CardList.css';
import { Card } from './Card';
import { ListItem } from './useList';


interface CardListProps {
    list: ListItem[];
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
            {list.map((item) => (
                <li key={item.id} className="card-list__item">
                    <Card
                        item={item}
                        onTitleChange={onItemTitleChange}
                        onToggle={onItemToggle}
                        onDelete={onItemDelete}
                    />
                </li>
            ))}
        </ul>
    );
};
