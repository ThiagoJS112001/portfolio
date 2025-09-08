# Servidor HTTP Simples - PowerShell
# Para testar portfolio.html no celular

$port = 8000
$ip = "192.168.1.8"

Write-Host "===============================================" -ForegroundColor Cyan
Write-Host "  SERVIDOR HTTP PARA TESTE NO CELULAR" -ForegroundColor Yellow
Write-Host "===============================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "🌐 URLs para acessar:" -ForegroundColor Green
Write-Host "   Computador: http://localhost:$port" -ForegroundColor White
Write-Host "   Celular:    http://$ip`:$port" -ForegroundColor Yellow
Write-Host ""
Write-Host "📱 No celular, abra o navegador e digite:" -ForegroundColor Green
Write-Host "   http://$ip`:$port/portfolio.html" -ForegroundColor Yellow
Write-Host ""
Write-Host "⚠️  IMPORTANTE:" -ForegroundColor Red
Write-Host "   - Computador e celular devem estar no mesmo Wi-Fi" -ForegroundColor White
Write-Host "   - Se não funcionar, desabilite temporariamente o firewall" -ForegroundColor White
Write-Host ""
Write-Host "🛑 Para parar o servidor: Ctrl+C" -ForegroundColor Red
Write-Host "===============================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "🚀 Iniciando servidor..." -ForegroundColor Green

# Função para servir arquivos
Add-Type -AssemblyName System.Web

# Criar listener HTTP
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://*:$port/")

try {
    $listener.Start()
    Write-Host "✅ Servidor ativo na porta $port" -ForegroundColor Green
    Write-Host ""
    
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        $path = $request.Url.LocalPath
        if ($path -eq "/") { $path = "/portfolio.html" }
        
        $filePath = Join-Path (Get-Location) $path.TrimStart('/')
        
        Write-Host "📄 Requisição: $($request.HttpMethod) $path" -ForegroundColor Cyan
        
        if (Test-Path $filePath -PathType Leaf) {
            # Determinar Content-Type
            $extension = [System.IO.Path]::GetExtension($filePath).ToLower()
            $contentType = switch ($extension) {
                ".html" { "text/html; charset=utf-8" }
                ".css"  { "text/css" }
                ".js"   { "application/javascript" }
                ".svg"  { "image/svg+xml" }
                ".png"  { "image/png" }
                ".jpg"  { "image/jpeg" }
                ".jpeg" { "image/jpeg" }
                default { "application/octet-stream" }
            }
            
            $response.ContentType = $contentType
            $response.StatusCode = 200
            
            $content = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentLength64 = $content.Length
            $response.OutputStream.Write($content, 0, $content.Length)
            
            Write-Host "✅ Arquivo servido: $filePath" -ForegroundColor Green
        } else {
            $response.StatusCode = 404
            $errorMsg = "Arquivo não encontrado: $path"
            $errorBytes = [System.Text.Encoding]::UTF8.GetBytes($errorMsg)
            $response.ContentLength64 = $errorBytes.Length
            $response.OutputStream.Write($errorBytes, 0, $errorBytes.Length)
            
            Write-Host "❌ Arquivo não encontrado: $filePath" -ForegroundColor Red
        }
        
        $response.Close()
    }
} catch {
    Write-Host "❌ Erro: $($_.Exception.Message)" -ForegroundColor Red
} finally {
    if ($listener.IsListening) {
        $listener.Stop()
        Write-Host "🛑 Servidor parado" -ForegroundColor Yellow
    }
}
