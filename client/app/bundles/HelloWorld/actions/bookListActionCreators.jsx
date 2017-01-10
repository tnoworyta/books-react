/* eslint-disable import/prefer-default-export */

import { FETCH_BOOKS } from '../constants/helloWorldConstants';




export function fetchBooks() {
  const request = [{title: 'Avs', author: 'dfdsf'}, {title: 'Bdwfsdf', author: 'dddddd'}];

  return {
    type: FETCH_BOOKS,
    payload: request
  };
}
