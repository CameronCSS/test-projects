import os

# Clear terminal
def clr():
    os.system("cls")


questions = [
    {
        "prompt": "What is the capital of France?",
        "options": ["A. Paris", "B. London", "C. Berlin", "D. Madrid"],
        "answer": "A"
    },

    {
        "prompt": "Which language is primarily spoken in Brazil?",
        "options": ["A. Spanish", "B. Portuguese", "C. English", "D. French"],
        "answer": "B"
    },

    {
        "prompt": "What is the smallest prime number?",
        "options": ["A. 1", "B. 2", "C. 3", "D. 5"],
        "answer": "B"
    },

    {
        "prompt": "Who wrote 'To kill a Mockingbird'?",
        "options": ["A. Ernest Hemingway", "B. Mark Twain", "C. J.K. Rowling", "D. Harper Lee"],
        "answer": "D"
    },

    {
        "prompt": "Which element has the chemical symbol 'Au'?",
        "options": ["A. Silver", "B. Gold", "C. Iron", "D. Lead"],
        "answer": "B"
    },
    {
        "prompt": "What is the largest planet in our Solar System?",
        "options": ["A. Earth", "B. Saturn", "C. Jupiter", "D. Neptune"],
        "answer": "C"
    },
    {
        "prompt": "In which year did the Titanic sink?",
        "options": ["A. 1905", "B. 1912", "C. 1923", "D. 1931"],
        "answer": "B"
    },
    {
        "prompt": "Which artist painted the Mona Lisa?",
        "options": ["A. Vincent van Gogh", "B. Pablo Picasso", "C. Leonardo da Vinci", "D. Claude Monet"],
        "answer": "C"
    },
    {
        "prompt": "What is the hardest natural substance on Earth?",
        "options": ["A. Gold", "B. Diamond", "C. Platinum", "D. Emerald"],
        "answer": "B"
    },
    {
        "prompt": "Which planet is known as the Red Planet?",
        "options": ["A. Mars", "B. Venus", "C. Mercury", "D. Uranus"],
        "answer": "A"
    },
    {
        "prompt": "Who wrote the play 'Romeo and Juliet'?",
        "options": ["A. William Shakespeare", "B. George Bernard Shaw", "C. Charles Dickens", "D. Jane Austen"],
        "answer": "A"
    },
    {
        "prompt": "What is the smallest country in the world by land area?",
        "options": ["A. Monaco", "B. Vatican City", "C. San Marino", "D. Liechtenstein"],
        "answer": "B"
    },
    {
        "prompt": "Which famous scientist developed the theory of relativity?",
        "options": ["A. Isaac Newton", "B. Albert Einstein", "C. Galileo Galilei", "D. Nikola Tesla"],
        "answer": "B"
    },
    {
        "prompt": "What is the capital of Australia?",
        "options": ["A. Sydney", "B. Melbourne", "C. Canberra", "D. Brisbane"],
        "answer": "C"
    },
    {
        "prompt": "Which sea is the largest in the world?",
        "options": ["A. Mediterranean Sea", "B. Red Sea", "C. Caspian Sea", "D. Caribbean Sea"],
        "answer": "C"
    },
]


def run_quiz(questions):
    score = 0
    possible = len(questions)
    clr()
    for q in questions:
        print(q["prompt"], "\n")
        for o in q["options"]:
            print(o)
            print("")
        ans = input("Enter your answer: ").upper()
        print("")
        if ans == q["answer"]:
            clr()
            print("RESULTS:")
            print("Correct Answer! Good JOB!!")
            print("")
            print("")
            print("")
            score += 1
        else:
            clr()
            print("RESULTS:")
            print("No. That was wrong. The correct answer was", q["answer"])
            print("")
            print("")
            continue

    print("You got", score, "right. Out of", possible, "questions")
    print("")

run_quiz(questions)