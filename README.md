# File Manager Web Application

## Overview

This project is a web application that allows users to upload, view, and manage their files (documents, images, etc.) using Google Cloud. It features user authentication, a simple and intuitive user interface, and is designed to be scalable and secure.

## Technologies Used

- *Frontend*: React, HTML, CSS, JavaScript
- *Backend*: Node.js, Express
- *Database*: MongoDB (for user authentication and file metadata)
- *Authentication*: JSON Web Tokens (JWT)
- *Cloud Storage*: Google Cloud Storage
- *DevOps*: Docker, AWS Elastic Beanstalk or ECS, CI/CD with GitHub Actions
- *Testing*: Postman for API testing

## Project Structure

```plaintext
project-root/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.js
│   │   └── index.js
│   ├── .env
│   ├── Dockerfile
│   ├── package.json
│   └── README.md
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   └── File.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── files.js
│   │   └── index.js
│   ├── middleware/
│   │   └── auth.js
│   ├── .env
│   ├── app.js
│   ├── Dockerfile
│   ├── package.json
│   └── README.md
├── .github/
│   └── workflows/
│       └── deploy.yml
├── docker-compose.yml
└── README.md