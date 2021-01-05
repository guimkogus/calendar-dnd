import { combineReducers } from 'redux';
import subjects from './subjects';
import SubjectsState from './subjects/types';

const root = combineReducers({
  subjects
});

export default root;

export type RootState = {
  subjects: SubjectsState;
};
