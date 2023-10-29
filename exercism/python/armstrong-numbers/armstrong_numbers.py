def is_armstrong_number(number):
    st_num = str(number)

    val_num = 0
    exp = len(st_num)
    for a in range(len(st_num)):
        dig = int(st_num[a])
        val_num += (dig ** exp)
    return number == val_num
