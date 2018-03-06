import showList from './storage.js';


export default function displayHtml(dataJson, input) {
  const arrayCut = dataJson.restaurants;

  let render = ` <h5> Search Results Based on Keyword: ${input} </h5><br><div class="row" style="text-align: center;">`;


  for (let i = 0; i < dataJson.restaurants.length; i += 1) {

    let [name, image, cuisines, locality] = arrayCut[i].restaurant;

    // let name = arrayCut[i].restaurant.name;
    name = name.replace('\'', ',');
    // let image = arrayCut[i].restaurant.featured_image;
    image = image.replace('\'', ',');
    // let cuisines = arrayCut[i].restaurant.cuisines;
    cuisines = cuisines.replace('\'', ',');
    // let locality = arrayCut[i].restaurant.location.locality;
    locality = locality.replace('\'', ',');

    if (image === '') { continue; }


    render += `<div class="col s12 m6 l4">
      <div class="card" style="">
        <div class="card-image" style="">
          <img src="${image}" alt="${name}" style="height:300px;">
          <span class="card-title">${name}</span>`;
    render += ` <a class="waves-effect waves-light btn btn-floating halfway-fab modal-trigger red dropdown-button" href="#modal2" id="dropBtn${i}">+</a>`;

    $(`#dropBtn${i}`).click(showList(name, image, cuisines));

    render += `  
        </div>
        <div class="card-content">
          <p>${locality}</p>
        </div>
      </div>
      </div>`;
  }
  render += '</div>';

  $('#resultSearchData').html(render);
}
