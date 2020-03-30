# Url-Shortener-nodejs
This is a small project using NodeJS to create some REST APIs for a URL shortener. 

The full technology stack for this project includes the following :

- Database : SQL - MariaDB Server 
- Backend : Javascript (NodeJS runtime, Express Server)
- Frontend : Javascript (NodeJS runtime, ReactJS and NextJS framework)

### Prerequisites to run this locally:
- Your system should have NodeJS installed (v10 and above)
- Your system should have npm installed (v6.13.x and above)
- You should have the database started up.
- See https://github.com/Syab/db-setup-mariadb-python to set up DB infrastructure and table/s.
- See https://github.com/Syab/url-shortener-nextjs to start up frontend.

### Getting Started
1. Clone Repo to a directory
    ````
    cd /your/favourite/directory
    git clone https://github.com/Syab/url-shortener-nodejs.git
    cd url-shortener-nodejs
    ````
2. Install node modules
    ````
    npm install
    ````
3. Create .env file to store environment variables and secrets.
    ```
    # if using a Linux system
    touch .env
   
    # add the following to your .env file
    
    PORT=8000
    DB_HOST=localhost <or the IP/hostname of your MySQL DB server>
    DB_PORT=3306 <or the existing port of your DB server>
    DB_USER=<username of your db>
    DB_PW=<password of your db>
    DB_NAME=nodejs_mariadb <or any existing DB you are using>
    BASE_URL=http://localhost:8000 <or the hostname and port of your DB server>
    ```
 
4. Run application locally in dev or production mode
    ````
    # dev mode
    npm run dev
   
    # prod mode
    npm start
    ````

