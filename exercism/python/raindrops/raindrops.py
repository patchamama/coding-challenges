def convert(number):
    result = ''
    happen = False
    if number % 3 == 0:
        result += 'Pling'
        happen = True
    if number % 5 == 0:
        result += 'Plang'
        happen = True
    if number % 7 == 0:
        result += 'Plong'
        happen = True
    if not happen:
        result += str(number)
    return result
    
