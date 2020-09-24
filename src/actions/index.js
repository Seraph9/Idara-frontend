export * from './listsActions'; // this is necessary when importing from main folder 'actions' as this is the entry file or index, even though the function is already being exported in its own file within this folder
export * from './cardsActions';

export const ADD_CARD = 'ADD_CARD';
export const ADD_LIST = 'ADD_LIST';
export const DRAGGED = 'DRAGGED';
export const LOAD_LISTS = 'LOAD_LISTS';
export const LOAD_CARDS = 'LOAD_CARDS';

