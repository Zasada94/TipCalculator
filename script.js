let billTotalInput = document.getElementById("billTotalInput");
let tipInput = document.getElementById("tipInput");
let numberOfPeopleDiv = document.getElementById("numberOfPeople");
let perPersonTotalDiv = document.getElementById("perPersonTotal");

let numberOfPeople = Number(numberOfPeopleDiv.innerText);
console.log(numberOfPeople);

const calculateBill = () => {
	const bill = Number(billTotalInput.value);
	const tip = Number(tipInput.value) / 100;
	const total = bill * tip + bill;
	let perPersonTotal = total / numberOfPeople;
	perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`;
};

const increasePeople = () => {
	numberOfPeople++;
	numberOfPeopleDiv.innerText = numberOfPeople;
	calculateBill();
};

const decreasePeople = () => {
	if (numberOfPeople > 1) {
		numberOfPeople--;
		numberOf.innerText = numberOfPeople;
		calculateBill();
	}
};
