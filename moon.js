// Récupérer les données de la phase de la lune depuis l'API de la NASA
async function getMoonPhase() {
  const response = await fetch('https://api.nasa.gov/planetary/earth/assets?lon=2.35&lat=48.86&dim=0.15&api_key=YOUR_API_KEY');
  const data = await response.json();
  const date = new Date(data.date);
  const illumination = data.cloud_score * 100;
  const phase = Math.floor(((date.getDate() - 1) % 29) / 7);
  return { illumination, phase };
}

// Mettre à jour la phase de la lune et le texte associé
async function updateMoonPhase() {
  const { illumination, phase } = await getMoonPhase();
  const moon = document.getElementById('moon');
  const phaseText = document.getElementById('phase');

  moon.style.backgroundImage = `linear-gradient(to right, #000 ${illumination}%, #fff ${illumination}%)`;

  switch (phase) {
    case 0:
      phaseText.textContent = 'Nouvelle Lune';
      break;
    case 1:
      phaseText.textContent = 'Lune Croissante';
      break;
    case 2:
      phaseText.textContent = 'Premier Quartier';
      break;
    case 3:
      phaseText.textContent = 'Lune Gibbeuse Croissante';
      break;
    case 4:
      phaseText.textContent = 'Pleine Lune';
      break;
    case 5:
      phaseText.textContent = 'Lune Gibbeuse Décroissante';
      break;
    case 6:
      phaseText.textContent = 'Dernier Quartier';
      break;
    case 7:
      phaseText.textContent = 'Lune Décroissante';
      break;
  }
}

// Appeler la fonction de mise à jour de la phase de la lune toutes les heures
setInterval(updateMoonPhase, 3600000);

// Appeler la fonction de mise à jour de la phase de la lune immédiatement au chargement de la page
updateMoonPhase();
