// Récupérer les données de la phase de la lune depuis l'API de la NASA
async function getMoonPhase() {
  const response = await fetch('https://api.nasa.gov/planetary/earth/assets?lon=2.35&lat=48.86&dim=0.15&api_key=YOUR_API_KEY');
  const data = await response.json();
  const date = new Date(data.date);
  const illumination = data.cloud_score * 100;
  const phase = Math.floor(((date.getDate() - 1) % 29) / 7);
  return { illumination, phase, date };
}

// Mettre à jour la phase de la lune, l'image associée et la date
async function updateMoonPhase() {
  const { phase, date } = await getMoonPhase();
  const moon = document.getElementById('moon');
  const phaseText = document.getElementById('phase');
  const dateText = document.getElementById('date');

  switch (phase) {
    case 0:
      moon.src = 'new-moon.png';
      phaseText.textContent = 'Nouvelle Lune';
      break;
    case 1:
      moon.src = 'waxing-crescent.png';
      phaseText.textContent = 'Lune Croissante';
      break;
    case 2:
      moon.src = 'first-quarter.png';
      phaseText.textContent = 'Premier Quartier';
      break;
    case 3:
      moon.src = 'waxing-gibbous.png';
      phaseText.textContent = 'Lune Gibbeuse Croissante';
      break;
    case 4:
      moon.src = 'full-moon.png';
      phaseText.textContent = 'Pleine Lune';
      break;
    case 5:
      moon.src = 'waning-gibbous.png';
      phaseText.textContent = 'Lune Gibbeuse Décroissante';
      break;
    case 6:
      moon.src = 'last-quarter.png';
      phaseText.textContent = 'Dernier Quartier';
      break;
    case 7:
      moon.src = 'waning-crescent.png';
      phaseText.textContent = 'Lune Décroissante';
      break;
  }

  dateText.textContent = `Date : ${date.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`;
}

// Appeler la fonction de mise à jour de la phase de la lune toutes les heures
setInterval(updateMoonPhase, 3600000);

// Appeler la fonction de mise à jour de la phase de la lune immédiatement au chargement de la page
updateMoonPhase();
