from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer

# Create a new chatbot instance
chatbot = ChatBot(
    'MySimpleBot',
    storage_adapter='chatterbot.storage.SQLStorageAdapter',
    database_uri='sqlite:///database.sqlite3'
)

# Train the chatbot with English language data
trainer = ChatterBotCorpusTrainer(chatbot)
trainer.train('chatterbot.corpus.english')

print("Chatbot is ready! Type 'quit' to exit.\n")

# Simple chat loop
while True:
    try:
        user_input = input('You: ')
        if user_input.lower() == 'quit':
            print('Goodbye!')
            break
        
        response = chatbot.get_response(user_input)
        print(f'Bot: {response}')
    except (KeyboardInterrupt, EOFError):
        print('\nGoodbye!')
        break