import callSearchApi from './fetch.js';
import { renderForModal, pushToArray, createListForCollection } from './storage.js';
import './css/introComponents.css';






$("#search-submit").click(function() {
	let inputValue = $("search-label").val();
	if(inputValue != '')
		callSearchApi(inputValue);
});


$("#collectionEvent").click(function(){	
	$("#collapsible").html(renderForModal());

	createListForCollection();

});


$("#addCollectionButton").click(function(){
	let create = $("#create").val();
	let temp = {
    	cname:create,
    	content:[]
	}
	pushToArray(temp);

});



$(document).ready(() => {
			$('#modal1').modal();
			$('#modal2').modal();
			 $('#collapsible').collapsible();
		});
