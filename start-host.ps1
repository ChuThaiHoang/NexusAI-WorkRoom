$ErrorActionPreference = 'Stop'
Set-Location $PSScriptRoot
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
  Write-Host 'Chua tim thay Node.js. Cai Node.js LTS tu https://nodejs.org/' -ForegroundColor Red
  Read-Host 'Nhan Enter de thoat'
  exit 1
}
node .\server.js
