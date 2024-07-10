    document.addEventListener("DOMContentLoaded", function() {
    const moonPhaseElement = document.getElementById("moon-phase");
    const moonImageElement = document.getElementById("moon-image");

    async function fetchMoonPhase() {
        const response = await fetch("https://api.farmsense.net/v1/moonphases/?d=2024-07-10");
        const data = await response.json();
        return data[0];
    }

    function getMoonImage(phase) {
        const phaseImages = {
            "New Moon": "https://example.com/new_moon.png",
            "Waxing Crescent": "https://example.com/waxing_crescent.png",
            "First Quarter": "https://example.com/first_quarter.png",
            "Waxing Gibbous": "https://example.com/waxing_gibbous.png",
            "Full Moon": "https://example.com/full_moon.png",
            "Waning Gibbous": "https://example.com/waning_gibbous.png",
            "Last Quarter": "https://example.com/last_quarter.png",
            "Waning Crescent": "https://example.com/waning_crescent.png",
        };
        return phaseImages[phase] || "";
    }

    async function updateMoonPhase() {
        try {
            const moonData = await fetchMoonPhase();
            const moonPhase = moonData.Phase;
            moonPhaseElement.textContent = moonPhase;

            const moonImageUrl = getMoonImage(moonPhase);
            moonImageElement.innerHTML = `<img src="${moonImageUrl}" alt="${moonPhase}">`;
        } catch (error) {
            moonPhaseElement.textContent = "Error fetching moon phase data.";
        }
    }

    updateMoonPhase();
});
