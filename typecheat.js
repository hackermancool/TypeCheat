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
if(url == "10fastfingers.com" || url == "www.10fastfingers.com") {
    console.log("~~~~~~~~~~~~~~~~~~~\n TypeCheat Active! \nSite: 10FastFingers\n~~~~~~~~~~~~~~~~~~~");
    site = 0;
// ---------- WIP ----------
// } else if(url == "www.ratatype.com"|| url == "ratatype.com") {
//     console.log("~~~~~~~~~~~~~~~~~~~\n TypeCheat Active! \nSite:      Ratatype\n~~~~~~~~~~~~~~~~~~~");
//     site = 1;
} else if(url == "typingtestnow.com" || url == "www.typingtestnow.com") {
    console.log("~~~~~~~~~~~~~~~~~~~\n TypeCheat Active! \nSite: TypingTestNow\n~~~~~~~~~~~~~~~~~~~");
    site = 2;
}

// Cheat
switch(site) {
    // 10FastFingers
    case 0:
        // Generate wordlist
        let tText = document.getElementById("row1");
        let tWords = [];
        for(let i = 0; i < tText.children.length; i++) {
            tWords.push(tText.children[i].innerText);
        }
        // Interval
        let cWord = 0;
        // Make sure to constantly update the field
        setInterval(function() {
            if(document.getElementById("inputfield").value == "") {
                document.getElementById("inputfield").value = tWords[cWord];
                cWord++;
            }
        }, 10);
        break;
    // ---------- WIP ----------
    // Ratatype
    /*
     * case 1:
     *     // Generate wordlist
     *     let text = document.getElementsByClassName("mainTxt")[0];
     *     let field = document.getElementsByClassName("divTextarea")[0].children[0];
     *     let words = [];
     *     for(let i = 0; i < text.children.length; i++) {
     *         if(text.children[i].innerText != " ") {
     *             words.push(text.children[i].innerText);
     *         }
     *     }
     *     let i = 1;
     *     field.value = words[0];
     *     // Make sure to constantly update the field
     *     setInterval(function() {
     *         if(field.value.slice(-1) == " " || !field.value.includes(words[i])) {
     *             field.value += words[i];
     *             // Make sure that the word was actually added to the text field
     *             if(field.value.includes(words[i])) i++;
     *             console.log(field.value.includes(words[i]));
     *         }
     *     }, 10);
     *      break;
     */
    // TypingTestNow
    case 2:
        // Generate wordlist
        let text = document.getElementsByClassName("sample-text")[0];
        let words = [];
        for(let i = 0; i < text.children.length; i++) {
            for(let j = 0; j < text.children[i].children.length; j++) {
                words.push(text.children[i].children[j].innerText);
            }
        }
        // Interval
        let i = 0;
        // Make sure to constantly update the field
        let field = document.getElementById("practice-input");
        setInterval(function() {
            if(field.value == " " || field.value == "") {
                field.value = words[i];
                i++;
            }
        }), 10;
        break;
}