# TypeCheat

A JS script to cheat on certain online typing tests.

## Supported sites

As of now, the sites that work are:

- [10FastFingers](https://10fastfingers.com/) (Normal tests and [custom text](https://10fastfingers.com/text-practice/new))
- [TypeRacer](https://play.typeracer.com/)
- [TypingTestNow](https://typingtestnow.com/)
- [Bing Typing Test](https://www.bing.com/search?q=typing+test)
- [LiveChat Inc](https://www.livechatinc.com/typing-speed-test/)
- [QuickTypingTest](https://www.quicktypingtest.com/)
- [AOEU Typing Speed Test](https://typing-speed-test.aoeu.eu/)
- [India Typing](http://indiatyping.com/index.php/typing-test/english-typing-test)

I am planning to add support for more.

## Anticheat systems

### 10FastFingers

If you go above a certain WPM (not sure exactly what), you will be forced to take an anticheat test to confirm your result. The timer starts as soon as you press the "Start" button, and is a randomly generated image instead of a normal text-based system.  
**If you use TypeCheat too much/at all on 10FastFingers, you will get banned from the site. I recommend using an alternate account for this, as if it's banned you can just delete and re-create it.**

### TypeRacer

If you go moderately fast (>100 wpm), you will get a message asking you to do a test to confirm your score.  
If you go too fast, an alert box will appear saying that they believe you have cheated.

## Test UI Problems

### QuickTypingTest

On QuickTypingTest the prompt text doesn't update when holding space until you let go, but it is updating in the background will still work and count towards your WPM. Letting go of space will cause the UI to jump to the current word.

## Use

### Bookmarks bar

#### Copy-paste into bookmark

1. Copy the contents of [`typecheat.min.js`](https://raw.githubusercontent.com/hackermancool/TypeCheat/master/typecheat.min.js)
2. Go to any website that you have not bookmarked
3. Press the bookmark button and ensure that it is saved to your bookmarks bar
4. Press the "More" button
5. Remove the URL
6. Write "`javascript:`" in the URL box
7. Paste the contents of `typecheat.min.js` after `javascript:` in the URL
8. Save the bookmark
9. Click the "TypeCheat" bookmark on a supported site whenever you want to activate TypeCheat.

#### Drag-and-drop bookmark

1. [Download TypeCheat](https://github.com/hackermancool/TypeCheat/archive/master.zip)
2. Open the `typecheat-bookmark.html` file in whatever browser you'd like.
3. Drag and drop the item labeled "TypeCheat" into your bookmarks bar.
4. Click the bookmark on a supported site, and TypeCheat will activate.

### Copy-paste

0. Ensure that you're on a supported site
1. Copy the contents of [`typecheat.min.js`](https://raw.githubusercontent.com/hackermancool/TypeCheat/master/typecheat.min.js) or [`typecheat-button.min.js`](https://raw.githubusercontent.com/hackermancool/TypeCheat/master/typecheat-button.min.js). The first will instantly run the code, and the other will create a button to be pressed first.
2. Open the developer console (Ctrl+Shift+J on Chrome/Chromium Edge)
3. Paste the code and press enter
4. The text box will start to autofill the next words as they appear. Simply press `space` as fast as you would like, and the next words will appear as you do.

**Note: On TypeRacer, the code must be run after a race has been entered. It will not work on the main page.**

### If you're using `typecheat-button.min.js`

On **10FastFingers**, the button appears just **below** the text field.  
On **TypeRacer**, the button appears **in the navbar** above the "Blog, Forum, Pit Stop, About" buttons.  
On **TypingTestNow**, the button appears at the **top of the page** just under the navbar.  
On **Bing Typing Test**, the button appears in the typing test item **to the right of** the "Typing test" heading.  
On **LiveChat Inc**, the button appears **to the right of the accuracy stat**.  
On **QuickTypingTest**, the button appears at the **top of the page** in the navbar.  
On **AOEU Typing Speed Test**, the button appears **just above the text prompt** to the right of the flags.  
On **India Typing**, the button appears **to the right of the test frame**.

**Note: On 10FastFingers, if you end up going through the entire text, the words will continue to autofill. If you continue to press space it can cause you to get incorrect words marked, despite the text being over.**
