# TypeCheat
A JS script to cheat on certain online typing tests.

## Supported sites
As of now, the sites that work are:
- [10FastFingers](https://10fastfingers.com/) (Normal tests and [custom text](https://10fastfingers.com/text-practice/new))
<!-- - [Ratatype](https://www.ratatype.com/) -->
<!-- ^^^WIP^^^ -->
- [TypingTestNow](https://typingtestnow.com/)

I am planning to add support for more.

## Use
### Copy+Paste
0. Ensure that you're on a supported site
1. Copy [the contents of `typecheat.min.js`](https://raw.githubusercontent.com/MysteryBlokHed/TypeCheat/master/typecheat.min.js).
2. Open the developer console (Ctrl+Shift+J on Chrome/Chromium Edge)
3. Paste the code and press enter
4. The text box will start to autofill the next words as they appear. Simply press `space` as fast as you would like, and the next words will appear as you do.
### Tampermonkey
If you have the [Tampermonkey Extension](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) installed:

1. Click on the tampermonkey icon next to the search bar.
2. Select "Create a new script..."
3. Copy [the contents of `typecheat.tampermonkey.js`](https://raw.githubusercontent.com/MysteryBlokHed/TypeCheat/master/typecheat.tampermonkey.js).
4. Replace the default contents with the contents of `typecheat.tampermonkey.js` (Ctrl+A, then Ctrl+V).
5. Save the script (Ctrl+S).

The script will now autorun on supported sites.

**Note: On 10FastFingers, if you end up going through the entire text, the words will continue to autofill. If you continue to press space it can cause you to get incorrect words marked, despite the text being over.**


## Anticheat systems
### 10FastFingers
If you go above a certain WPM (not sure exactly what), you will be forced to take an anticheat test to confirm your result. The timer starts as soon as you press the "Start" button, and is a randomly generated image instead of a normal text-based system.