f = ""
for number in range(1, 101): f += ("FizzBuzz" if number % 5 == 0 and number % 3 == 0 else "Buzz" if number % 5 == 0 else "Fizz" if number % 3 == 0 else str(number)) + "\n"

with open("FizzBuzz.txt", "w") as fizz_file:
    fizz_file.write(f)
with open("FizzBuzz.txt", "r") as fizz_file:
    i = 0
    string = fizz_file.read()
    for x in string.split("\n"):
        i+=1
        if x == "Fizz":
            print(str(i) + " kan delas med 3")
        if x == "Buzz":
            print(str(i) + " kan delas med 5")
        else:
            print(str(i) + " Kan inte delas med någonting! altså inte 5 eller 3.")
        
    

