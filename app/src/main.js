define(['./MessageGenerator', './MessageWriter'], (MessageGenerator, MessageWriter) => {
  const generator = new MessageGenerator();
  const writer = new MessageWriter();
  writer.writeMessage(generator.generateMessage());
});
