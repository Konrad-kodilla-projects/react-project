import shortid from 'shortid';
/* 
  Na rozmowę
  Czy te komentarze są bo to jakaś konwencja czy to tylko tak dla
  celów edukacyjnych?
*/

// selectors
const getCardsForColumns = ({ cards, searchString }, columnId) =>
  cards.filter(card => card.columnId === columnId && new RegExp(searchString, 'i').test(card.title));

// action name creator
const reducerName = 'cards';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
const ADD_CARD = createActionName('ADD_CARD');

// action creators
const createAction_addCard = payload => ({ payload, type: ADD_CARD });

// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_CARD:
      return [...state, { ...action.payload, id: shortid.generate() }];
    default:
      return state;
  }
}

export { getCardsForColumns, ADD_CARD, createAction_addCard };
