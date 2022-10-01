import { Router } from "express";
import { getEmployees, getEmployee, createEmployee, updateEmployee, deleteEmployee } from '../controllers/employees.controller.js'
const router = Router()

router.get('/api/employees', getEmployees);
router.get('/api/employee/:id', getEmployee);
router.post('/api/employees', createEmployee);
// router.put('/api/employee/:id', updateEmployee); //para actualizar toda la informacion
router.patch('/api/employee/:id', updateEmployee)
router.delete('/api/employee/:id', deleteEmployee);

export default router