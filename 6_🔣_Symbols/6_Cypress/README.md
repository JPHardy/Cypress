# How2Cypress

Create an `env` directory and initialise NPM. Copy the Cypress dir and the Dockerfile into that dir. 

```
cd 6_🔣_Symbols
cp -r 6_Cypress env/cypress
cp 3_Docker/dockerfile env/dockerfile
```

Navigate into env

```
cd env
```

From here you should be able to build and run the container.

```
docker build -t cypress-screenshot .
docker run --rm -v $PWD/cypress/screenshots:/cypress/screenshots cypress-screenshot npx cypress run --headless --spec "cypress/integration/google.spec.js"
```

