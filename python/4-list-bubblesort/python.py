lst = [2, 2, 6, 5, 2, 1, 3, 6, 8]
print(lst)
bad = True
while bad:
    bad=False
    i = 0
    for e in lst:
        if i+1 <= len(lst)-1:
            if e > lst[i+1]:
                bad=True
                y = lst[i+1]
                print( "i+1 = innan " + str(lst[i+1]) )
                lst[i+1]=e
                print("i+1 = efter " +str(lst[i+1]))
                print("i = innan " + str(lst[i]))
                lst[i] = y
                print("i = efter " + str(lst[i]))
            i+=1
    print(lst)
