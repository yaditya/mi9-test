import {Router} from 'express';

let router = Router();

router.post('/', (req, res) => {

    let data;

    try {
        data = JSON.parse(req.body);

        if (data && data.payload) {
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
        } else {
            res.send('Invalid data');
        }
    } catch(err) {
        res.status(400).json({ error: 'Could not decode request: ' + err });
    }
});

router.get('/', (req, res) => {
    res.status(405).send('GET method not implemented');
});

export default router;
