class Greeter:
    def __init__(self,name) -> None:
        self.name = name
    def greet(self):
        print(f'Hello {self.name}')
        
if __name__ == "__main__":
    greeter = Greeter('World')
    greeter.greet()
