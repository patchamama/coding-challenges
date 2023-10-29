import string

def is_pangram(sentence):
    sentence = sentence.lower()

    alphabet = list(string.ascii_lowercase)
    
    for letter in sentence:
        if letter in alphabet:
            alphabet.remove(letter)
    
    return not alphabet
