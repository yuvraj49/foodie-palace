// let collectionDataArray = [
// 							{
// 								'cname':'abc',
// 								'content':[{
// 												'name':'zomato',
// 												'photo':'photo',
// 												'cuisines':'cuisines',
// 												'location':'location',
// 											},
// 											{
// 												'name':'zomato',
// 												'photo':'photo',
// 												'cuisines':'cuisines',
// 												'location':'location',
// 											}]

										
// 							},
// 							{
// 								'cname':'abc',
// 								'content':[{
// 												'name':'zomato',
// 												'photo':'photo',
// 												'cuisines':'cuisines',
// 												'location':'location',
// 											},
// 											{
// 												'name':'zomato',
// 												'photo':'photo',
// 												'cuisines':'cuisines',
// 												'location':'location',
// 											}]
// 							}];


 let collectionDataArray = [];


export function renderForModal(){

	let collectionNameCount = collectionDataArray.filter(collection => collection.cname).length;
	let collectionNameValue = collectionDataArray.filter(collection => collection.cname);
	let modalHtml = '<h4>Your collection</h4>';
	if(collectionNameCount == 0){
		modalHtml +=  '<p>Nothing to show here</p>';
	}else{
		for(let i=0;i<collectionNameCount;i++){
			let listOfItems = collectionDataArray[i].content.map(restaurant => restaurant.name);
			modalHtml += `<li id="list${i}">`;
			modalHtml += `<div class="collapsible-header"><h5>${collectionNameValue[i].cname}</h5><i class="fas fa-trash-alt"></i></div>`;
			// let addBtn = document.getElementById(`list${i}`);
			// addBtn.onclick = function(){
			// 	removeCollection(i);
			// }
			$(`#list${i}`).click(removeCollection(i));

			modalHtml += `<div class="collapsible-body">`;
			modalHtml += `<ul>`;
			for(let j=0;j<listOfItems.length;j++){
				modalHtml += `<div id="listData${i}${j}"><li><h6>${listOfItems[j]}</h6> <i class="fas fa-trash-alt"></i></li></div>`;
				$(`listData${i}${j}`).click(removeList(i,j));
			}
			modalHtml += `</ul>`;
			modalHtml += `</div>`;
			modalHtml += `</li>`;
		}
	}
	return modalHtml;
	
}


function removeCollection(index){
	collectionDataArray.splice(index,1);
	$(`#list${index}`).css("display","none");
}

function removeList(collection,listValue){
	collectionDataArray[collection].content.splice(listValue,1);
	$(`#listData${collection}${listValue}`).css("display","none");
}

function addData(id,name,image,cuisines,locality){
	let temp = {}
	temp.name = name;
	temp.cuisines = cuisines;
	temp.locality = locality;
	temp.image = image;
    collectionDataArray[id].content.push(temp);


}

export function pushToArray(temp){
		collectionDataArray.push(temp);
}

export function createListForCollection(){
	let createList = '<h4>Create a collection</h4>';
	createList += `<input type="text" name="create" id="create">`;
	$("#addCollection").html(createList);
}

export default function showList(name,image,cuisines,locality){
			console.log(collectionDataArray);

	let collectionNameCount = collectionDataArray.filter(collection => collection.cname).length;
	let collectionNameValue = collectionDataArray.filter(collection => collection.cname);
	let modalHtml = '<ul>';
		for(let i=0;i<collectionNameCount;i++)
		{
			modalHtml += `<li><a class="waves-effect waves-teal btn-flat" id="modalElement${i}">${collectionNameValue[i].cname}</a> </li>`;
			$(`#modalElement${i}`).click(addData(i,name,image,cuisines));
		}
		modalHtml += '</ul>';
	$("#addList").html(modalHtml);	
}






