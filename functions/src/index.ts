import * as functions from 'firebase-functions';
import * as express from 'express';
import { addEntry, getAllEntries, updateEntry, deleteEntry } from './entryController';

const app = express();

app.get('/', (request, response) => response.status(200).send('Hey there!'))
app.post('/entries', addEntry)
app.get('/entries', getAllEntries)
app.patch('/entries/:entryId', updateEntry)
app.delete('/entries/:entryId', deleteEntry)

exports.app = functions.https.onRequest(app);