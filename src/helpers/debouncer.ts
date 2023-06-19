export function debounce(func: any) {
  let timeoutId: any;
  return function (...args: any) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, 500);
  };
}
