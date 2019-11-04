export const ADD_NOTE = 'ADD_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';
export const SHOW_ALL = 'SHOW_ALL';

export function addNote(title, content) {
    return { type: ADD_NOTE, title, content };
}

export function deleteNote(id) {
    return { type: REMOVE_NOTE, id };
}

export function showAll(visibility = SHOW_ALL) {
    return { type: SHOW_ALL };
}