import callSearchApi from './fetch.js';
import { renderForModal, pushToArray, createListForCollection } from './storage.js';
import './css/introComponents.css';


$('#search-submit').click(() => {
  const inputValue = $('search-label').val();
  if (inputValue !== '') { callSearchApi(inputValue); }
});


$('#collectionEvent').click(() => {
  $('#collapsible').html(renderForModal());

  createListForCollection();
});


$('#addCollectionButton').click(() => {
  const create = $('#create').val();
  const temp = {
    cname: create,
    content: [],
  };
  pushToArray(temp);
});


$(document).ready(() => {
  $('#modal1').modal();
  $('#modal2').modal();
  $('#collapsible').collapsible();
});
