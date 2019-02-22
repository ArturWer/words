"use strict"
let userWord = document.getElementById('userWord');
let main = document.querySelector("main");
let msg = document.querySelector(".msg");

userWord.addEventListener("keypress", ()=>{
	let userText = userWord.value;
	msg.textContent = userText;
	console.log(userText);
});