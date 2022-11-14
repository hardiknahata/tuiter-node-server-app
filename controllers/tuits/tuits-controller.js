import posts from "./tuits.js";
let tuits = posts;

const createTuit = (req, res) => {}
const findTuits  = (req, res) => {}
const updateTuit = (req, res) => {}
const deleteTuit = (req, res) => {}

export default (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}
