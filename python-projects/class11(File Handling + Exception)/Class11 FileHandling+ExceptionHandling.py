def my_function(x:int , y:int)-> int: 
    return x/y

print(f'Answer {my_function(1,2)}')



"""import copy

# Original list
original_list = [1, 2, [3, 4], 5]

# Shallow copy
shallow_copy = copy.copy(original_list)

# Deep copy
deep_copy = copy.deepcopy(original_list)

# Modify the original list
original_list[2][0] = 'X'

# Print the copies and the original
print("Original List:", original_list)
print("Shallow Copy:", shallow_copy)
print("Deep Copy:", deep_copy)"""
"""import copy

class Person:
    def __init__(self, name, age, address):
        self.name = name
        self.age = age
        self.address = address

    def __repr__(self):
        return f"Person(name={self.name}, age={self.age}, address={self.address})"

# Original person object
john = Person("John Doe", 30, {"city": "New York", "zip": "10001"})

# Shallow copy
shallow_copy = copy.copy(john)

# Deep copy
deep_copy = copy.deepcopy(john)

# Modify the original person
john.address["city"] = "San Francisco"

# Print the copies and the original
print("Original Person:", john)
print("Shallow Copy:", shallow_copy)
print("Deep Copy:", deep_copy)"""
