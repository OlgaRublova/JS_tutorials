//Using "classList", you can add or remove a class without affecting any others the element may have.
// But if you assign "className", it will wipe out any existing classes while adding the new one
// (or if you assign an empty string it will wipe out all of them).

//Element.getAttribute( ): return the string value of a named attribute

//The Array. from() function is an inbuilt function in JavaScript which creates a new array instance
// from a given array. In case of a string, every alphabet of the string is converted to an element
// of the new array instance and in case of integer values, new array instance simple take the
// elements of the given array.

//selecting DOM elements

//single element
// let heading = document.getElementById("heading");
// console.log(heading.textContent);
// console.log("hello");
//
// //change css
// heading.style.background = "#333";
// heading.style.color = "white";
// heading.style.padding = "20px";
// heading.style.marginTop = "50px";
//
// //change the text
// heading.textContent = "The best courses";
// //or
// heading.innerHTML = "New heading";
//
// //Query Selector
// const learningHeading = document.querySelector("#learn");
// learningHeading.textContent = "Hello!!!";
// console.log(learningHeading);
//
// const tagline = document.querySelector(".tagline");
// const newText = tagline.textContent.replace("$15", "$12");
// tagline.textContent = newText;
//
//
//
// //nest your selectors with a css syntax
// let card1 = document.querySelector(".card img");
//
// //nth-child, first-child or last-child
// let link;
// link = document.querySelector("#primary a:first-child");
// link = document.querySelector("#primary a:last-child");
// link = document.querySelector("#primary a:nth-child(2)");
// console.log(link);


//multiple elements
// const links = document.querySelector("#primary").getElementsByClassName("link");
// const links1 = document.getElementById("primary").getElementsByClassName("link");
//
// const images = document.getElementsByTagName("img");
// console.log(images[0].src);
//
//convert HTML Collection into an array
// imagesArray = Array.from(images);
// imagesArray.forEach(function (image) {
//     console.log(image);
// });
// console.log(imagesArray);
//
// let card = document.querySelectorAll(".card");
// console.log(card);
//
// const oddLinks = document.querySelectorAll("#primary a:nth-child(odd)");
//
// oddLinks.forEach(function (odd) {
//     odd.style.backgroundColor = "red";
//     odd.style.color = "white";
// });
//
// //Select event links
// const evenLinks = document.querySelectorAll("#primary a:nth-child(even)");
// evenLinks.forEach(function (even) {
//     even.style.backgroundColor = "blue";
//     even.style.color = "white";
// });
//change all the add-to-cart button text
// const addCartBtns = document.querySelectorAll(".add-to-cart");
// addCartBtns.forEach(function (button) {
//     button.textContent = "Something new"
// });
// console.log(addCartBtns);

//traversing the DOM
// const navigation = document.querySelector("#primary");
// let element;
//
// element = navigation.children[0].textContent = "New Text";
//children is a property that lets you select direct descendants
// (elements that are immediately nested in another element).
// It returns a HTML Collection that updates when children elements are changed.
//
//const list = document.querySelector('.list')
// const listItems = list.children
//
// element = navigation.children[0].nodeType;
//1 = Element
//2 = Attributes
//3 = Text Nodes
//8 = Comments
//9 = document
//10 = doctype
//
// console.log(element);
//
//closest lets you select the closest ancestor element that matches a selector.
//const closestAncestor = Element.closest(selector)
// const firstLink = document.querySelector('a');
// const list = firstLink.closest('.list');

//create element
//
//create a new <a>
// const newLink = document.createElement('a');
//
// //add a class
// newLink.className = "link";
//
// //add an href
// newLink.href = "index.html";
// // newLink.setAttribute("href", "#"); //old-dated
//
// //add the text
// newLink.appendChild(document.createTextNode("New Link"));
//
// //Add an element to the HTML
// document.querySelector("#primary").appendChild(newLink);
//
// //replace an element
// const newHeading = document.createElement('h2');
// //add the id
// newHeading.id = "heading";
// //add the class
// newHeading.classList.add('heading');
// //add the new text
// newHeading.appendChild((document.createTextNode("The best courses")));
//
// //select the old heading
// const oldHeading = document.querySelector("#heading");
//
// //parent
// const courseList = document.querySelector("#courses-list");
//
// //then, replace!
// courseList.replaceChild(newHeading, oldHeading);
//
// console.log(courseList);

//String methods
// let output;
// const learning = "Learning Javascript is great";
// output = learning.indexOf("is");
// output = learning.substring(0,20);
// //substring from the end
// output = learning.substring(learning.length - 6);
// //slice
// output = learning.slice(0, 10);
// output = learning.slice(-10);//from the end
// //split
// output = learning.split(' ');
// //replace
// output = learning.replace("Javascript", "HTML");
// //includes
// output = learning.includes("Javascript");
// //repeat
// let greet = "hello ";
// output = greet.repeat(5);
//
//
// console.log(output);


