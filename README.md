# NAVA-homework

A web applikáció fotókról kapott adatok statisztikai megjelenítésére szolgál.

##Felépítés

A weblap CRUD műveletek elvégzésére alkalmas egy REST API segítségével. A fronted és a backend külön mappában található. A frontednhez React-ot es Typescriptet használtam. A frontend létrehozást is React végzi. A backend Java (Spring Boot) alapú az adatbáziskezelést pedig JPA végzi. Az sqldump fájlt tartalmazza a projekt. 

##Jellemzők
-Képek adatainak megjelenítése táblázatban
-Új képek hozzáadása az adatbázishoz
-Meglévő képek szerkeztése
-Képek adatainak megjelenítése külön route-on
-Megtekintés számláló

##Telepítési útmutató(Ubuntu)


Node telepítő:

```bash
sudo apt install nodejs
```

Npm telepítő:

```bash
sudo apt install npm
```

Mysqldump exportálása:

```bash
mysql -u username -p -h localhost DATA-BASE-NAME < data.sql
```
