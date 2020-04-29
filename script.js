var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var itemObj = {itemName: `${item}`, itemPrice: Math.floor(Math.random()*100)}
 cart.push(itemObj);
 return `${itemObj.itemName} has been added to your cart.`;
 
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return `Your cart is empty.`
  } else if (cart.length === 1) {
    return `In your cart, you have ${itemObj.itemName[0]} at ${itemObj.itemPrice[0]}`
  } else if (cart.length === 2) {
    return `In your cart you have ${itemObj.itemName[0]} at ${itemObj.itemPrice[0]}, and ${itemObj.itemName[1]} at ${itemObj.itemPrice[1]}`
  } else {
    var initialString = 'In your cart, you have ';
    for (var i = 0; i < cart.length - 1; i++) {
      initialString += initialString + `${cart[i].itemName} at ${cart[i].itemPrice}`
    }
    return initialString + `, and ${cart[cart.length - 1].itemName} at ${cart[cart.length - 1].itemPrice}.`
  }
}

function total() {
  // write your code here
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
  total += cart[i].itemPrice;
  }
  return total;
}



function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (item = cart[i].itemName) {
      cart.splice(i, 1);
      return cart;
    }
  }
  if (item != cart[item]) {
    return 'That item is not in your cart.';
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    cart = [];
    return `Your total is ${total()}, which will be charged to the card ${cardNumber}`
  }
}
