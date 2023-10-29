def square(number):

    if 1 <= number <= 64:
        count = 0
        for a in range(number):
            c = a + 1
            if c == 1:
                count = 1
            elif c == 2:
                count = 2
            else:
                count = count * 2
        return count
    else:
        # when the square value is not in the acceptable range        
        raise ValueError("square must be between 1 and 64")


def total():
    count = 0
    for a in range(64):
        count += square(a+1)
    return count
