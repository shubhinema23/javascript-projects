function Cakeitem(itemname, itemprice){
	this.itemname = itemname;
	this.itemprice = itemprice;
}
var cake1 = new Cakeitem('cake1', '$5');
var cake2 = new Cakeitem('cake2', '$15');
var cake3 = new Cakeitem('cake3', '$10');

var ArrCake = [cake1, cake2, cake3];


function Sweetitem(itemname, itemprice){
	this.itemname = itemname;
	this.itemprice = itemprice;
}
var sweet1 = new Sweetitem('sweet1', '$55');
var sweet2 = new Sweetitem('sweet2', '$25');
var sweet3 = new Sweetitem('sweet3', '$20');

var ArrSweet = [sweet1, sweet2, sweet3];


function Donutitem(itemname, itemprice){
	this.itemname = itemname;
	this.itemprice = itemprice;
}
var donut1 = new Donutitem('donut1', '$55');
var donut2 = new Donutitem('donut2', '$75');

var ArrDonut = [donut1, donut2];



function clearpriviousdata(){
	document.getElementById("item_name").innerHTML = "";
	document.getElementById("item_price").innerHTML = "";
};


const btnall = document.getElementById("allitem");
const btncake = document.getElementById("cakeitem");
const btnsweet = document.getElementById("sweetitem");
const btndonut = document.getElementById("donutitem");


btnall.addEventListener("click", function() {
	clearpriviousdata();
	PrintCake();
	PrintSweet();
	PrintDonut();
});



btncake.addEventListener("click", function() {
	clearpriviousdata();
	PrintCake();
});


btnsweet.addEventListener("click", function() {
	clearpriviousdata();
	PrintSweet();
});


btndonut.addEventListener("click", function() {
	clearpriviousdata();
	PrintDonut();
});


function PrintCake(){
ArrCake.forEach(functionGetCake);
var cake;
function functionGetCake(item){
	cake = item;
	document.getElementById("item_name").innerHTML += cake.itemname;
	document.getElementById("item_price").innerHTML += cake.itemprice;

};
}


function PrintSweet(){
ArrSweet.forEach(functionGetSweet);
var sweet;
function functionGetSweet(item){
	sweet = item;
	document.getElementById("item_name").innerHTML += sweet.itemname;
	document.getElementById("item_price").innerHTML += sweet.itemprice;
};
}


function PrintDonut(){

ArrDonut.forEach(functionGetDonut);
var donut;
function functionGetDonut(item){
	donut = item;
	document.getElementById("item_name").innerHTML += donut.itemname;
	document.getElementById("item_price").innerHTML += donut.itemprice;
};
};



function SearchItem(){

	var InputValue = document.getElementById("SearchInput").value;

	ArrDonut.every(InputValue);

	return true;

};
