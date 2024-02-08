import { useState } from "react";

export interface ListItem {
  id: number;
  title: string;
  done: boolean;
}


export interface ListStateAndActions {
  list: ListItem[];
  createItem: () => void;
  setItemTitle: (id: number, title: string) => void;
  toggleItem: (id: number) => void;
  deleteItem: (id: number) => void;
}

export function useList(): ListStateAndActions {

  // Используем useState для хранения состояния списка
  const [list, setList] = useState<ListItem[]>([]);


  // Генератор уникальных идентификаторов для новых элементов
  const generateId = (): number => {
    return Math.floor(Math.random() * 1111); 
  };

  // Создание нового элемента
  const createItem = () => {
    const newItem: ListItem = {
      id: generateId(),
      title: '',
      done: false,
    };
    setList([...list, newItem]);
  };

  // Установка заголовка элемента
  const setItemTitle = (id: number, title: string) => {
    const updatedList = list.map(item => {
      if (item.id === id) {
        return { ...item, title: title };
      }
      return item;
    });
    setList(updatedList);
  };

  // Переключение выполненности элемента
  const toggleItem = (id: number) => {
    const updatedList = list.map(item => {
      if (item.id === id) {
        return { ...item, done: !item.done };
      }
      return item;
    });
    setList(updatedList);
  };

  // Удаление элемента
  const deleteItem = (id: number) => {
    const updatedList = list.filter(item => item.id !== id);
    setList(updatedList);
  };

  return {
    list,
    createItem,
    setItemTitle,
    toggleItem,
    deleteItem,
  };
}
