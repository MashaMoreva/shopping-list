import React from 'react';
import { CardList } from './CardList';
import { useList, ListStateAndActions } from './useList';
import './App.css';

export const App: React.FC = () => {
  const { list, createItem, setItemTitle, toggleItem, deleteItem }: ListStateAndActions = useList();

  return (
    <div className="app">
      <h1>Список покупок</h1>

      <CardList
        list={list}
        onItemTitleChange={setItemTitle}
        onItemToggle={toggleItem}
        onItemDelete={deleteItem}
      />

      <button className="create-button" onClick={createItem}>
        Новый элемент
      </button>
    </div>
  );
};
