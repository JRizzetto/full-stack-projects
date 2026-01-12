import { db } from "../db";

export const register = (req, res) => {
  // CHECK EXISTING USER
  const q = "SELECT * FROM users WHERE email = ? OR username = ?";

  db.query(q, [req.body.email, req.body.name]);
};

export const login = (req, res) => {};

export const logout = (req, res) => {};
