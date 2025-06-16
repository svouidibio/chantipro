#!/bin/bash

# Script de correction pour la version Next.js fantôme

echo "🔧 Correction de la version Next.js..."

# Suppression du package-lock.json et node_modules
echo "📦 Suppression des anciennes dépendances..."
rm -rf package-lock.json
rm -rf node_modules

# Réinstallation propre
echo "🚀 Installation des dépendances avec la bonne version..."
npm install

echo "✅ Correction terminée ! La version Next.js 14.2.3 est maintenant installée."
echo "📝 N'oubliez pas de commit le nouveau package-lock.json"