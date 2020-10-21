# webex/zoom-class-attendance 

## `Method I`
Use participants panel image(s) to take attendance of students
### Installation
```
pip install pytesseract
```
tesseract-ocr (64-bit) : https://digi.bib.uni-mannheim.de/tesseract/tesseract-ocr-w64-setup-v5.0.0-alpha.20200328.exe

PicPick (for scrolling screenshot) : https://picpick.app/en/download

### Configure
Set the variables in `script-ocr.py`
| Variable | Line | For |
| ------ | ------ | -----|
| pytesseract.pytesseract.tesseract_cmd | 8 | full path to your tesseract executable |
| image_dir | 10 | webex participants images folder |
| last_roll | 11 | roll no. of last student |

## `Method II`
This only works for Webex currently.
- Join webex meeting in browser 
- Copy and run `script-webex-browser.js` in the console



| Variable | Line | For |
| ------ | ------ | -----|
| last_roll | 1 | roll no. of last student |
