def steps(number):
    if number <= 0:
        raise ValueError("Only positive integers are allowed")

    result = number
    steps = 0
    while result > 1:
        steps += 1
        if result % 2 == 0:
            result = int(result / 2)
        else:
            result = 3 * result + 1
    
    return steps
