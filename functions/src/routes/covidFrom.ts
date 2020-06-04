import {Covid19PsycschemaEn, Covid19PsycschemaAr, Covid19PsycschemaFr} from "../models/forms/covidForm";
import {languageSchema} from "../models/language/language";
import * as firebaseHelper from 'firebase-functions-helper/dist';
import * as admin from "firebase-admin";
import * as express from "express";
import * as Joi from "joi";
import * as _ from "lodash";
import * as Strings from "../tools/strings";

const translate = require("translate-google");

admin.initializeApp();
const db = admin.firestore();
const collectionPath = 'forms';
const documentPath = 'covid19';
const documentSubPath = 'psychology';
export const router = express.Router();

router.post('/covid19/psyc', async (req, res) => {
    const languageValidation = Joi.validate(req.header('language'), languageSchema);
    if (!_.isEmpty(languageValidation.error)) {
        res.status(400).send(languageValidation.error);
        return;
    }
    let formValidation;
    switch (languageValidation.value) {
        case 'en':
            formValidation = Joi.validate(req.body.form, Covid19PsycschemaEn);
            break;
        case 'ar':
            formValidation = Joi.validate(req.body.form, Covid19PsycschemaAr);
            break;
        case 'fr':
            formValidation = Joi.validate(req.body.form, Covid19PsycschemaFr);
            break;
        default :
            formValidation = Joi.validate(req.body.form, Covid19PsycschemaFr);
    }
    if (!_.isEmpty(formValidation.error)) {
        res.status(400).send(formValidation.error)
        return;
    } else {
        try { // todo :  clean the code
            var reponse = await translate(Strings.responseSentForm, {
                from: 'en',
                to: languageValidation.value
            });
        }
        catch (e) {
            console.log(e);
        }

        db.collection(collectionPath).doc(documentPath).collection(documentSubPath).add(req.body)
            .then(() => res.status(200).send(reponse))
            .catch((err) => res.status(400).send(err));
    }
})

// View all contacts
router.get('/covid19/psyc', (req, res) => {
    firebaseHelper.firestore
        .backup(db, collectionPath)
        .then(data => res.status(200).send(data))
        .catch(error => res.status(400).send(`Cannot get contacts: ${error}`));
})


module.exports.router = router;
