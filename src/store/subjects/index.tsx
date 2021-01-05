import SubjectsState, { Subject } from './types';

export const INITIAL_STATE: SubjectsState = [
  {
    name: 'first subject'
  }
];

const events = (state = INITIAL_STATE, action: Actions) => {
  switch (action.type) {
    case Types.ADD_SUBJECT:
      return state.push(action.payload);
    default:
      return state;
  }
};

export default events;

enum Types {
  ADD_SUBJECT = 'subjects/ADD_SUBJECT'
}

export const Creators = {
  AddSubject: (subject: Subject) => ({
    type: Types.ADD_SUBJECT as typeof Types.ADD_SUBJECT,
    payload: subject
  })
};

type Actions = ReturnType<typeof Creators.AddSubject>;
