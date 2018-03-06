import displayHtml from './render.js';


const API_KEY = '4aad6a38fde69e1636ad5b4036ab0694';
const SEARCH_URL = 'https://developers.zomato.com/api/v2.1/search';
const myHeader = new Headers();
myHeader.append('content-type', 'application/json');
myHeader.append('user-key', API_KEY);


const initObject = {
  method: 'post',
  headers: myHeader,
};


export default function callSearchApi(inputValue) {
  console.log(inputValue);
  const url = `${SEARCH_URL}?q=${inputValue}`;
  fetch(url, initObject)
    .then(res => res.json())
    .then((result) => {
      displayHtml(result, inputValue);
    });
}
