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
// Check current site
let url = window.location.href.split('/')[2].replace('www.', '');
let site = -1;
let altMode = 0;
switch(url) {
    case '10fastfingers.com':
        console.log('~~~~~~~~~~~~~~~~~~~\n TypeCheat Active! \nSite: 10FastFingers\n~~~~~~~~~~~~~~~~~~~');
        site = 0;
        if(window.location.href.split('/')[3] == 'text') altMode = 1;
        break;
    case 'typeracer.com':
    case 'play.typeracer.com':
        console.log('~~~~~~~~~~~~~~~~~~~\n TypeCheat Active! \nSite:     TypeRacer\n~~~~~~~~~~~~~~~~~~~');
        site = 1;
        break;
    case 'typingtestnow.com':
        console.log('~~~~~~~~~~~~~~~~~~~\n TypeCheat Active! \nSite: TypingTestNow\n~~~~~~~~~~~~~~~~~~~');
        site = 2;
        break;
    case 'bing.com':
        console.log('~~~~~~~~~~~~~~~~~~~\n TypeCheat Active! \nSite:     Bing Test\n~~~~~~~~~~~~~~~~~~~');
        site = 3;
        break;
    case 'livechat.com':
        console.log('~~~~~~~~~~~~~~~~~~~\n TypeCheat Active! \nSite:  LiveChat\n~~~~~~~~~~~~~~~~~~~');
        site = 4;
        break;
    case 'quicktypingtest.com':
        console.log(' ~~~~~~~~~~~~~~~~~~~\n  TypeCheat Active! \nSite: QuickTypingTest\n ~~~~~~~~~~~~~~~~~~~');
        site = 5;
        break;
    case 'typing-speed-test.aoeu.eu':
        console.log('~~~~~~~~~~~~~~~~~~~\n TypeCheat Active! \nSite:     AOEU Test\n~~~~~~~~~~~~~~~~~~~');
        site = 6;
        break;
    case 'indiatyping.com':
        console.log('~~~~~~~~~~~~~~~~~~~\n TypeCheat Active! \nSite:  India Typing\n~~~~~~~~~~~~~~~~~~~');
        site = 7;
        break;
}

// Variables
let tText, tWords, cWord, tField, workWord;

// Cheat
switch(site) {
    // 10FastFingers (Normal)
    case 0:
        // Generate wordlist
        tText = document.getElementById('row1');
        tWords = [];
        for(let i = 0; i < tText.children.length; i++) {
            tWords.push(tText.children[i].innerText);
        }
        // Cheat
        cWord = 0;
        // Different method for different modes
        tField = null;
        if(altMode == 0) {
            tField = document.getElementById('inputfield');
        } else if(altMode == 1) {
            tField = document.getElementById('text_typed');
        }
        tField.addEventListener('keyup', function(e) {
            if(e.keyCode == 32) {
                tField.value = tWords[cWord];
                cWord++;
            }
        });
        break;
    // TypeRacer
    case 1:
        // Generate wordlist
        tText = document.querySelector('.inputPanel').firstChild.firstChild.firstChild.firstChild.firstChild.firstChild;
        tWords = tText.innerText.split(' ');
        // Cheat
        cWord = 0;
        tField = document.querySelector('.txtInput');
        tField.addEventListener('keydown', function(e) {
            if(e.keyCode == 32) {
                tField.value = tWords[cWord];
                cWord++;
            }
        });
        break;
    // TypingTestNow
    case 2:
        // Generate wordlist
        tText = document.getElementsByClassName('sample-text')[0];
        tWords = [];
        for(let i = 0; i < tText.children.length; i++) {
            for(let j = 0; j < tText.children[i].children.length; j++) {
                tWords.push(tText.children[i].children[j].innerText);
            }
        }
        // Cheat
        cWord = 0;
        tField = document.getElementById('practice-input');
        tField.addEventListener('keydown', function(e) {
            if(e.keyCode == 32) {
                tField.value = tWords[cWord];
                cWord++;
            }
        });
        break;
    // Bing Typing Test
    case 3:
        // Generate wordlist
        tText = document.getElementById('edu_promptText');
        tWords = [];
        workWord = '';
        for(let i = 0; i < tText.children.length; i++) {
            for(let j = 0; j < tText.children[i].children.length; j++) {
                if(tText.children[i].children[j].className == 'space') {
                    tWords.push(workWord);
                    workWord = '';
                } else {
                    workWord += tText.children[i].children[j].innerText;
                }
            }
        }
        // Cheat
        cWord = 0;
        tField = document.getElementById('edu_inputText');
        tField.addEventListener('keydown', function(e) {
            if(e.keyCode == 32) {
                tField.value += tWords[cWord];
                cWord++;
            }
        });
        break;
    // LiveChat
    case 4:
        // Generate wordlist
        tText = document.getElementsByClassName('tst-input-wrapper')[1];
        tWords = [];
        for(let i = 0; i < tText.children.length; i++) {
            tWords.push(tText.children[i].innerText);
        }
        // Cheat
        cWord = 0;
        tField = document.getElementById('test-input');
        tField.addEventListener('keydown', function(e) {
            if(e.keyCode == 32) {
                tField.innerText = tWords[cWord];
                cWord++;
                // The wordlist constantly updates
                if(tText.lastChild.innerText != tWords.slice(-1)) {
                    tWords.push(tText.lastChild.innerText);
                }
            }
        });
        break;
    // QuickTypingTest
    case 5:
        // Generate wordlist
        tText = document.querySelector('#text-display');
        tWords = [];
        workWord = '';
        for(let i = 0; i < tText.children.length; i++) {
            workWord = '';
            for(let j = 0; j < tText.children[i].children.length; j++) {
                workWord += tText.children[i].children[j].innerText;
            }
            tWords.push(workWord);
        }
        // Cheat
        cWord = 0;
        tField = document.getElementById('text-input');
        tField.addEventListener('keydown', function(e) {
            if(e.keyCode == 32) {
                tField.value += tWords[cWord];
                cWord++;
            }
        });
        break;
    // AOEU Typing Speed Test
    case 6:
        // Generate wordlist
        tText = document.getElementById('words');
        tWords = [];
        for(let i = 0; i < tText.children.length; i++) {
            tWords.push(tText.children[i].innerText);
        }
        // Cheat
        cWord = 0;
        tField = document.getElementById('input');
        tField.addEventListener('keyup', function(e) {
            if(e.keyCode == 32) {
                tField.value = tWords[cWord];
                cWord++;
            }
        });
        break;
    // India Typing
    case 7:
        // Generate wordlist
        tText = document.getElementById('blockrandom').contentDocument.getElementById('unicodeText');
        tWords = [];
        for(let i = 0; i < tText.children.length; i++) {
            tWords.push(tText.children[i].innerText);
        }
        // Cheat
        cWord = 0;
        tField = document.getElementById('blockrandom').contentDocument.getElementById('toType');
        tField.addEventListener('keyup', function(e) {
            if(e.keyCode == 32) {
                tField.value += tWords[cWord];
                cWord++;
            }
        });
        break;
}
