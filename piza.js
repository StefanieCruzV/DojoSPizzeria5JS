function pizzaOven(crustType, sauceType, cheese, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}
    
var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"],  ["pepperoni", "sausage"]);
console.log(p1);
var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(p2);
var p3 = pizzaOven("deep dish", "traditional", ["feta"],  ["musrroms", "onion"]);
console.log(p3);
var p4 = pizzaOven("hand tossed", "marinara", ["monterrey"],  ["potatoes", "onion","peperoni"]);
console.log(p4);


function randomPizza(){
    var crust=["cheesy crust", "classic crust","gluten free"]
    var sauce= ["Pesto","White Garlic Sauce","Garlic Ranch Sauce","regular"]
    var cheese=["Gouda Cheese","Goat Cheese"]
    var tops=["potatoes","carrot","onion","musrroms","chiquen","spinach","pepperoni","ham"]
    return pizzaOven(
        crust[(Math.floor(Math.random()*crust.length))],
        sauce[(Math.floor(Math.random()*sauce.length))],
        cheese[(Math.floor(Math.random()*cheese.length))],
        tops[(Math.floor(Math.random()*tops.length))]);
}



var p5 = randomPizza();
console.log(p5);

// var alo=crust[(Math.floor(Math.random()*crust.length))];
// console.log(alo);