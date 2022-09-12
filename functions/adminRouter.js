
const containsPrefix = message => message[0] == '+';

const ValidCommands = {
    'createChannel': () => {},
    'createCategory': () => {},
};

const adminRouter = message => {
    message = message.content;
    if (containsPrefix(message) == false) return false;

    message = message.substring(1);
    const commandContent = message.split(' ');
    const command = ValidCommands[commandContent[0]];

    let messageProcessed = false;
    
    if (command != null) {
        messageProcessed = command(commandContent.slice(1));
    };

    return messageProcessed;
}

