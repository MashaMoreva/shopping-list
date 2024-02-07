export interface ListItem {
  id: number;
  title: string;
  done: boolean;
}


export interface ListStateAndActions{
  list: ListItem[];
  createItem: () => void;
  setItemTitle: (id: number, title: string) => void;
  toggleItem: (id: number) => void;
  deleteItem: (id: number) => void;
}

export function useList(): ListStateAndActions {
  // Список элементов
  const list: ListItem[] = [];

  /** Создать новый элемент. */
  const createItem = () => { };

  /**
   * Установить заголовок элемента.
   *
   * @param id - ID элемента.
   * @param title - Заголовок элемента.
   */
  const setItemTitle = (id: number, title: string) => { };

  /**
   * Переключить выполненность элемента.
   *
   * @param id - ID элемента.
   */
  const toggleItem = (id: number) => { };

  /**
   * Удалить элемент.
   *
   * @param id - ID элемента.
   */
  const deleteItem = (id: number) => { };

  return {
    list,
    createItem,
    setItemTitle,
    toggleItem,
    deleteItem,
  };
}
