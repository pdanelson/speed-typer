define(() => {
  class MessageWriter {
    writeMessage(message) {
      document.body.innerText = message;
    }
  }
  return MessageWriter;
});
