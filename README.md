# firebase-redirect-kissflow
This simple web app activates a Kissflow user first and then redirects him to Kissflow home page.

Firebase services:
- Hosting
- Authentication

## Disable browser security to allow CORS:
`CorsOut.sh` is a shell script that opens a new browser window (Chrome in this case) with disabled security.

`C:\Program Files\Google\Chrome\Application\chrome.exe" --disable-web-security --user-data-dir="C:\Users\username\Desktop\chromeFile`

Find where `chrome.exe` is located and create a new folder where browser files will be saved. Write this last path in `--user-data-dir` option.
