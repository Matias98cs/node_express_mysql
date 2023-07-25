import { pool } from "../db.js";
import { handleCompare, handleHash } from "../helpers/hash.js";

export const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const passwordHash = await handleHash(password, 10);
    const [rows] = await pool.query(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, passwordHash]
    );
    res.status(200).json({ message: "Success" });
  } catch (error) {
    return res.status(500).json({ message: "Ocurrio un error" });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const [result] = await pool.query("SELECT * from users WHERE email = ?", [
      email,
    ]);
    const passwordForm = result[0].password;
    const comparasion = await handleCompare(password, passwordForm);
    if (!comparasion) {
      return res.status(404).json({ message: "Ocurrio un error" });
    }
    res.status(200).json({
      message: "Login successful",
      data: {
        id: result[0].id,
        name: result[0].name,
        email: result[0].email,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: "Ocurrio un error" });
  }
};
