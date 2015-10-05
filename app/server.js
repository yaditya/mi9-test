import bodyParser from 'body-parser';
import express from 'express';
import routes from './routes';

export default function() {
    let port = process.env.PORT || 3000;
    let app = express();
    // app.server = http.createServer(app);
    app.set('port', port);
    app.use(bodyParser.text({type: '*/*'}));

    // apply the routes to our application
    app.use('/', routes);

    // START THE SERVER
    // ==================================================================
    app.listen(port);
    console.log('Magic happens on port ' + port);

    return app;
}
