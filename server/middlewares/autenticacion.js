const jwt = require('jsonwebtoken');

// Verificar Token
let verificaToken = (req, res, next) => {
	// Leo el header del API, llamado token
	let token = req.get('token');

	jwt.verify(token, process.env.SEED, (err, decoded) => {
		if(err){
			return res.status(401).json({
				ok: false,
				err: {
					message: 'Token no válido'
				}
			})
		}

		req.usuario = decoded.usuario;
	});

	console.log(token);

	next();
};

// Verificar AdminRole
let verificaAdminRole = (req, res, next) => {
	let usuario = req.usuario;

	if(usuario.role === 'ADMIN_ROLE'){
		next();
	} else {
		return res.json({
			ok: false,
			message: 'El usuario no es administrador'
		});
	}
}


module.exports = {
	verificaToken,
	verificaAdminRole
}