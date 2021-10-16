function pad(i) {
  return `0${i}`.slice(-2);
}

export default function formatTime(timeInMiliseconds) {
  const date = new Date(1000 * Math.round(timeInMiliseconds / 1000));
  const minutes = pad(date.getUTCMinutes());
  const seconds = pad(date.getUTCSeconds());

  return `00:${minutes}:${seconds} ${minutes === '00' ? 'segundos' : 'minutos'}`;
}
