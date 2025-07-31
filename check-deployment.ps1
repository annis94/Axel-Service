# Script de diagnostic pour vérifier la configuration de déploiement GitHub Pages
Write-Host "Diagnostic de la configuration de déploiement GitHub Pages" -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan

# Fonction pour vérifier un fichier
function Test-File {
    param([string]$FilePath, [string]$Description)
    if (Test-Path $FilePath) {
        Write-Host "✅ $Description existe" -ForegroundColor Green
        return $true
    } else {
        Write-Host "❌ $Description manquant" -ForegroundColor Red
        return $false
    }
}

# Fonction pour vérifier une configuration
function Test-Config {
    param([string]$FilePath, [string]$Pattern, [string]$Description)
    if (Test-Path $FilePath) {
        $content = Get-Content $FilePath -Raw
        if ($content -match $Pattern) {
            Write-Host "✅ $Description trouvé dans $FilePath" -ForegroundColor Green
            return $true
        } else {
            Write-Host "❌ $Description manquant dans $FilePath" -ForegroundColor Red
            return $false
        }
    } else {
        Write-Host "❌ Fichier $FilePath non trouvé" -ForegroundColor Red
        return $false
    }
}

Write-Host "`nVérification des fichiers de configuration..." -ForegroundColor Blue

# Vérifier les fichiers essentiels
Test-File "package.json" "package.json"
Test-File "vite.config.ts" "vite.config.ts"
Test-File "index.html" "index.html"
Test-File "public/.nojekyll" "public/.nojekyll"

Write-Host "`nVérification de la configuration Vite..." -ForegroundColor Blue
Test-Config "vite.config.ts" "base: '/Axel-Service/'" "Base path configuré"

Write-Host "`nVérification des scripts package.json..." -ForegroundColor Blue
Test-Config "package.json" '"deploy": "gh-pages -d dist"' "Script de déploiement"
Test-Config "package.json" '"build": "vite build"' "Script de build"
Test-Config "package.json" '"homepage": "https://annis94.github.io/Axel-Service"' "Homepage configurée"

Write-Host "`nVérification du build..." -ForegroundColor Blue
if (Test-Path "dist") {
    Write-Host "✅ Dossier dist existe" -ForegroundColor Green
    
    if (Test-Path "dist/index.html") {
        Write-Host "✅ dist/index.html existe" -ForegroundColor Green
        
        # Vérifier le contenu du fichier index.html
        $indexContent = Get-Content "dist/index.html" -Raw
        if ($indexContent -match 'src="/Axel-Service/assets/') {
            Write-Host "✅ dist/index.html contient les bonnes références d'assets" -ForegroundColor Green
        } else {
            Write-Host "❌ dist/index.html ne contient pas les bonnes références d'assets" -ForegroundColor Red
            Write-Host "Contenu actuel:" -ForegroundColor Yellow
            $indexContent | Select-String -Pattern "(src=|href=)" | ForEach-Object { Write-Host "   $_" -ForegroundColor Gray }
        }
    } else {
        Write-Host "❌ dist/index.html manquant" -ForegroundColor Red
    }
    
    if (Test-Path "dist/assets") {
        Write-Host "✅ Dossier dist/assets existe" -ForegroundColor Green
        Write-Host "Fichiers dans dist/assets:" -ForegroundColor Blue
        Get-ChildItem "dist/assets" | ForEach-Object { Write-Host "   $($_.Name)" -ForegroundColor Gray }
    } else {
        Write-Host "❌ Dossier dist/assets manquant" -ForegroundColor Red
    }
    
    if (Test-Path "dist/.nojekyll") {
        Write-Host "✅ dist/.nojekyll existe" -ForegroundColor Green
    } else {
        Write-Host "❌ dist/.nojekyll manquant" -ForegroundColor Red
    }
} else {
    Write-Host "❌ Dossier dist manquant - Lancez 'npm run build' d'abord" -ForegroundColor Red
}

Write-Host "`nVérification de la configuration GitHub Pages..." -ForegroundColor Blue
Write-Host "Vérifiez manuellement sur GitHub:" -ForegroundColor Yellow
Write-Host "   1. Allez sur: https://github.com/annis94/Axel-Service/settings/pages" -ForegroundColor White
Write-Host "   2. Source doit être: 'Deploy from a branch'" -ForegroundColor White
Write-Host "   3. Branch doit être: 'gh-pages'" -ForegroundColor White
Write-Host "   4. Folder doit être: '/(root)'" -ForegroundColor White

Write-Host "`nActions recommandées:" -ForegroundColor Blue
if (-not (Test-Path "dist")) {
    Write-Host "   1. Lancez: npm run build" -ForegroundColor Yellow
}
Write-Host "   2. Lancez: npm run deploy" -ForegroundColor Yellow
Write-Host "   3. Attendez 2-3 minutes" -ForegroundColor Yellow
Write-Host "   4. Testez: https://annis94.github.io/Axel-Service/" -ForegroundColor Yellow
Write-Host "   5. Hard refresh: Ctrl+Shift+R" -ForegroundColor Yellow

Write-Host "`nRésumé du diagnostic:" -ForegroundColor Blue
Write-Host "==========================================================" -ForegroundColor Cyan 