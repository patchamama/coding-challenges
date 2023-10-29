import math

def score(x, y):
    result = 0
    rad = math.sqrt(x**2 + y**2)
    if rad > 5 and rad <= 10:
       result = 1
    elif rad > 1 and rad <= 5:
        result = 5
    elif rad >= 0 and rad <=1:
        result = 10
    
    return result
