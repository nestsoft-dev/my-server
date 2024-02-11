const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/user.routes')

const app = express();
app.use(bodyParser.json());
app.use('/',userRouter);

module.exports= app;

/*
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/nestsoft-dev/watch-live-football-server.git
git push -u origin main*/ 