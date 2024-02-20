from typing import List
import pandas as pd

def createDataframe(student_data: List[List[int]]) -> pd.DataFrame:
    return pd.DataFrame(student_data)

l1 = [
  [1, 15],
  [2, 11],
  [3, 11],
  [4, 20]
]
print(f'Data Frame is Here = {createDataframe(l1)}')
df = pd.DataFrame(l1)
df.axes(0)
    