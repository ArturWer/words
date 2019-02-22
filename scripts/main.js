"use strict"
let userWord = document.getElementById('userWord');
let main = document.querySelector("main");
let msg = document.querySelector(".msg");

function addSymbols(words){
	let wordsArr = words.split(" ");
	let finalWords = [];
	wordsArr.forEach((word)=>{
		let splitWordArr = word.split("");
		finalWords.push(splitWordArr.join(" - "));
	});
	return finalWords.join("_ _ _");
};

userWord.addEventListener("input", ()=>{
	let userText = userWord.value;
	userText = addSymbols(userText);
	msg.textContent = userText;
});