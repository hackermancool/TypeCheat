# TypeCheat
A JS script to cheat on certain online typing tests.

## Supported sites
As of now, the sites that work are:
- [10FastFingers](https://10fastfingers.com/) (Normal tests and [custom text](https://10fastfingers.com/text-practice/new))
<!-- - [Ratatype](https://www.ratatype.com/) -->
<!-- ^^^WIP^^^ -->
- [TypingTestNow](https://typingtestnow.com/)

I am planning to add support for more.

## Anticheat systems
### 10FastFingers
If you go above a certain WPM (not sure exactly what), you will be forced to take an anticheat test to confirm your result. The timer starts as soon as you press the "Start" button, and is a randomly generated image instead of a normal text-based system.  
**If you use TypeCheat too much/at all on 10FastFingers, you will get banned from the site. I recommend using an alternate account for this, as if it's banned you can just delete and re-create it.**

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
3. Copy [the contents of `typecheat-tampermonkey.min.js`](https://raw.githubusercontent.com/MysteryBlokHed/TypeCheat/master/typecheat-tampermonkey.min.js).
4. Replace the default contents with the contents of `typecheat-tampermonkey.min.js` (While inside the editor, Ctrl+A then Ctrl+V).
5. Save the script (Ctrl+S).

Once you're on a supported site, you should see an button labelled "Start TypeCheat". Click this only when the words have finished loading. The text of the button will appear green when it is active.

On **10FastFingers**, the button appears just **below** the text field.  
On **TypingTestNow**, it appears at the **top of the page** just under the navbar.

**Note: On 10FastFingers, if you end up going through the entire text, the words will continue to autofill. If you continue to press space it can cause you to get incorrect words marked, despite the text being over.**