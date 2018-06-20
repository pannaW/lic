# Jak bezpiecznie zdobyć Mont Blanc - interaktywny przewodnik początkującego alpinisty
english version: How to safely climb Mont Blanc - a beginner's guide to mountaineering

## Autor
Wiktoria Łucarz, pod kierunkiem dr. Piotra Śliwińskiego

## Instalacja na serwerze

Rozpakuj pliki na serwerze
```
unzip lic.zip
```

Stwórz folder public_html, jeśli nie istnieje
```
mkdir public_html
```

Stwórz dowiązanie symboliczne do folderu dist w folderze public_html
```
cd public_html
ln -s ../lic/dist dist
```
Projekt będzie dostępny pod adresem www.[nazwa hosta].pl/[opcjonalna nazwa użytkownika]/dist

Alternatywne rozwiązanie na wypadek problemów z dowiązaniami symbolicznymi na serwerze:

Przenieś folder dist z folderu lic do katalogu domowego
```
mv ./lic/dist .
```

Zmień nazwę na public_html/
```
mv ./dist ./public_html
```

Projekt będzie dostępny pod adresem www.[nazwa hosta].pl/[opcjonalna nazwa użytkownika]/

