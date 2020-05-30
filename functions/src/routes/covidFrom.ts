import {covidForm} from "../models/forms/covidForm";
import * as firebaseHelper from 'firebase-functions-helper/dist';
import * as admin from "firebase-admin";
import * as express  from "express"
import * as functions from "firebase-functions";
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();
const covidFormCollection = 'contacts';
export const router = express.Router();

router.post('/covid19', async (req, res) => {
    try {
        const form: covidForm = {
            firstName: req.body['firstName'],
            lastName: req.body['lastName'],
            email: req.body['email']
        }

        const newDoc = await firebaseHelper.firestore
            .createNewDocument(db, covidFormCollection, form);
        res.status(201).send(`Created a new contact: ${newDoc.id}`);
    } catch (error) {
        res.status(400).send(`Contact should only contains firstName, lastName and email!!!`)
    }
})

// View all contacts
router.get('/covid19', (req, res) => {
    firebaseHelper.firestore
        .backup(db, covidFormCollection)
        .then(data => res.status(200).send(data))
        .catch(error => res.status(400).send(`Cannot get contacts: ${error}`));
})


module.exports.router = router;
