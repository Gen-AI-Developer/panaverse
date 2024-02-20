class SimpleClass():
    variable : int = 1
    def __init__(self) -> None:
        print(f' Variable {SimpleClass.variable} ---{id(SimpleClass.variable)}')
        pass
    

obj0 : SimpleClass = SimpleClass()
obj1 : SimpleClass = SimpleClass()
obj1.variable = 23445
print(f' Obj0 value is = {obj0.variable}')
