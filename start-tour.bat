@echo off
setlocal

cd /d "%~dp0"

where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo Node.js and npm are required for the React version of this project.
    pause
    exit /b 1
)

if not exist node_modules (
    echo Installing dependencies...
    call npm install
    if %errorlevel% neq 0 (
        echo npm install failed.
        pause
        exit /b 1
    )
)

start "SPUS Virtual Tour Dev Server" cmd /c "npm run dev"

timeout /t 5 /nobreak >nul
start "" http://localhost:5173/
