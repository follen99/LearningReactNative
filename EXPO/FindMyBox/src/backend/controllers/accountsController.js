import Account from '../model/AccountModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const echo = (req, res) => {
  res.status(200).json({ message: "Hello from the accounts controller!" });
}

export const createAccount = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const account = new Account({ username, email, password: hashedPassword });
    await account.save();
    res.status(201).json({ message: "Account created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAccount = async (req, res) => {
  try {
    const { id } = req.params;
    const account = await Account.findById(id);
    if (!account) {
      return res.status(404).json({ message: "Account not found" });
    }
    res.status(200).json(account);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateAccount = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedAccount = await Account.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedAccount) {
      return res.status(404).json({ message: "Account not found" });
    }
    res.status(200).json(updatedAccount);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteAccount = async (req, res) => {
  try {
    const { id } = req.params;
    await Account.findByIdAndDelete(id);
    res.status(200).json({ message: "Account deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    const { email, password } = req.body;
    const account = await Account.findOne({ email });
    if (!account) {
      return res.status(404).json({ message: "Account not found" });
    }
    const isMatch = await bcrypt.compare(password, account.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ id: account._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// se arriva qui, significa che il token è valido, questo perché il middleware authenticate lo ha verificato
export const validateToken = async (req, res) => {
  res.status(200).json({ message: "Token is valid!" });
}