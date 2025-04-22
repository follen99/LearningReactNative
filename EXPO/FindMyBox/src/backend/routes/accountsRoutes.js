import express from 'express';
import {
    createAccount,
    getAccount,
    updateAccount,
    deleteAccount,
    login,
    echo,
    validateToken
} from '../controllers/accountsController.js';
import { authenticate } from '../middleware/authMiddleware.js';
const router = express.Router();

// il path inizia con /api/accounts/...
router.post('/register', createAccount); // Route specifica
router.post('/login', login); // Route specifica
router.get('/account:id', getAccount); // Route dinamica
router.put('/account:id', updateAccount); // Route dinamica
router.delete('/account:id', deleteAccount); // Route dinamica

router.get('/echo', echo)

router.post('/validate-token', authenticate, validateToken)

export default router;