export const getSecondsString = (seconds: number) => {
  if (seconds > 4) {
    return 'секунд';
  }
  if (seconds > 1) {
    return 'секунды';
  }
  return 'секунду';
};
