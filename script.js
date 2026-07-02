<<<<<<< HEAD
const input = document.getElementById("inputText");
const output = document.getElementById("outputText");
const source = document.getElementById("sourceLang");
const target = document.getElementById("targetLang");

const translateBtn = document.getElementById("translateBtn");
const swapBtn = document.getElementById("swapBtn");

// Translate function
async function translateText() {
    const text = input.value.trim();

    if (!text) {
        alert("Please enter text");
        return;
    }

    output.value = "Translating...";

    try {
        const res = await fetch(
            `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${source.value}|${target.value}`
        );

        const data = await res.json();

        if (data?.responseData?.translatedText) {
            output.value = data.responseData.translatedText;
        } else {
            output.value = "Translation not available";
        }

    } catch (err) {
        console.log(err);
        output.value = "Error in translation";
    }
}

// Swap languages
swapBtn.addEventListener("click", () => {
    [source.value, target.value] = [target.value, source.value];
});

// Button click
=======
const input = document.getElementById("inputText");
const output = document.getElementById("outputText");
const source = document.getElementById("sourceLang");
const target = document.getElementById("targetLang");

const translateBtn = document.getElementById("translateBtn");
const swapBtn = document.getElementById("swapBtn");

// Translate function
async function translateText() {
    const text = input.value.trim();

    if (!text) {
        alert("Please enter text");
        return;
    }

    output.value = "Translating...";

    try {
        const res = await fetch(
            `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${source.value}|${target.value}`
        );

        const data = await res.json();

        if (data?.responseData?.translatedText) {
            output.value = data.responseData.translatedText;
        } else {
            output.value = "Translation not available";
        }

    } catch (err) {
        console.log(err);
        output.value = "Error in translation";
    }
}

// Swap languages
swapBtn.addEventListener("click", () => {
    [source.value, target.value] = [target.value, source.value];
});

// Button click
>>>>>>> d020915 (Completed Task 1: Language Translator)
translateBtn.addEventListener("click", translateText);