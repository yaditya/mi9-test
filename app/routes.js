import {Router} from 'express';

let router = Router();

router.post('/', (req, res) => {
    try {
        const data = JSON.parse(req.body);

        if (!data.payload || !data.payload.push) {
            res.send('Request data is incorrectly formatted.');
        }

        res.json({
            response:
                data
                .payload
                .filter((item) => {
                    return item.image &&
                            item.drm &&
                            item.episodeCount > 0;
                })
                .map((item) => {
                    return {
                        image: item.image.showImage,
                        slug: item.slug,
                        title: item.title
                    };
                })
        });
    } catch (err) {
        res.status(400).json({ error: 'Could not decode request: ' + err });
    }
});

router.get('/', (req, res) => {
    res.status(405).send('GET method not implemented');
});

export default router;
