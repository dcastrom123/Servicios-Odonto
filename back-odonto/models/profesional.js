const mongoose = require('mongoose');

const profesionalSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  especialidades: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Especialidad',
    },
  ],
  // Otros campos específicos del profesional
});

const Profesional = mongoose.model('Profesional', profesionalSchema);

module.exports = Profesional;
