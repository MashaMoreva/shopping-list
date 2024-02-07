import React from 'react';
import './Card.css';

interface CardProps {
    id: number;
    title: string;
    onTitleChange: (id: number, value: string) => void;
    done: boolean;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

export const Card: React.FC<CardProps> = ({
    id,
    title,
    onTitleChange,
    done,
    onToggle,
    onDelete,
}) => {
    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onTitleChange(id, event.target.value);
    };

    const handleCheckboxChange = () => {
        onToggle(id);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onToggle(id);
    };

    const handleTitleBlur = () => {
        if (title === '') {
            onDelete(id);
        }
    };

    return (
        <form className="card" onSubmit={handleSubmit}>
            <input
                className="card__done"
                type="checkbox"
                checked={done}
                onChange={handleCheckboxChange}
                tabIndex={-1}
            />

            <input
                className="card__title"
                type="text"
                value={title}
                onChange={handleTitleChange}
                onBlur={handleTitleBlur}
            />
        </form>
    );
};
