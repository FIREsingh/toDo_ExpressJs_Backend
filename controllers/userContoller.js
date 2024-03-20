import { dbConnection } from "../config/dbConnect.js";

//========= get all data ===========
const getAllData = async (req, res) => {
  try {
    const [results, fields] = await dbConnection.query(
      "SELECT * FROM dummyTable"
    );

    console.log("results ===>", results);
    console.log(fields);
    res.send("inserted");
  } catch (err) {
    console.log(err);
  }
};

//=========== delete ===========
const deleteData = async (req, res) => {
  const userId = req.params.id;

  // Delete data from the database
  await dbConnection
    .query("DELETE FROM dummyTable WHERE id = ?", [userId])
    .then(() => {
      console.log("Data deleted successfully");
      res.status(200).json({ message: "Data deleted successfully" });
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal server error" });
    });
};

//=========== update ===========
const updateData = async (req, res) => {
  const { id } = req.params;
  const { firsrName, lastName, city, email } = req.body;

  try {
    // Update data in the database
    const [result] = await dbConnection.query(
      "UPDATE dummyTable SET  firsrName = ?, lastName = ?, city = ?, email = ? WHERE id = ?",
      [firsrName, lastName, city, email, id]
    );

    if (result.affectedRows === 0) {
      // No rows were affected, indicating the user with the given ID was not found
      return res.status(404).json({ error: "User not found" });
    }

    // Data updated successfully
    res.status(200).json({ message: "Data updated successfully" });
  } catch (error) {
    console.error("Error updating data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

//=========== insert ===========
const insertData = async (req, res) => {
  const { id, firsrName, lastName, city, email } = req.body;

  try {
    const data = await dbConnection.query(
      `INSERT INTO dummyTable (id,firsrName, lastName, city, email) VALUES (?,?,?,?,?)`,
      [id, firsrName, lastName, city, email]
    );
    console.log("inserted");
    res.send("inserted");
  } catch (err) {
    console.log("error inserting data into table", err);
  }
};

export { getAllData, insertData, deleteData, updateData };
