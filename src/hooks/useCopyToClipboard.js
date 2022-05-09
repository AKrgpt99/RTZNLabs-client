function useCopyToClipboard(text, callback) {
  return function () {
    navigator.clipboard.writeText(text);
    callback();
  };
}

export default useCopyToClipboard;
