import { SAVE_TOPICS } from 'actions/types';

export default function(state = [], action) {
  switch(action.type){
    case SAVE_TOPICS:
      return [...state, action.payload];
    default: 
      return state;
  }
}