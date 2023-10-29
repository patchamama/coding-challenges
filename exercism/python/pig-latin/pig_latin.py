def soundex(text):
    result = text

    if text[0] in 'aeiou' or (text[0] in 'xy' and text[1] not in 'aeiouy'):
        result += 'ay'
    elif text[1:3] == 'qu':
        tmp1 = text[3:]
        tmp2 = text[:3]
        result = tmp1 + tmp2 + 'ay' 
    elif text[1] == 'y' and len(text.strip()) == 2:
        result = 'y' + text[0] + 'ay'
    elif text[:3] == 'thr' or text[:3] == 'sch':
        result = text[3:] + text[:3] + 'ay'
    else:
        if text[:2] == 'ch' or text[:2] == 'st' or text[:2] == 'qu' or text[:2] == 'th' or text[:2] == 'rh':
            result = text[2:] + text[:2] + 'ay'
        else:
            result = text[1:] + text[0] + 'ay'

    
    return result

def translate(text):
    words = text.split()
    result = ''
    if len(words) == 1:
        result = soundex(text)
    else:
        tmp_result = ''
        for word in words:
            tmp_result = soundex(word)
            result += ' ' + tmp_result
    
    return result.strip()
