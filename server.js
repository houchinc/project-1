import express from 'express';
import connectDB from './config/db';
import {check, validationResult} from 'express-validator';

const app = express();

connectDB();

app.use(express.json({extended:false}));

app.get('/', (req, res) => res.send('http get request successfully sent to root api endpoint'));

app.post(
    '/api/customers', 
    [
        check('name','Please enter your name').not().isEmpty(),
        check('email','You must enter a valid email address').isEmail(),
        check('password','Please enter a password with at least 6 characters').isLength({min: 6})
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({errors: errors.array()});
        }else {
            return res.send(req.body);
        }
    }
);

app.post(
    '/api/employees', 
    [
        check('name','Please enter your name').not().isEmpty(),
        check('email','You must enter a valid email address').isEmail(),
        check('employeeID','Please enter a valid 6-digit employee number').isLength({min: 6, max: 6}).isNumeric()
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({errors: errors.array()});
        }else {
            return res.send(req.body);
        }
    }
);


app.listen(3000, () => console.log('express server running on port 3000'))