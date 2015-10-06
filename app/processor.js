export default {
    post(data) {
        let promises;

        try {
            const jsonData = JSON.parse(data);

            if (jsonData && jsonData.payload) {
                promises = {
                    response: jsonData
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
                };

                return Promise.resolve(promises.response);
            }
        } catch(err) {
            return Promise.reject(err);
        }
    }
};

