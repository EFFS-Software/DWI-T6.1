import { db } from '../database/cnx.js';

const getServer = async (req, res) => {
  try {
    res.json('Server Arriba.' );
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getDateServer = async (req, res) => {
  try {
    const result = await db.query('SELECT NOW()');
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ error: 'No puede proporcionar la fecha del servidor.' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

export { getServer, getDateServer };