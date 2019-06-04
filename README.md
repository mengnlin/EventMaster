# EventMaster

<img src="https://github.com/mengnlin/EventMaster/blob/master/public/homepage.png" />

[Event Master Live Demo](https://event-master.herokuapp.com/)

Eventmaster is an event listing/booking site, in which users could create, manage their events, and purchase other events. It makes use of a Rails/PostgreSQL backend, React.js and Redux on the frontend with AWS cloud service for photo storage.

---

## Features

- Secure frontend to backend user authentication using BCrypt.
- Users can create and edit events.
- Display events based on category.
- Each event has a show page with details.
- Events support images.

---

## Techonologies

This project was designed to be completed within 10 days. Rails was used as project backend because of its convinient RESTful architecture. Frontend components were builded with React. Most React Components were designed to be reuseable.

---

## Let's get started!

### Login/Signup

##### User could sign up an account/ sign in with the demo account. All passwords will be hashed and salted before entering the database.

<img src="https://github.com/mengnlin/EventMaster/blob/master/public/login.png" width="425"/> <img src="https://github.com/mengnlin/EventMaster/blob/master/public/signup.png" width="425"/>

### Home page

##### User could still visit the home page and event show page without log in. However, event listing/booking/following features are only opened to registed users.

##### This Nav Bar could bring users to their desire event management page

<img src="https://github.com/mengnlin/EventMaster/blob/master/public/navbar.png"/>

### Event Show

##### Each event has it's own show page. Log in users are allowed to purchase ticket/follow event on this page

<img src="https://github.com/mengnlin/EventMaster/blob/master/public/show.png" />

##### Following an event on the show page

<img src="https://github.com/mengnlin/EventMaster/blob/master/public/LikeBar.gif"/>

### My Likes

##### After following an event, it will appear on My Likes page. User could review or delete all likes on this page

![MyLikes](https://github.com/mengnlin/EventMaster/blob/master/public/myLikesRecord.gif)

### My Tickets

##### After Purchasing an tickets, User could manage the ticket on My Tickets page

![myTicket](https://github.com/mengnlin/EventMaster/blob/master/public/myticket.gif)

---

## Possible future features

- Search base on locations
- Event following/likes
- Event tickets
