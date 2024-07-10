// Calculer la phase de la lune en fonction de la date actuelle
const now = new Date();
const day = now.getDate();
const phase = Math.floor(((day - 1) % 29) / 7);

// Mettre à jour la phase de la lune et le texte associé
const moon = document.getElementById('moon');
const phaseText = document.getElementById('phase');

switch (phase) {
  case 0:
    moon.className = 'new';
    phaseText.textContent = 'Nouvelle Lune';
    break;
  case 1:
    moon.className = 'waxing-crescent';
    phaseText.textContent = 'Lune Croissante';
    break;
  case 2:
    moon.className = 'first-quarter';
    phaseText.textContent = 'Premier Quartier';
    break;
  case 3:
    moon.className = 'waxing-gibbous';
    phaseText.textContent = 'Lune Gibbeuse Croissante';
    break;
  case 4:
    moon.className = 'full';
    phaseText.textContent = 'Pleine Lune';
    break;
  case 5:
    moon.className = 'waning-gibbous';
    phaseText.textContent = 'Lune Gibbeuse Décroissante';
    break;
  case 6:
    moon.className = 'last-quarter';
    phaseText.textContent = 'Dernier Quartier';
    break;
  case 7:
    moon.className = 'waning-crescent';
    phaseText.textContent = 'Lune Décroissante';
    break;
}
