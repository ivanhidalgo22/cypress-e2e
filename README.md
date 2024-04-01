# cypress-e2e

1. Clone the repo using git clone --recursive git@github.com:ivanhidalgo22/cypress-e2e.git - SSH mode: git@github.com:ivanhidalgo22/cypress-e2e.git

2. Please make sure you have Node 14.X.X

3. Create a .env file in the root with this content:
    SEED_USERBASE_SIZE=5
    SEED_CONTACTS_PER_USER=3
    SEED_PAYMENTS_PER_USER=15
    SEED_REQUESTS_PER_USER=10
    SEED_BANK_ACCOUNTS_PER_USER=1
    SEED_LIKES_PER_USER=2
    SEED_COMMENTS_PER_USER=2
    SEED_NOTIFICATIONS_PER_USER=5
    SEED_BANK_TRANSFERS_PER_USER=5
    SEED_DEFAULT_USER_PASSWORD=s3cret
    PAGINATION_PAGE_SIZE=10

    Ports used by React (frontend) and Express (backend)
    PORT=3000
    VITE_BACKEND_PORT=3001
    #VITE_BACKEND_ENDPOINT='https://cypress-backend.kindocean-accbe3eb.centralus.azurecontainerapps.io'
    VITE_BACKEND_ENDPOINT='http://localhost:3001'

    Uncomment when testing with any of the Auth providers below
    VITE_AUTH_TOKEN_NAME="authAccessToken"

    Auth0 Configuration to be added to .env when running "yarn dev:auth0"
    AUTH0_USERNAME=""
    AUTH0_PASSWORD=""
    VITE_AUTH0_DOMAIN="dev-3ipf5qm2.auth0.com"
    VITE_AUTH0_CLIENTID="t4EPlhkbllXnm6NLaltNMcggB0zfb7Tq"
    VITE_AUTH0_AUDIENCE="cypress"
    VITE_AUTH0_SCOPE="openid email profile"
    VITE_AUTH0="true"

4. Install dependencies
     yarn

5. Execute tests with the Launchpad
npx cypress open

6. To run tests in console
yarn test:qa
