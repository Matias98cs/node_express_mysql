import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
  try {
    // throw new Error("My error");
    const [rows] = await pool.query("SELECT * FROM employee");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Algo ocurrio" });
  }
};

export const getEmployeById = async (req, res) => {
  const { id } = req.params;
  try {
    //   const [row] = await pool.query(`SELECT * FROM employee WHERE id = ${id}`);
    const [row] = await pool.query(`SELECT * FROM employee WHERE id = ?`, [id]);
    if (row.length <= 0) {
      return res
        .status(404)
        .json({ message: "No se encontro ningun empleado" });
    }
    res.json(row);
  } catch (error) {
    return res.status(500).json({ message: "Algo ocurrio" });
  }
};

export const createEmployee = async (req, res) => {
  const { name, salary } = req.body;
  try {
    //   console.log(`${name} - ${salary}`);
    const [rows] = await pool.query(
      "INSERT INTO employee (name, salary) VALUES (?, ?)",
      [name, salary]
    );
    res.send({
      id: rows.insertId,
      name,
      salary,
    });
  } catch (error) {
    return res.status(500).json({ message: "Algo ocurrio" });
  }
};

export const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const { name, salary } = req.body;
  try {
    const [result] = await pool.query(
      "UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?",
      [name, salary, id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).send({ message: "Ocurrio un error" });
    }
    const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [
      id,
    ]);
    res.status(200).json({ message: "Los datos se actualizaron", rows });
  } catch (error) {
    return res.status(500).json({ message: "Algo ocurrio" });
  }
};

export const deleteEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query("DELETE FROM employee WHERE id = ?", [
      id,
    ]);
    if (result.affectedRows <= 0) {
      return res.status(404).send({ message: "Ocurrio un error" });
    }
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "Algo ocurrio" });
  }
};
