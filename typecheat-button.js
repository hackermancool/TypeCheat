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
}

// 10FastFingers Cheat Code
function tenFastCheat() {
    // Generate wordlist
    let tText = document.getElementById("row1");
    let tWords = [];
    for(let i = 0; i < tText.children.length; i++) {
        tWords.push(tText.children[i].innerText);
    }
    // Interval
    let cWord = 0;
    // Different method for different modes
    let tField = null;
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
    let textElement = document.querySelector("#gwt-uid-15 > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(1) > td");
    let wordlist = textElement.innerText.split(" ");
    // Interval
    let crWord = 0;
    let textField = document.querySelector("#gwt-uid-15 > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td > input");
    textField.addEventListener("keydown", function(e) {
        if(e.keyCode == 32) {
            textField.value = wordlist[crWord];
            crWord++;
        }
    });
    // Change button colour to show that it has activated
    document.getElementsByClassName("navigation")[0].children[0].style = "width: 100%; color: #0F0;";
}

// TypingTestNow Cheat Code
function typingTestNowCheat() {
    // Generate wordlist
    let text = document.getElementsByClassName("sample-text")[0];
    let words = [];
    for(let i = 0; i < text.children.length; i++) {
        for(let j = 0; j < text.children[i].children.length; j++) {
            words.push(text.children[i].children[j].innerText);
        }
    }
    // Interval
    var i = 0;
    let field = document.getElementById("practice-input");
    field.addEventListener("keydown", function(e) {
        if(e.keyCode == 32) {
            field.value = words[i];
            i++;
        }
    });
    // Change button colour to show that it has activated
    document.getElementsByClassName("row")[0].children[0].style = "width: 100%; color: #0F0;";
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
}