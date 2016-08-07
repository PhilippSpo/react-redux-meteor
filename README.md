# react-redux-meteor

A demo for using meteor (only) as your backend and react-redux as your frontend.

I wrote a [blog post]() about this setup, which explains the setps you need to take to make your react-redux app real-time by connecting it to a meteor backend.

The starting point for this example was the Todos App from Dan Abramov's ["Building React Applications with Idiomatic Redux"](https://egghead.io/courses/building-react-applications-with-idiomatic-redux) course ([Source code here](https://github.com/gaearon/todos)). If you are not sure how Redux works, watch the egghead.io courses first 🤓

## Features

- React & Redux Frontend without any restrictions (no Meteor in the frontend)
- live data *"for free"* by using a Meteor backend
- optimistic UI
- webpack (even in version 2.0 with tree-shaking enabled 🎉)
- [Asteroid](https://github.com/mondora/asteroid) as DDP library

## How to run

This app consists of a client and a server, we need to start both separately. This might sound trivial to you if you don't come from meteor 😉.

### Starting the client

This will start your a `webpack-dev-server` so you can access your frontend at `http://localhost:8080`
```sh
cd client
npm i
npm start
```

### Starting the backend

To start the meteor backend you first need to install meteor if you haven't already:
```sh
curl https://install.meteor.com/ | sh
```
Then you can start your backend by simply running
```sh
cd server
meteor
```
