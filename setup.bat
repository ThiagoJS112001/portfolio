@echo off
echo ====================================
echo  Portfolio React - Setup Script
echo ====================================
echo.

echo Verificando se Node.js esta instalado...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERRO: Node.js nao encontrado!
    echo Por favor, instale o Node.js em: https://nodejs.org/
    echo Escolha a versao LTS e reinicie o terminal apos a instalacao.
    pause
    exit /b 1
)

echo Node.js encontrado!
node --version
npm --version
echo.

echo Instalando dependencias...
npm install

if %errorlevel% neq 0 (
    echo ERRO: Falha na instalacao das dependencias!
    pause
    exit /b 1
)

echo.
echo ====================================
echo  Instalacao concluida com sucesso!
echo ====================================
echo.
echo Para executar o projeto:
echo   npm run dev
echo.
echo Para build de producao:
echo   npm run build
echo.
echo O projeto estara disponivel em:
echo   http://localhost:3000
echo.
pause
