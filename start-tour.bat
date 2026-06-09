@echo off
setlocal

cd /d "%~dp0"

where py >nul 2>nul
if %errorlevel%==0 (
    start "SPUS Virtual Tour Server" py -m http.server 8080
) else (
    where python >nul 2>nul
    if %errorlevel%==0 (
        start "SPUS Virtual Tour Server" python -m http.server 8080
    ) else (
        echo Python was not found on this computer.
        echo Install Python or open the project with VS Code Live Server.
        pause
        exit /b 1
    )
)

timeout /t 2 /nobreak >nul
start "" http://localhost:8080/

