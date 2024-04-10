# Import necessary libraries
import sys
import pandas as pd
import difflib
import json

# Load the dataset
data = pd.read_csv("./Medicine_Details (1).csv")  
data.drop(columns=['TEXT','Image URL','Excellent Review %','Average Review %','Poor Review %'], inplace=True)
data = data.head(500)

# Define words to remove from medicine names
words_to_remove = ['Tablet', 'Shampoo', 'Injection','Syrup','Kidney','Dry','gelatin']

# Function to remove specified words from text
def remove_words(text):
    for word in words_to_remove:
        text = text.replace(word, '')
    return text

# Remove words from medicine names
data['Medicine_name'] = data['Medicine_name'].apply(remove_words)

# Tokenize the medicine names
tokenized_medicine_names = data['Medicine_name'].apply(lambda x: x.split())

# Function to calculate similarity score between two strings
def calculate_similarity(str1, str2):
    return difflib.SequenceMatcher(None, str1, str2).ratio()

# Function to extract medicine information from the input text
def extract_medicine_info(input_text):
    # Tokenize input text
    tokens = input_text.split()

    # Initialize variables to store max similarity score and corresponding medicine info
    max_similarity_score = 0
    medicine_info = {}

    # Iterate over each medicine name
    for index, row in data.iterrows():
        # Calculate similarity score between each tokenized medicine name and input text
        for token in tokens:
            similarity_score = max(calculate_similarity(token, med_token) for med_token in row['Medicine_name'].split())
            # Update max similarity score and medicine info if a higher score is found
            if similarity_score > max_similarity_score:
                max_similarity_score = similarity_score
                medicine_info['medicineName'] = row['Medicine_name']
                medicine_info['composition'] = row['Composition']
                medicine_info['uses'] = row['Uses']
                medicine_info['side_effects'] = row['Side_effects']
                medicine_info['manufacturer'] = row['Manufacturer']
            
    return medicine_info

if __name__ == "__main__":
    # Check if there are command-line arguments passed
    if len(sys.argv) > 1:
        # Extract text from command-line argument
        extracted_text = sys.argv[1]
        # Call function to extract medicine information
        result = extract_medicine_info(extracted_text)
        # Print the extracted medicine info as JSON
        print(json.dumps(result))
