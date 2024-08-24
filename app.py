from fuzzywuzzy import process

# List of items to search
items = ["apple", "banana", "cherry"]

# Fuzzy search function
def fuzzy_search(query):
    results = process.extract(query, items)
    return results

# Example usage
if __name__ == "__main__":
    query = input("Enter search query: ")
    results = fuzzy_search(query)
    print("Search results:")
    for item, score in results:
        print(f"{item} (score: {score})")
