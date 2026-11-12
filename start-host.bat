@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo ========================================
echo   NexusAI WorkRoom - Local Test Hosting
echo ========================================
where node >nul 2>nul
if errorlevel 1 (
  echo [ERROR] Chua tim thay Node.js.
  echo Cai Node.js LTS tu https://nodejs.org/ roi chay lai.
  pause
  exit /b 1
)
node server.js
pause
