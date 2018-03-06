
var collectionDataArray = [];

function removeList(collection, listValue) {
  collectionDataArray[collection].content.splice(listValue, 1);
  $(`#listData${collection}${listValue}`).css('display', 'none');
}

function removeCollection(index) {
  collectionDataArray.splice(index, 1);
  $(`#list${index}`).css('display', 'none');
}

function addData(id, name, image, cuisines, locality) {
  const temp = {};
  temp.name = name;
  temp.cuisines = cuisines;
  temp.locality = locality;
  temp.image = image;
  collectionDataArray[id].content.push(temp);
}

export function renderForModal() {
  const collectionNameCount = collectionDataArray.filter(collection => collection.cname).length;
  const collectionNameValue = collectionDataArray.filter(collection => collection.cname);
  let modalHtml = '<h4>Your collection</h4>';
  if (collectionNameCount === 0) {
    modalHtml += '<p>Nothing to show here</p>';
  } else {
    for (let i = 0; i < collectionNameCount; i += 1) {
      const listOfItems = collectionDataArray[i].content.map(restaurant => restaurant.name);
      modalHtml += `<li id="list${i}">`;
      modalHtml += `<div class="collapsible-header"><h5>${collectionNameValue[i].cname}</h5><i class="fas fa-trash-alt"></i></div>`;
      $(`#list${i}`).click(removeCollection(i));

      modalHtml += '<div class="collapsible-body">';
      modalHtml += '<ul>';
      for (let j = 0; j < listOfItems.length; j += 1) {
        modalHtml += `<div id="listData${i}${j}"><li><h6>${listOfItems[j]}</h6> <i class="fas fa-trash-alt"></i></li></div>`;
        $(`listData${i}${j}`).click(removeList(i, j));
      }
      modalHtml += '</ul>';
      modalHtml += '</div>';
      modalHtml += '</li>';
    }
  }
  return modalHtml;
}

export function pushToArray(temp) {
  collectionDataArray.push(temp);
}

export function createListForCollection() {
  let createList = '<h4>Create a collection</h4>';
  createList += '<input type="text" name="create" id="create">';
  $('#addCollection').html(createList);
}

export default function showList(name, image, cuisines) {
  const collectionNameCount = collectionDataArray.filter(collection => collection.cname).length;
  const collectionNameValue = collectionDataArray.filter(collection => collection.cname);
  let modalHtml = '<ul>';
  for (let i = 0; i < collectionNameCount; i += 1) {
    modalHtml += `<li><a class="waves-effect waves-teal btn-flat" id="modalElement${i}">${collectionNameValue[i].cname}</a> </li>`;
    $(`#modalElement${i}`).click(addData(i, name, image, cuisines));
  }
  modalHtml += '</ul>';
  $('#addList').html(modalHtml);
}

