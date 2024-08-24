import os
import random


def clr():
    os.system("cls")

words = [
    "python", "java", "javascript", "svelte", "ruby",
    "flask", "django", "typescript", "nodejs", "angular",
    "groovy", "haskell", "react", "harmony", "elixir",
    "swift", "kotlin", "scala", "perl", "rust"
]


# Randomly choose a word
word = random.choice(words)

# Create a word with all blanks
word_display = ['_' for _ in word]

attempts = 8

guessed_letters = []

clr()
print("Welcome to Programmer Hangman!")


while attempts > 0 and '_' in word_display:
    print("\n" + ' '.join(word_display))
    print("\n")
    guess = input("Guess a letter: ").lower()

    if guess in guessed_letters:
        clr()
        print("You've already guessed", guess)
        continue

    if guess in word:
        guessed_letters.append(guess)
        for index, letter in enumerate(word):
            if letter == guess:
                word_display[index] = guess
    else:
        clr()
        print("\n")
        print(guess, "does not appear in the word")
        guessed_letters.append(guess)
        attempts -= 1

    print("Attempts remaining: ", attempts)

if '_' not in word_display:
    clr()
    print("Congratulations, you guessed the word!")
    print(' '.join(word_display))
    print("\n")
    print("\n")
else:
    clr()
    print(f"Game over! The word was '{' '.join(word)}' ")
    print("\n")
    print("\n")