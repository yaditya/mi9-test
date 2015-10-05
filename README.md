Publisher Service

Introduction
----------------

The Publisher Service:
    - maps the correct solr schema suffix to each document field
    - posts an the document to each solr collection associated with a site (site, search, unpublished)

Running the app
----------------

Make sure you have the necessary dependencies:

```bash
npm install
```

Starts the service on a port specified through the environment variable, otherwise default is port 3000

```bash
npm start
```

Endpoints

GET `/api/verifysite`: Used to verify that the service is up and running.
GET `/version`: Gets the version (build number) of the site
POST `/`: Posts a document to solr. Format needs to be `{"site": "site_name", "status": "document_status": "document": { }}`

The document status must be `saved` or `published`

Running tests
--------------

Make sure you have the necessary dependencies:

```bash
npm install
```

Runs the unit and integration tests. Also generates the code coverage report in the /coverage directory

```bash
npm test
```