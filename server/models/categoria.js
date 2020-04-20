const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

mongoose.set('useFindAndModify', false);

let Schema = mongoose.Schema;

let categoriaSchema = new Schema({
	descripcion: {
		type: String,
		unique: true,
		required: [true, 'La descripción de la categoria es necesaria']
	},
	usuario: {
		type: Schema.Types.ObjectId,
		ref: 'Usuario'
	}
});


module.exports = mongoose.model('Categoria', categoriaSchema);