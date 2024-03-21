const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Configurar CORS
app.use(cors());

// Configurar middleware para analizar JSON
app.use(express.json());

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/transacciones', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conexión exitosa a MongoDB'))
  .catch(error => console.error('Error al conectar a MongoDB:', error));

const transSchema = new mongoose.Schema({
  dinero: { type: Number, required: true }, // Cambiar de Boolean a Number
  descripcion: { type: String, required: true },
});

const Transaccion = mongoose.model('transacciones', transSchema);

// Configurar ruta para registrar las transacciones
app.post('/transacciones', async (req, res) => {
  const { dinero, descripcion } = req.body;

  try {
    const nuevaTrans = new Transaccion({ dinero, descripcion });
    await nuevaTrans.save();
    res.status(201).json(nuevaTrans);
  } catch (error) {
    console.error('Error al registrar transacción:', error);
    res.status(400).json({ error: error.message });
  }
});

// Obtener todas las transacciones
app.get('/transacciones', async (req, res) => {
  try {
    const transacciones = await Transaccion.find();
    res.json(transacciones);
  } catch (error) {
    console.error('Error al obtener las transacciones:', error);
    res.status(500).json({ error: 'Error al obtener las transacciones' });
  }
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});