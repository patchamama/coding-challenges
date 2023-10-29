
def aliquot_sum(number):
    sum = 0
    for a in range(number-1):
        if number % (a+1) == 0:
            sum += a+1
    return sum
    
def classify(number):
    """ A perfect number equals the sum of its positive divisors.

    :param number: int a positive integer
    :return: str the classification of the input integer
    """

    if number <= 0:
        # if a number to be classified is less than 1.
        raise ValueError("Classification is only possible for positive integers.")

    aliquot_val = aliquot_sum(number)
    if aliquot_val == number:
        return 'perfect'
    elif aliquot_val > number:
        return 'abundant'
    elif aliquot_val > number:
        return 'deficient'
    
    return 'deficient'
