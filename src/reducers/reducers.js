import { combineReducers } from "redux";
import notesReducer from "../reducers/notesReducer";
import visibilityFilter from "../reducers/visibilityFilter";

const reducers = combineReducers({
    notes: notesReducer,
    visibility: visibilityFilter
})

export default reducers;