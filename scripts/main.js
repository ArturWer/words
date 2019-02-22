"use strict"
let userWord = document.getElementById('userWord');
let main = document.querySelector("main");
let msg = document.querySelector(".msg");

function addSymbols(words){
	let trimWords = words.trim();
	let wordArr = trimWords.split("");
	let newString = wordArr.join(" ");
	return newString;
};

userWord.addEventListener("keydown", ()=>{
	let userText = userWord.value;
	userText = addSymbols(userText);
	msg.textContent = userText;
});