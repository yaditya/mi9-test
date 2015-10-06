import {Router} from 'express';
import processor from './processor';

let router = Router();

router.post('/', (req, res) => {
    processor.post(req.body).then((data) => {
        res.json(data);
    }).catch((err) => {
        console.error(err);
        res.status(400).json({ error: 'Could not decode request: JSON parsing failed' });
    });
});

router.get('/', (req, res) => {
    res.status(405).send('GET method not implemented');
});

export default router;
