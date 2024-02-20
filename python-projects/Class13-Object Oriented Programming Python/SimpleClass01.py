class SimpleClass():
    variable : int = 1
    def __init__(self) -> None:
        print(f' Variable {SimpleClass.variable} ---{id(SimpleClass.variable)}')
        self.variable += 1
        pass
    

obj : SimpleClass = SimpleClass()
obj1 : SimpleClass = SimpleClass()
print(f'the Current value of SimpleClass.Variable = {SimpleClass.variable}')