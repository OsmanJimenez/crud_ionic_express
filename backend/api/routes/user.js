const express = require('express');
const router = express.Router();

const mysqlConnection = require('../connection/connection')
const jwt = require('jsonwebtoken')

router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM users', (err, rows, fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err)
        }
    })
});

router.post('/login', (req, res) => {
const {email, password} = req.body;
mysqlConnection.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, rows, fields) => {
    if(!err){
        if(rows.length > 0){
            const user = rows[0];
            const token = jwt.sign({id: user.id, email: user.email}, 'secret-token', {expiresIn: '1h'})
            res.json({token: token});
        }else{
            res.status(400).send('Usuario o clave invalida.')
        }
    }else{
        console.log(err)
    }
}
)
})

router.post('/', verifyToken, (req, res) => {
  const { email, password, role } = req.body;
  const query = 'INSERT INTO users (email, password, role) VALUES (?, ?, ?)';
  mysqlConnection.query(query, [email, password, role], (err, result) => {
    if (!err) {
      res.json({ message: 'Usuario agregado correctamente' });
    } else {
      console.log(err);
      res.status(500).json({ error: 'Error al agregar el usuario' });
    }
  });
});

router.put('/:id', (req, res) => {
  const userId = req.params.id;
  const { email, password, role } = req.body;
  const query = 'UPDATE users SET email = ?, password = ?, role = ? WHERE id = ?';
  mysqlConnection.query(query, [email, password, role, userId], (err, result) => {
    if (!err) {
      res.json({ message: 'Usuario actualizado correctamente' });
    } else {
      console.log(err);
      res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
  });
});

router.delete('/:id', (req, res) => {
  const userId = req.params.id;
  const query = 'DELETE FROM users WHERE id = ?';
  mysqlConnection.query(query, [userId], (err, result) => {
    if (!err) {
      res.json({ message: 'Usuario eliminado correctamente' });
    } else {
      console.log(err);
      res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
  });
});

function verifyToken(req,res, next){
  if(!req.headers.authorization) return res.status(401).json('No autorizado');

  const token = req.headers.authorization.substr(7);
  if(token!==''){
    const content = jwt.verify(token,'secret-token');
    req.data = content;
    next();
  }else{
    res.status(401).json('Token vacio');
  }

}

module.exports = router;