document.addEventListener("DOMContentLoaded", function() {
    const currentDateElement = document.getElementById("current-date");
    const moonPhaseElement = document.getElementById("moon-phase");
    const moonImageElement = document.getElementById("moon-image");
    const NASA_API_KEY = 'SXceqBQtBcJO1CF9BCQ2HfutF7kdQMlRTBKCAb61';
    const NASA_API_URL = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`;

    function getCurrentDate() {
        const now = new Date();
        return now.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    async function fetchMoonPhase() {
        const response = await fetch(NASA_API_URL);
        const data = await response.json();
        return data;
    }

    async function updateMoonPhase() {
        try {
            const moonData = await fetchMoonPhase();
            const moonPhase = moonData.title;
            const moonImageUrl = moonData.url;
            const moonExplanation = moonData.explanation;

            moonPhaseElement.textContent = moonPhase;
            moonImageElement.innerHTML = `<img src="${moonImageUrl}" alt="${moonPhase}"><p>${moonExplanation}</p>`;
        } catch (error) {
            moonPhaseElement.textContent = "Error fetching moon phase data.";
        }
    }

    function updateCurrentDate() {
        const currentDate = getCurrentDate();
        currentDateElement.textContent = `Current Date: ${currentDate}`;
    }

    updateCurrentDate();
    updateMoonPhase();
});
