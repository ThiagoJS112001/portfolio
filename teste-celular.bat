@echo off
echo ===============================================
echo   GUIA RAPIDO - TESTAR NO CELULAR
echo ===============================================
echo.
echo SEU IP LOCAL: 192.168.1.8
echo.
echo OPCOES PARA TESTAR:
echo.
echo 1. INSTALAR NODE.JS (Recomendado)
echo    - Baixe: https://nodejs.org/
echo    - Instale e reinicie o terminal
echo    - Execute: npm install
echo    - Execute: npm run dev -- --hostname 0.0.0.0
echo    - Acesse no celular: http://192.168.1.8:3000
echo.
echo 2. USAR EXTENSAO LIVE SERVER (VS Code)
echo    - Instale a extensao "Live Server"
echo    - Clique com botao direito em portfolio.html
echo    - Selecione "Open with Live Server"
echo    - Acesse no celular: http://192.168.1.8:5500
echo.
echo 3. USAR PYTHON (se instalado)
echo    - Execute: python -m http.server 8000
echo    - Acesse no celular: http://192.168.1.8:8000
echo.
echo 4. UPLOAD TEMPORARIO
echo    - Envie para: https://surge.sh
echo    - Ou: https://netlify.com
echo    - Teste com a URL gerada
echo.
echo 5. NGROK (Tunel publico)
echo    - Baixe: https://ngrok.com/
echo    - Execute qualquer servidor local
echo    - Execute: ngrok http 8000
echo    - Use a URL publica gerada
echo.
echo VERIFICACAO RAPIDA:
echo - Computador e celular no mesmo Wi-Fi?
echo - Firewall do Windows desabilitado?
echo - IP correto: 192.168.1.8?
echo.
pause
