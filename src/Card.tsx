import React from 'react';
import './Card.css';
import { ListItem } from './useList';

interface CardProps {
    item: ListItem;
    onTitleChange: (id: number, value: string) => void;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

export const Card: React.FC<CardProps> = ({
    item,
    onTitleChange,
    onToggle,
    onDelete,
}) => {
    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onTitleChange(item.id, event.target.value);
    };

    const handleCheckboxChange = () => {
        onToggle(item.id);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onToggle(item.id);
    };

    const handleTitleBlur = () => {
        if (item.title === '') {
            onDelete(item.id);
        }
    };

    return (
        <form className="card" onSubmit={handleSubmit}>
            <input
                className="card__done"
                type="checkbox"
                checked={item.done}
                onChange={handleCheckboxChange}
                tabIndex={-1}
            />

            <input
                className="card__title"
                type="text"
                value={item.title}
                onChange={handleTitleChange}
                onBlur={handleTitleBlur}
            />
        </form>
    );
};
