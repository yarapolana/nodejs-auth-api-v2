<p align="center">
  <img align="center" src="https://miro.medium.com/max/4540/1*q9ww_u32hhpMaA-Q_s1ujw.png" width="300" />
</p>

<h1 align="center">🗓NodeJS REST API Challenge V2</h1>
<p>This is my third NodeJS server, part two of this <a href="https://github.com/yarapolana/nodejs-auth-api">repo</a> and a code challenge from a class in Rocketseat's Bootcamp. The challenge involves creating a booking system REST API server from scratch using nodejs. <a href="#description" >Read Description</a></p>

<p align="center">
  <img src="https://img.shields.io/github/package-json/dependency-version/yarapolana/nodejs-auth-api-v2/express.svg" >
  <img src="https://img.shields.io/github/package-json/dependency-version/yarapolana/nodejs-auth-api-v2/bcryptjs.svg" >
  <img src="https://img.shields.io/github/package-json/dependency-version/yarapolana/nodejs-auth-api-v2/jsonwebtoken.svg" >
  <img src="https://img.shields.io/github/package-json/dependency-version/yarapolana/nodejs-auth-api-v2/pg.svg" >
  <img src="https://img.shields.io/github/package-json/dependency-version/yarapolana/nodejs-auth-api-v2/sequelize.svg" >
  <img src="https://img.shields.io/github/license/yarapolana/nodejs-auth-api.svg" >
  <a href="https://yarapolana.com"><img src="https://img.shields.io/badge/createdby-yarapolana-red.svg" ></a>
</p>

<h2>🚀Description </h2>
<p id="description">
  Build an authentication service from scratch using <a href="https://expressjs.com"> Express</a>, <a href="https://nodemon.io/">Nodemon</a>, <a href="https://sequelize.org">Sequelize</a>, <a href="https://jwt.io/">Jsonwebtoken</a>, <a href="https://github.com/jquense/yup">Yup</a> and <a href="https://www.postgresql.org">Postgres</a>. In this application I used linting standards with ESLint + Prettier + EditorConfig.
</p>

### Routes
<i>Bookings</i>
- `GET /bookings`: This route displays an array of all bookings created by the authenticated user.

- `GET /bookings/:id`: This route uses `id` as a parameter and displays a single booking.

- `POST /bookings`: This route creates a new booking and receives `file_id`, `title`, `description`, `location` and `date` in the body. All fields are required. This request should return the user's id as the organizer's id.

- `PUT /bookings/:id`: This route uses `id` as a parameter and this is where booking gets updated. Request receives any of these fields `file_id`, `title`, `description`, `location` and `date`, only the user who created the booking can edit it.

- `DELETE /bookings/:id`: This route uses `id` as a parameter and deletes the booking, only the user who created the booking can delete it.


<i>Subscriptions</i>
- `GET /subscriptions`: This route displays an array of all bookings that the authenticated user is subscribed to.

- `POST /subscriptions`: This route creates a subscription to a meetup and must receive `name`, `email` and `password` in the body. You must validate the user where you state that all fields are required, `email` must be an email and password has a minimum of 8 characters.

<i>Organizer</i>
- `GET /organizer`: This is a test route you can send as response an `OK` message.


<i>Files</i>
- `POST /files`: This route creates a new file to be used in creating bookings and it must receive `file` in `multipart formdata`. The response should provide the name, url and the path to the file.

### Rules
<p>
- On get bookings route, filter with a date query (not hour), it should display an array paginated by 10 items per page.
This query should come with the organizer's data.

In the below query example, it shows that on page 2 it should display meetups that happened on the 1st of July 2019.

```http://localhost:3333/meetups?date=2019-07-01&page=2```


Make sure:
- User can <strong>not</strong> create meetups with past dates.

- User can only book meetups he does <strong>not</strong> organize.

- User can <strong>not</strong> book past meetups.

- User can <strong>not</strong> book the same meetup twice.

- User can <strong>not</strong> book different meetups on the same time period.

- User can only edit and cancel meetups that have not passed and that he organizes.

- Send an email for every meetup booked, only applicable for users with organizer role.

- Only display meetups that have not passed and order by closest as first on the list.
</p>

### MVC

Dive deeper and explore the Model View Controler model.


<h2>Usage</h2>
<p>To run the application first install dependencies</p>

```
yarn or npm install
```

<p>This application uses Postgres so make sure to have that running too (with Docker recommended) then run the application</p>

```
yarn dev
```

<p>Your code should be up and running here</p>

```http://localhost:3333```

---

<h4> Check out the fullstack version of this challenge <a href="https://github.com/yarapolana/Meetapp">here</a>.</h4>

---
### License:

This project is made available under the [MIT LICENSE](LICENSE.md).

### Authors:

<p>
  <a href="https://github.com/yarapolana">
    <img src="https://avatars0.githubusercontent.com/u/19730118?s=460&v=4" width="50" height="50">
  </a>
  <a href="https://dotcode.is">
    <img src="https://dotcode.is/images/logo_dark.svg" width="50" height="50">
  </a>
</p>
