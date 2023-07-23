# Book Depository

Frontend Live Link [Book Depository](https://booking-depository.vercel.app/)
Backend Live Link [Backend Book Depository](https://book-depository-server.vercel.app/)


## Frontend Features

- [x] Top 10 lastest books on home page
- [x] Signup page
- [x] Signin page
- [x] Logout (after authentication)
- [x] Add new book (authentication required)
- [x] All books with searching by author || title || genre, filtering with genre & year 
- [x] Add new book (authentication required)
- [x] Single book details page with reviews
- [x] Can submit a review on book (authentication required)
- [x] Edit book (authentication required)
- [x] Delete book (authentication required)
- [x] Can add book to wishlist (authentication required)
- [x] Can add book to Current Plan (authentication required)
- [x] Current Plan page can mark book as finished reading (authentication required)


## Frontend Technologies 
- [x] React JS
- [x] Typescript
- [x] React Router
- [x] Redux Toolkit & RTK Query
- [x] React hook forms with yup validation
- [x] React hot toast & Sweetalert


# Booking Depository Backend Routes:

## Backend Technologies 
- [x] Node JS / Express
- [x] Typescript
- [x] Mongoose
- [x] Zod Validation
- [x] JWT Token

## Auth
<hr />

- [x] [POST] - [https://book-depository-server.vercel.app/api/v1/auth/signup](https://book-depository-server.vercel.app/api/v1/auth/signup) <br /> <br />
- [x] [POST] - [https://book-depository-server.vercel.app/api/v1/auth/login](https://book-depository-server.vercel.app/api/v1/auth/login) <br /> <br />
<br />

## Book
<hr />

- [x] [GET] - [https://book-depository-server.vercel.app/api/v1/book](https://book-depository-server.vercel.app/api/v1/book) <br /> <br />
- [x] [GET] - [https://book-depository-server.vercel.app/api/v1/book/64b54d91823907229f383132](https://book-depository-server.vercel.app/api/v1/book/64b54d91823907229f383132) <br /> <br />
- [x] [POST] - [https://book-depository-server.vercel.app/api/v1/book](https://book-depository-server.vercel.app/api/v1/book) (auth required) <br /> <br />
- [x] [PATCH] - [https://book-depository-server.vercel.app/api/v1/book/64b54d91823907229f383132](https://book-depository-server.vercel.app/api/v1/book/64b54d91823907229f383132) (auth required) <br /> <br />
- [x] [DELETE] - [https://book-depository-server.vercel.app/api/v1/book/64b54d20823907229f383124](https://book-depository-server.vercel.app/api/v1/book/64b54d91823907229f383132) (auth required) <br /> <br />

## Review
<hr />

- [x] [POST] - [https://book-depository-server.vercel.app/api/v1/review](https://book-depository-server.vercel.app/api/v1/review) (auth required) <br /> <br />

## Wishlist
<hr />

- [x] [POST] - [https://book-depository-server.vercel.app/api/v1/wishlist](https://book-depository-server.vercel.app/api/v1/wishlist) (auth required) <br /> <br />

## Current Plan
<hr />

- [x] [POST] - [https://book-depository-server.vercel.app/api/v1/current-plan](https://book-depository-server.vercel.app/api/v1/current-plan) (auth required) <br /> <br />
- [x] [PATCH] - [https://book-depository-server.vercel.app/api/v1/current-plan/64bd5ce7958938b90d31d3a3](https://book-depository-server.vercel.app/api/v1/current-plan/64bd5ce7958938b90d31d3a3) (auth required) <br /> <br />
