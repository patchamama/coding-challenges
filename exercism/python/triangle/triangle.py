def check(sides):
    a = sides[0]
    b = sides[1]
    c = sides[2]
    if a == 0 or b == 0 or c == 0:
        return False
    if a + b <= c or b + c <= a or a + c <= b:
        return False
    return True

def equilateral(sides):
    a = sides[0]
    b = sides[1]
    c = sides[2]
    if not check(sides):
        return False
        
    if a == b == c:
        return True
    else:
        return False


def isosceles(sides):
    a = sides[0]
    b = sides[1]
    c = sides[2]
    if not check(sides):
        return False

    if a == b or a == c or b == c:
        return True
    else:
        return False


def scalene(sides):
    a = sides[0]
    b = sides[1]
    c = sides[2]
    if not check(sides):
        return False
    if a != b and a != c and b != c:
        return True
    else:
        return False
