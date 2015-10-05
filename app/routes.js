import {Router} from 'express';

let router = Router();

router.post('/', (req, res) => {

    let data;

    try {
        data = JSON.parse(req.body);
    } catch(e) {
        res.status(400).json({ error: 'Could not decode request: Invalid JSON format' });
    }

    if (!data || !data.payload) {
        console.error('Invalid data');
    } else {
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
    }
});

router.get('/', (req, res) => {
    res.status(405).send('GET method not implemented');
});

export default router;
