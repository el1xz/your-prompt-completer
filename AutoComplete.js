// ==UserScript==
// @name         Prompt Autocomplete
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Autocomplete prompts in text fields based on predefined keywords
// @author       el1xz
// @match        *://*/*
// @grant        none
// @homepageURL  https://github.com/el1xz/your-prompt-completer
// @icon         https://cdn-icons-png.flaticon.com/512/15861/15861364.png
// ==/UserScript==

(function() {
    'use strict';

    // Define the prompts with their corresponding keywords
    const prompts = {
        '_neg': "(deformed iris, deformed pupils), text, worst quality, low quality, jpeg artifacts, ugly, duplicate, morbid, mutilated, (extra fingers), (mutated hands), poorly drawn hands, poorly drawn face, mutation, deformed, blurry, dehydrated, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, (fused fingers), (too many fingers), long neck, camera",
        '_pos': "high quality, masterpiece, best quality, extremely detailed, beautiful, cinematic lighting, sharp focus, stunning composition, dynamic pose, vibrant colors, highly detailed, photorealistic",
        //'_example': "this is a example prompt. don't forget the comma",
        //'_пример': "это пример промпта. не забывайте про запятую после кавычек",
    };

    // Event listener for keydown event on input and textarea elements
    document.addEventListener('keydown', function(event) {
        // Check if the pressed key is TAB
        if (event.key === 'Tab') {
            const activeElement = document.activeElement;
            // Check if the active element is an input or textarea
            if (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA') {
                const cursorPosition = activeElement.selectionStart;
                const textBeforeCursor = activeElement.value.substring(0, cursorPosition);
                const textAfterCursor = activeElement.value.substring(cursorPosition);
                const words = textBeforeCursor.split(' ');
                const lastWord = words[words.length - 1];

                // Check each keyword in prompts to see if the last word matches
                for (const [key, value] of Object.entries(prompts)) {
                    if (lastWord.startsWith(key)) {
                        event.preventDefault();
                        const newText = textBeforeCursor.slice(0, -lastWord.length) + value + textAfterCursor;
                        activeElement.value = newText;
                        activeElement.selectionStart = activeElement.selectionEnd = cursorPosition - lastWord.length + value.length;
                        break;
                    }
                }
            }
        }
    });
})();
