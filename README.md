# Idriss Messaoud
### Spécialiste en Automatisation & Pilote de Projets IA

---

```
Architecte de solutions techniques avec une méthodologie de prototypage rapide via le pilotage avancé d'IA. 
Mon expertise se concentre sur la conception et la livraison de solutions robustes, de l'infrastructure jusqu'à l'application finale. 
Vous trouverez ci-dessous une sélection de projets qui illustrent cette démarche.
```
---

## 🚀 Projets Majeurs

### 1. Panneau d'Administration pour Serveur de Jeu AzerothCore
*Un projet full-stack conçu pour simplifier et automatiser la gestion d'un serveur de jeu World of Warcraft pour une petite communauté.*

**![Capture du Panneau d'Admin](URL_IMAGE)**
*(Note : Nous remplacerons ce texte par une vraie image plus tard)*

*   **Description Technique :**
    Application web développée en **Python** avec le micro-framework **Flask**. L'architecture repose sur une **API RESTful** qui communique avec la base de données du jeu (MySQL) via l'ORM **SQLAlchemy**. La gestion des processus serveur (start/stop/restart) est assurée par une interaction directe avec des sessions **`tmux`** via une console web intégrée.

*   **Challenge Technique Notable : Sécurité**
    Pour assurer une création de comptes sécurisée et compatible, j'ai dû analyser et ré-implémenter en Python l'algorithme de hashage de mot de passe **SRP6** utilisé par le client du jeu, garantissant ainsi l'intégrité de l'authentification.

*   **Technologies :** `Python`, `Flask`, `SQLAlchemy`, `MySQL`, `Docker`, `Tmux`, `HTML/CSS`, `JavaScript`

---

### 2. Application de Visualisation de la Qualité de l'Eau
*Une application web de data-visualisation permettant de consulter la qualité de l'eau potable en France à partir d'un simple code postal.*

**![Capture de l'Appli Eau](URL_IMAGE)**

*   **Description Technique :**
    Pilotage d'une IA pour générer une application **Node.js** qui interagit avec l'API gouvernementale **Hub'Eau**. Le cœur du projet réside dans sa logique de traitement de données : parsing de réponses JSON complexes, transformation (code postal vers code INSEE) et mise en place d'une **stratégie de caching avancée** (côté serveur et client) pour optimiser drastiquement les temps de réponse et limiter la charge sur l'API externe.

*   **Technologies :** `Node.js`, `JavaScript`, `API REST`, `Gestion de Cache`, `Déploiement sur serveur Linux`

---

### 3. Suite d'Outils de Gestion Système pour Arch Linux
*Création d'une suite d'outils pour simplifier et automatiser la gestion des profils de performance sur un laptop Arch Linux.*

**![Capture de l'Appli Electron](URL_IMAGE)**

*   **Description Technique :**
    Le projet se compose de deux parties : des scripts **Bash** robustes pour interagir avec des outils de bas niveau (`ryzenadj`, `supergfxctl`) et une **application de bureau multi-plateforme** développée avec **Electron** pour fournir une interface graphique intuitive. J'ai géré l'ensemble du cycle de vie du projet, de la conception de l'UI jusqu'au packaging de l'application en un fichier `.pacman` natif avec gestion des dépendances.

*   **Technologies :** `Electron`, `Node.js`, `Bash Scripting`, `Packaging (electron-builder)`

---

## 🛠️ Infrastructure & Compétences Clés

Mon environnement de travail et de prototypage repose sur un **homelab personnel** que j'ai construit et que j'administre.

*   **Virtualisation :** **Proxmox VE** comme hyperviseur principal pour la gestion de VMs et de containers LXC.
*   **Conteneurisation :** Utilisation intensive de **Docker** pour le déploiement de plus de 20 services.
*   **Réseau & Sécurité :** **Cloudflare Tunnel** pour l'exposition sécurisée des services, **Nginx Proxy Manager** pour le reverse proxying, **Wazuh (SIEM)** pour le monitoring de sécurité.
*   **Stockage :** **TrueNAS** avec un pool **ZFS**, partagé sur le réseau via **NFS**.

---

## 📞 Contact

*   **Email :** `contact@zorko.xyz`
*   **LinkedIn :** [https://linkedin.com/in/zidm](https://linkedin.com/in/zidm)
