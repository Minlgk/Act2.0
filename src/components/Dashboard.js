import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Button, Table, TableBody, TableCell, TableHead, TableRow, Box } from '@mui/material';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem('token');

  const fetchUsers = async () => {
    try {
      const res = await axios.get('http://localhost:5000/users', {
        headers: { Authorization: token }
      });
      setUsers(res.data);
    } catch (err) {
      console.error('Error fetching users', err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Se pueden agregar funciones para crear, editar y eliminar usuarios.
  // Aquí se muestra el listado de usuarios.
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Dashboard de Usuarios
      </Typography>
      <Box my={2}>
        <Button variant="contained" color="primary" onClick={fetchUsers}>
          Refrescar Lista
        </Button>
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Dashboard;
