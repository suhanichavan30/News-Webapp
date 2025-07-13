# News App Using API 

import requests 

query = input("What type of news are you interested in today ? : ")

api = "d016758712874ac6842d94bde00f35f5"

url = f"https://newsapi.org/v2/everything?q={query}&from=2025-06-13&sortBy=publishedAt&apiKey={api}"
print(url)
r = requests.get(url)

data = r.json()
articles = data["articles"]  

for index , article in enumerate(articles):
    print(index + 1)
    print(article["title"])
    print(article["url"])
    print("\n ************ \n")