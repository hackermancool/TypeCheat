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
    case 'livechatinc.com':
        console.log('~~~~~~~~~~~~~~~~~~~\n TypeCheat Active! \nSite:  LiveChat Inc\n~~~~~~~~~~~~~~~~~~~');
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

// 10FastFingers
function tenFastCheat() {
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
    // Change button colour to show that it has activated
    document.getElementById('ads-speedtest-view-container').children[0].style = 'width: 100%; color: #0F0;';
}

// TypeRacer
function typeRacerCheat() {
    // Generate wordlist
    tText = document.querySelector('#gwt-uid-15 > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(1) > td');
    tWords = tText.innerText.split(' ');
    // Cheat
    cWord = 0;
    tField = document.querySelector('#gwt-uid-15 > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td > input');
    tField.addEventListener('keydown', function(e) {
        if(e.keyCode == 32) {
            tField.value = tWords[cWord];
            cWord++;
        }
    });
    // Change button colour to show that it has activated
    document.getElementsByClassName('navigation')[0].children[0].style = 'width: 100%; color: #0F0;';
}

// TypingTestNow
function typingTestNowCheat() {
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
    // Change button colour to show that it has activated
    document.getElementsByClassName('row')[0].children[0].style = 'width: 100%; color: #0F0;';
}

// Bing Typing Test
function bingCheat() {
    // Generate wordlist
    tText = document.getElementById('edu_promptText');
    tWords = [];
    let workWord = '';
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
    // Change button colour to show that it has activated
    document.getElementById('edu_answer').children[0].children[0].getElementsByTagName('button')[0].style = 'color: #0F0;';
}
// LiveChat Inc
function liveChatCheat() {
    // Generate wordlist
    tText = document.getElementsByClassName('test-prompt')[0];
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
    // Change button colour to show that it has activated
    document.getElementsByClassName('metrics')[1].children[1].style = 'color: #0F0;';
}

// QuickTypingTest
function quickTypingCheat() {
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
    // Change button colour to show that it has activated
    document.getElementById('navbarResponsive').children[0].style = 'width: 100%; color: #0F0;';
}

// AOEU Typing Speed Test
function aoeuCheat() {
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
    // Change button colour to show that it has activated
    document.getElementById('score').lastChild.style = 'color: #0F0;';
}

// India Typing
function indiaTypingCheat() {
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
    // Change button colour to show that it has activated
    document.getElementsByClassName('t3-sidebar')[0].children[0].style = 'color: #0F0;';
}

// Cheat
switch(site) {
    // 10FastFingers (Normal)
    case 0:
        // Create cheat button
        document.getElementById('ads-speedtest-view-container').innerHTML = '<button style=\'width: 100%;\' onclick=\'javascript:tenFastCheat();\'>Start TypeCheat</button>';
        break;
    // TypeRacer
    case 1:
        // Create cheat button
        document.getElementsByClassName('navigation')[0].innerHTML = '<button style=\'width: 100%;\' onclick=\'javascript:typeRacerCheat();\'>Start TypeCheat</button>' + document.getElementsByClassName('navigation')[0].innerHTML;
        break;
    // TypingTestNow
    case 2:
        // Create cheat button
        document.getElementsByClassName('row')[0].innerHTML = '<button style=\'width: 100%;\' onclick=\'javascript:typingTestNowCheat();\'>Start TypeCheat</button>'
        break;
    // Bing Typing Test
    case 3:
        // Create cheat button
        document.getElementById('edu_answer').children[0].children[0].innerHTML += '<button onclick=\'javascript:bingCheat();\'>Start TypeCheat</button>'; 
        break;
    // LiveCheat Inc
    case 4:
        // Create cheat button
        document.getElementsByClassName('metrics')[1].innerHTML += '<button onclick=\'javascript:liveChatCheat();\'>Start TypeCheat</button>';
        break;
    // QuickTypingTest
    case 5:
        document.getElementById('navbarResponsive').innerHTML = '<button style=\'width: 100%;\' onclick=\'javascript:quickTypingCheat();\'>Start TypeCheat</button>' + document.getElementById('navbarResponsive').innerHTML;
        break;
    // AOEU Typing Speed Test
    case 6:
        document.getElementById('score').innerHTML += '<button onclick=\'javascript:aoeuCheat();\'>Start TypeCheat</button>';
        break;
    // India Typing
    case 7:
        document.getElementsByClassName('t3-sidebar')[0].innerHTML = '<button onclick=\'javascript:indiaTypingCheat();\'>Start TypeCheat</button>';
        break;
}
