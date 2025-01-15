import db from "../config/database.js";

function createUser(request, response) {}

async function getOneUser(request, response) {
    const { id } = request.params;

    const sql = `SELECT * FROM users WHERE id=${id}`;

    try {
        const [rows, fields] = await db.query(sql);
        return response.status(200).json({ rows, fields });
    } catch (error) {
        return response.status(500).json({ message: error });
    }
}

function getAllUsers(request, response) {}

function updateUser(request, response) {}

function deleteUser(request, response) {}

export { createUser, getAllUsers, getOneUser, updateUser, deleteUser };
