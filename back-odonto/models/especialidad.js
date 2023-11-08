const mongoose = require('mongoose');

const especialidadSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  // Otros campos específicos de la especialidad
});

const Especialidad = mongoose.model('Especialidad', especialidadSchema);

module.exports = Especialidad;
