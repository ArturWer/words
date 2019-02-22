"use strict"
let userWord = document.getElementById('userWord');
let main = document.querySelector("main");
let msg = document.querySelector(".msg");

function addSymbols(words){
	let wordArr = words.split("");
	let newString = wordArr.join(" ");
	return newString;
};

userWord.addEventListener("input", ()=>{
	let userText = userWord.value;
	userText = addSymbols(userText);
	msg.textContent = userText;
});