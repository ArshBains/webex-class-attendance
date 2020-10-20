from PIL import Image
import pytesseract
import re
import os
from pathlib import Path
from datetime import date

pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract'

image_dir = Path("dump")     # Folder where participants images are stored
last_roll = 64      # Roll number of last student

students = [*range(1, last_roll + 1, 1)]
present = []

for image in os.listdir(image_dir):
    print(image)
    data = pytesseract.image_to_string(Image.open(image_dir.joinpath(image)))
    # print(data)
    UE = re.findall(r"\d{2}\b", data)
    # print(UE)
    y = []
    for i in UE:
        y.append(int(i))
    print(y)
    print("----------------------------------------------------------------------------------------------------------")
    present += y

print("")
present = list(dict.fromkeys(present))
present.sort()
present = [x for x in present if 0 < x <= last_roll]

for student in present:
    students.remove(student)


print("**************************************************************************************************************")
print(date.today().strftime("%B %d, %Y"))
print("P:" + str(len(present)), "; A: " + str(len(students)))
print("PRESENT:", present)
print("")
print("ABSENT:", students)
print("")
print("**************************************************************************************************************")

f = open(date.today().strftime("%B %d, %Y")+".txt", "w")
f.write("P:" + str(len(present)) + "; A: " + str(len(students)))
f.write("\nPRESENT:" + str(present))
f.write("\nABSENT:" + str(students))
f.close()
