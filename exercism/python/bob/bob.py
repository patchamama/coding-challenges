def there_is_char(str):
    for st in str:
        if st.isalnum() and st not in [" ,"] and not st.isdigit():
            return True
    return False

def response(hey_bob):
    if len(hey_bob.strip()) == 0:
         return 'Fine. Be that way!'
    
    if 'GOING ON' in hey_bob:
        return 'Calm down, I know what I\'m doing!'
    elif hey_bob.rstrip()[-1] == '?':
        return 'Sure.'
    elif hey_bob == hey_bob.upper() and there_is_char(hey_bob):
        return 'Whoa, chill out!'
    elif hey_bob[-1] == '!' and 'Hi ' not in hey_bob:
        return 'Calm down, I know what I\'m doing!'
    elif  '\t' in hey_bob:
        return 'Fine. Be that way!'
    else:
        return 'Whatever.' 
    
