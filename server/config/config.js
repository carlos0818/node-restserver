// Puerto
process.env.PORT = process.env.PORT || 3000;

// Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// Vencimiento del token
// 60 seg * 60 min * 24 hrs * 30 días
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// Seed de autenticación
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

// Base de datos
let urlDB;
if(process.env.NODE_ENV === 'dev'){
	urlDB = 'mongodb://localhost:27017/cafe';
} else {
	urlDB = 'URL DE SERVIDOR DE PRODUCCION';
}
process.env.URLDB = urlDB;

// Google Client ID
process.env.CLIENT_ID = process.env.CLIENT_ID || '1058926209574-0kcqht6pbcmkirpf6bi26pfn05deevef.apps.googleusercontent.com';