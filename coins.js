/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/


let coinPurse = {
  quarters: 0,
  dimes: 0,
  nickels: 0,
  pennies: 0
};


let cQuarter = 25;
let cDime = 10;
let cNickel = 5;
let cPenny = 1;

let inputArea = document.getElementById("sayIn");

let subBut = document.getElementById("submit");


subBut.addEventListener("click", function() {
  changeCreator(inputArea.value);
  console.log(coinPurse);
});

function changeCreator(amount) {
  
  coinPurse = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
  };

  amount = amount.replace(".", "");
  while (amount > 0) {
    if (amount >= cQuarter) {
      amount -= cQuarter;
      coinPurse.quarters += 1; 
      console.log(amount);
    } else if (amount >= cDime) {
      amount -= cDime;
      coinPurse.dimes += 1;
    }else if (amount >= cNickel) {
      amount -= cNickel;
      coinPurse.nickels += 1;
    }else if (amount >= cPenny) {
      amount -= cPenny;
      coinPurse.pennies += 1; 
    }   
  }
}

