const express = require('express');
const router = express.Router();
const mysqlConnection = require('../connection/connection');
const jwt = require('jsonwebtoken');

// Obtener todos los usuarios
router.get('/', (req, res) => {
  mysqlConnection.query('SELECT * FROM users', (err, rows) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
    res.json(rows);
  });
});

// Autenticación de usuarios
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  mysqlConnection.query(
    'SELECT * FROM users WHERE email = ? AND password = ?',
    [email, password],
    (err, rows) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: 'Error al autenticar el usuario' });
      }
      if (rows.length > 0) {
        const user = rows[0];
        const token = jwt.sign({ id: user.id, email: user.email }, 'secret-token', {
          expiresIn: '1h',
        });
        res.json({ token });
      } else {
        res.status(400).send('Usuario o clave inválida.');
      }
    }
  );
});

// Agregar un nuevo usuario
router.post('/', verifyToken, (req, res) => {
  const { email, password, role } = req.body;
  const query = 'INSERT INTO users (email, password, role) VALUES (?, ?, ?)';
  mysqlConnection.query(query, [email, password, role], (err) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: 'Error al agregar el usuario' });
    }
    res.json({ message: 'Usuario agregado correctamente' });
  });
});

// Actualizar un usuario existente
router.put('/:id', (req, res) => {
  const userId = req.params.id;
  const { email, password, role } = req.body;
  const query = 'UPDATE users SET email = ?, password = ?, role = ? WHERE id = ?';
  mysqlConnection.query(query, [email, password, role, userId], (err) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
    res.json({ message: 'Usuario actualizado correctamente' });
  });
});

// Eliminar un usuario
router.delete('/:id', (req, res) => {
  const userId = req.params.id;
  const query = 'DELETE FROM users WHERE id = ?';
  mysqlConnection.query(query, [userId], (err) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
    res.json({ message: 'Usuario eliminado correctamente' });
  });
});

// Función de verificación de token para proteger rutas
function verifyToken(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json('No autorizado');
  }

  try {
    const content = jwt.verify(token, 'secret-token');
    req.data = content;
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json('Token inválido');
  }
}

module.exports = router;