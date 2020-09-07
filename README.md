# docker-network-local
Le but de ce test est d'avoir à la fois des serveurs qui tournent en local et d'autres via docker-compose qui sont accessibles sous le même domaine.

> **IMPORTANT**
>
> La config nginx a été faite pour Docker For Mac.<br>
> Le port 3071 de votre machine doit être disponible.

## installation
Exécuter comme suit :
```bash
# Create custom nginx image with proxy pass
cd nginx
docker build -t nginx-custo .
# Create serv2 image
cd ../serv2
docker build -t serv2 .
# Start nginx and serv2 inside docker
cd ..
docker-compose up -d
# Start serv1 locally
cd serv1
npm i
node index.js
```
Ajouter au `/etc/hosts``
```
127.0.0.1   devenv.local
```
Enfin, consulter les urls suivantes
```bash
curl http://www.devenv.local/serv1/ # Réponse : Je suis serv1
curl http://www.devenv.local/serv2/ # Réponse : Je suis serv2
```
Les 2 répondent alors que ser1 tourne ne local et serv2 dans une container

# Mac et Linux
La seule particulartié liée 3à Mac est l'utilisation dans la config nginx de `host.docker.internal`<br>
D'après ce post https://stackoverflow.com/a/24326540, la même variable devrait être dispo sous Linux suivant la version de docker et sinon, il faut remplacer `host.docker.internal` par `127.0.0.1` et démarrer les containers avec l'option `network="host"`