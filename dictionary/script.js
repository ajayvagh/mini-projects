const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
    let inpword = document.getElementById("inp-word").value;

    fetch(`${url}${inpword}`)
        .then((response) => response.json())
        .then((data) => {
            const wordData = data[0];
            const meaning = wordData.meanings[0];
            const definition = meaning.definitions[0];
            const phonetics = wordData.phonetics.find(p => p.audio); // Find first phonetic with audio

            result.innerHTML = `
                <div class="word">
                    <h3>${wordData.word}</h3>
                    <button onclick="playSound()">
                        <i class="fas fa-volume-up"></i>
                    </button>
                </div>
                <div class="details">
                    <p><strong>Part of Speech:</strong> ${meaning.partOfSpeech}</p>
                    <p><strong>Phonetic:</strong> ${wordData.phonetic || "N/A"}</p>
                </div>
                <p class="word-meaning"><strong>Meaning:</strong> ${definition.definition}</p>
                <p class="word-example"><strong>Example:</strong> ${definition.example || "No example available"}</p>
            `;

            if (phonetics && phonetics.audio) {
                sound.setAttribute("src", phonetics.audio);
            } else {
                sound.setAttribute("src", ""); // Clear previous audio if unavailable
            }
        })
        .catch(() => {
            result.innerHTML = `<h3 style="color: red;">Couldn't find the word</h3>`;
        });
});

function playSound() {
    if (sound.src) {
        sound.play();
    } else {
        alert("Audio not available for this word.");
    }
}
