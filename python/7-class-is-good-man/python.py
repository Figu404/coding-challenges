class Food:
    def __init__(self, ingredients, calories, name):
        self.ingredients = ingredients
        self.calories = calories
        self.name = name
    def eat(self):
        print("nom nom delecusaidf " + self.name)
    def make(self):
        i=0
        for ingridients in self.ingredients:
            print("you begin with laying " + ingridients + " on the floor")
            i+=1
    
    def __str__(self):
        return self.name

mat = Food(["bröd", "korv", "ketchup", "ingen lök"], 100, "korv med bröd")
mat.eat()
mat2 = Food(["ägg", "vetemjöl", "salt", "socker", "nutella"], 1000, "pankakor med nutella")
mat2.eat()
mat2.make()
print(mat)
