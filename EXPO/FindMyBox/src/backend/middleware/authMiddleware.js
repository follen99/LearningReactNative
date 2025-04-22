import jwt from 'jsonwebtoken';

/**
 * Middleware used to authenticate requests.
 * Applied to one or more routes to protect access to specific resources.
 * 
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 * @param {Function} next - The next middleware function.
 * @returns {void}
 */
export const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Ottieni il token dall'header
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verifica il token
    req.user = decoded; // Aggiungi i dati dell'utente alla richiesta
    
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};