l1 : list[int] = [1,2,3,4,5,6]
print(l1)

from typing import Dict
data : Dict[str,str] = {
    'name':'Safdar Ali Shah',
    'fname':'Ghafoor Shah',
    'weight':'80kg',
    'Education':'Ms Data Science',
    'Location':'Italy',
}

#display(data)

for k in data:
    print(f'* {k} of the candidate  = {data[k]}')

l1 : list[set[int]] = list({1,2,3,4,5,6,7,8,9,10})
for i in l1:
    print(f'* is {i}')

name = input("Pkease kenter kyour kname = ")
print(type(name))
print(f'Welcome {name}')