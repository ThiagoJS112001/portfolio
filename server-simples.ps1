# Servidor HTTP Simples para Teste no Celular
# Execute: powershell -ExecutionPolicy Bypass -File server-simples.ps1

$port = 8000
$ip = "192.168.1.8"

Write-Host "=============================================="
Write-Host "  SERVIDOR HTTP PARA TESTE NO CELULAR"
Write-Host "=============================================="
Write-Host ""
Write-Host "URLs para acessar:"
Write-Host "   Computador: http://localhost:$port"
Write-Host "   Celular:    http://$ip`:$port"
Write-Host ""
Write-Host "No celular, digite:"
Write-Host "   http://$ip`:$port/portfolio.html"
Write-Host ""
Write-Host "IMPORTANTE:"
Write-Host "   - Computador e celular no mesmo Wi-Fi"
Write-Host "   - Para parar: Ctrl+C"
Write-Host ""
Write-Host "Iniciando servidor..."

Add-Type -AssemblyName System.Web

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://*:$port/")

try {
    $listener.Start()
    Write-Host "Servidor ativo na porta $port"
    Write-Host ""
    
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        $path = $request.Url.LocalPath
        if ($path -eq "/") { $path = "/portfolio.html" }
        
        $filePath = Join-Path (Get-Location) $path.TrimStart('/')
        
        Write-Host "Requisicao: $($request.HttpMethod) $path"
        
        if (Test-Path $filePath -PathType Leaf) {
            $extension = [System.IO.Path]::GetExtension($filePath).ToLower()
            $contentType = switch ($extension) {
                ".html" { "text/html; charset=utf-8" }
                ".css"  { "text/css" }
                ".js"   { "application/javascript" }
                ".svg"  { "image/svg+xml" }
                ".png"  { "image/png" }
                ".jpg"  { "image/jpeg" }
                default { "application/octet-stream" }
            }
            
            $response.ContentType = $contentType
            $response.StatusCode = 200
            
            $content = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentLength64 = $content.Length
            $response.OutputStream.Write($content, 0, $content.Length)
            
            Write-Host "Arquivo servido: $filePath"
        } else {
            $response.StatusCode = 404
            $errorMsg = "Arquivo nao encontrado: $path"
            $errorBytes = [System.Text.Encoding]::UTF8.GetBytes($errorMsg)
            $response.ContentLength64 = $errorBytes.Length
            $response.OutputStream.Write($errorBytes, 0, $errorBytes.Length)
            
            Write-Host "Arquivo nao encontrado: $filePath"
        }
        
        $response.Close()
    }
} catch {
    Write-Host "Erro: $($_.Exception.Message)"
} finally {
    if ($listener.IsListening) {
        $listener.Stop()
        Write-Host "Servidor parado"
    }
}
