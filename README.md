## Running dev server locally

Prepare backend

- Clone [backend repository](https://github.com/nkuznetsov44/) backend repository and follow [instructions](https://github.com/nkuznetsov44/foosball-ratings#build-and-run-locally-in-docker) to run locally in docker
- Upload test data to the database following the [instructions](https://github.com/nkuznetsov44/foosball-ratings#how-to-upload-test-data)

Configure env
- `export WEBAPP_BACKEND_URL=http://localhost:9081`

Run development server
- `npm run dev`


## Production env:
- WEBAPP_BACKEND_URL=http://ratings_webapp:8081
