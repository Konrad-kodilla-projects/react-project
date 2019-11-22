import shortid from 'shortid';

// selectors
const getCardsForColumns = ({ cards }, columnId) =>
  cards.filter(card => card.columnId === columnId);

const getCardsForSearch = ({cards}, searchString) =>
  cards.filter(card => new RegExp(searchString, 'i').test(card.title));

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

export { getCardsForColumns, getCardsForSearch, ADD_CARD, createAction_addCard };
