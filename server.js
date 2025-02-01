const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Fichier contenant les données (remplace si nécessaire)
const middlewares = jsonServer.defaults();

// Configurer CORS pour exposer le header X-Total-Count
server.use(cors({
  exposedHeaders: ['X-Total-Count'],
}));

server.use(middlewares);
server.use(router);

// Démarrer le serveur sur le port 5000
server.listen(5000, () => {
  console.log('JSON Server is running on http://localhost:5000');
});
