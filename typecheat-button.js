/*
 *    TypeCheat - A JS script to cheat on certain online typing tests
 *    Copyright (C) 2020  hackermancool
 *
 *    This program is free software: you can redistribute it and/or modify
 *    it under the terms of the GNU General Public License as published by
 *    the Free Software Foundation, either version 3 of the License, or
 *    (at your option) any later version.
 *
 *    This program is distributed in the hope that it will be useful,
 *    but WITHOUT ANY WARRANTY; without even the implied warranty of
 *    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *    GNU General Public License for more details.
 *
 *    You should have received a copy of the GNU General Public License
 *    along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
/*
 *    TypeCheat - A JS script to cheat on certain online typing tests
 *    Copyright (C) 2020  Adam Thompson-Sharpe
 *
 *    This program is free software: you can redistribute it and/or modify
 *    it under the terms of the GNU General Public License as published by
 *    the Free Software Foundation, either version 3 of the License, or
 *    (at your option) any later version.
 *
 *    This program is distributed in the hope that it will be useful,
 *    but WITHOUT ANY WARRANTY; without even the implied warranty of
 *    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *    GNU General Public License for more details.
 *
 *    You should have received a copy of the GNU General Public License
 *    along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
// Check current site
let url = window.location.href.split("/")[2];
let site = -1;
let altMode = 0;
if(url == "10fastfingers.com" || url == "www.10fastfingers.com") {
    console.log("~~~~~~~~~~~~~~~~~~~\n TypeCheat Active! \nSite: 10FastFingers\n~~~~~~~~~~~~~~~~~~~");
    site = 0;
    if(window.location.href.split("/")[3] == "text") altMode = 1;
} else if(url == "play.typeracer.com" || url == "typeracer.com") {
    console.log("~~~~~~~~~~~~~~~~~~~\n TypeCheat Active! \nSite:     TypeRacer\n~~~~~~~~~~~~~~~~~~~");
    site = 1;
} else if(url == "typingtestnow.com" || url == "www.typingtestnow.com") {
    console.log("~~~~~~~~~~~~~~~~~~~\n TypeCheat Active! \nSite: TypingTestNow\n~~~~~~~~~~~~~~~~~~~");
    site = 2;
} else if(url == "www.bing.com" || url == "bing.com") {
    console.log("~~~~~~~~~~~~~~~~~~~\n TypeCheat Active! \nSite:     Bing Test\n~~~~~~~~~~~~~~~~~~~");
    site = 3;
}

// Variables
let tText, tWords, cWord, tField;

// 10FastFingers Cheat Code
function tenFastCheat() {
    // Generate wordlist
    tText = document.getElementById("row1");
    tWords = [];
    for(let i = 0; i < tText.children.length; i++) {
        tWords.push(tText.children[i].innerText);
    }
    // Interval
    cWord = 0;
    // Different method for different modes
    tField = null;
    if(altMode == 0) {
        tField = document.getElementById("inputfield");
    } else if(altMode == 1) {
        tField = document.getElementById("text_typed");
    }
    tField.addEventListener("keyup", function(e) {
        if(e.keyCode == 32) {
            tField.value = tWords[cWord];
            cWord++;
        }
    });
    // Change button colour to show that it has activated
    document.getElementById("ads-speedtest-view-container").children[0].style = "width: 100%; color: #0F0;";
}

// TypeRacer Cheat Code
function typeRacerCheat() {
    // Generate wordlist
    tText = document.querySelector("#gwt-uid-15 > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(1) > td");
    tWords = tText.innerText.split(" ");
    // Interval
    cWord = 0;
    tField = document.querySelector("#gwt-uid-15 > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td > input");
    tField.addEventListener("keydown", function(e) {
        if(e.keyCode == 32) {
            tField.value = tWords[cWord];
            cWord++;
        }
    });
    // Change button colour to show that it has activated
    document.getElementsByClassName("navigation")[0].children[0].style = "width: 100%; color: #0F0;";
}

// TypingTestNow Cheat Code
function typingTestNowCheat() {
    // Generate wordlist
    tText = document.getElementsByClassName("sample-text")[0];
    tWords = [];
    for(let i = 0; i < tText.children.length; i++) {
        for(let j = 0; j < tText.children[i].children.length; j++) {
            words.push(tText.children[i].children[j].innerText);
        }
    }
    // Interval
    cWord = 0;
    tField = document.getElementById("practice-input");
    tField.addEventListener("keydown", function(e) {
        if(e.keyCode == 32) {
            tField.value = tWords[cWord];
            cWord++;
        }
    });
    // Change button colour to show that it has activated
    document.getElementsByClassName("row")[0].children[0].style = "width: 100%; color: #0F0;";
}

// Bing Typing Test Cheat Code
function bingCheat() {
    // Generate wordlist
    tText = document.getElementById("edu_promptText");
    tWords = [];
    let workWord = "";
    for(let i = 0; i < tText.children.length; i++) {
        for(let j = 0; j < tText.children[i].children.length; j++) {
            if(tText.children[i].children[j].className == "space") {
                tWords.push(workWord);
                workWord = "";
            } else {
                workWord += tText.children[i].children[j].innerText;
            }
        }
    }
    // Interval
    cWord = 0;
    tField = document.getElementById("edu_inputText");
    tField.addEventListener("keydown", function(e) {
        if(e.keyCode == 32) {
            tField.value += tWords[cWord];
            cWord++;
        }
    });
    // Change button colour to show that it has activated
    document.getElementById("edu_answer").children[0].children[0].getElementsByTagName("button")[0].style = "color: #0F0;";
}

// Cheat
switch(site) {
    // 10FastFingers (Normal)
    case 0:
        // Create cheat button
        document.getElementById("ads-speedtest-view-container").innerHTML = "<button style=\"width: 100%;\" onclick=\"javascript:tenFastCheat();\">Start TypeCheat</button>";
        break;
    // TypeRacer
    case 1:
        // Create cheat button
        document.getElementsByClassName("navigation")[0].innerHTML = "<button style=\"width: 100%;\" onclick=\"javascript:typeRacerCheat();\">Start TypeCheat</button>" + document.getElementsByClassName("navigation")[0].innerHTML;
        break;
    // TypingTestNow
    case 2:
        // Create cheat button
        document.getElementsByClassName("row")[0].innerHTML = "<button style=\"width: 100%;\" onclick=\"javascript:typingTestNowCheat();\">Start TypeCheat</button>"
        break;
    // Bing Typing Test
    case 3:
        // Create cheat button
        document.getElementById("edu_answer").children[0].children[0].innerHTML += "<button onclick=\"javascript:bingCheat();\">Start TypeCheat</button>"; 
        break;
}