Live Link: [https://cow-hut-auth-ochre.vercel.app/](https://cow-hut-auth-ochre.vercel.app/)

Cow Hut Routes:

I have also added the POSTMAN json so you can easily hit the routes

## Auth (User)
<hr />

[POST] - [https://cow-hut-auth-ochre.vercel.app/api/v1/auth/signup](https://cow-hut-auth-ochre.vercel.app/api/v1/auth/signup) <br /> <br />
[POST] - [https://cow-hut-auth-ochre.vercel.app/api/v1/auth/login](https://cow-hut-auth-ochre.vercel.app/api/v1/auth/login) <br /> <br />
[POST] - [https://cow-hut-auth-ochre.vercel.app/api/v1/auth/refresh-token](https://cow-hut-auth-ochre.vercel.app/api/v1/auth/refresh-token) <br /> <br />

## Auth (Admin)
<hr />

[POST] - [https://cow-hut-auth-ochre.vercel.app/api/v1/admins/create-admin](https://cow-hut-auth-ochre.vercel.app/api/v1/admins/create-admin) <br /> <br />
[POST] - [https://cow-hut-auth-ochre.vercel.app/api/v1/admins/login](https://cow-hut-auth-ochre.vercel.app/api/v1/admins/login)

## User
<hr />

[GET] - [https://cow-hut-auth-ochre.vercel.app/api/v1/users](https://cow-hut-auth-ochre.vercel.app/api/v1/users) [Admin access] <br /><br />
[GET Single] - [https://cow-hut-auth-ochre.vercel.app/api/v1/users/648d4d6c4b51c07888083a10](https://cow-hut-auth-ochre.vercel.app/api/v1/users/648d4d6c4b51c07888083a10) [Admin access] <br /> <br />
[PATCH] - [https://cow-hut-auth-ochre.vercel.app/api/v1/users/648d4d6c4b51c07888083a10](https://cow-hut-auth-ochre.vercel.app/api/v1/users/648d4d6c4b51c07888083a10) [Admin access] <br /> <br />
[DELETE] - [https://cow-hut-auth-ochre.vercel.app/api/v1/users/648d565a82ae71caffdca873](https://cow-hut-auth-ochre.vercel.app/api/v1/users/648d565a82ae71caffdca873) [Admin access] <br /> <br />

## Cows
<hr />

[POST] - [https://cow-hut-auth-ochre.vercel.app/api/v1/cows](https://cow-hut-auth-ochre.vercel.app/api/v1/cows) [Seller access] <br /> <br />
[GET] - [https://cow-hut-auth-ochre.vercel.app/api/v1/cows](https://cow-hut-auth-ochre.vercel.app/api/v1/cows) [Admin, Seller, Buyer access] <br /> <br />
[GET Single] - [https://cow-hut-auth-ochre.vercel.app/api/v1/cows/648da4e0d1e0a99c8295d2a3](https://cow-hut-auth-ochre.vercel.app/api/v1/cows/648da4e0d1e0a99c8295d2a3) [Admin, Seller, Buyer access] <br /> <br />
[PATCH] - [https://cow-hut-auth-ochre.vercel.app/api/v1/cows/648da4e0d1e0a99c8295d2a3](https://cow-hut-auth-ochre.vercel.app/api/v1/cows/648da4e0d1e0a99c8295d2a3) [Admin access] <br /> <br />
[DELETE] - [https://cow-hut-auth-ochre.vercel.app/api/v1/cows/648ebc0320969e183ebc3e99](https://cow-hut-auth-ochre.vercel.app/api/v1/cows/648ebc0320969e183ebc3e99) [Admin access] <br /><br /> 

Pagination and Filtering routes of Cows <br />
[GET] - [https://cow-hut-auth-ochre.vercel.app/api/v1/cows?page=1&limit=10](https://cow-hut-auth-ochre.vercel.app/api/v1/cows?page=1&limit=10) [Admin, Seller, Buyer access] <br /> <br />
[GET] - [https://cow-hut-auth-ochre.vercel.app/api/v1/cows?sortBy=price&sortOrder=asc](https://cow-hut-auth-ochre.vercel.app/api/v1/cows?sortBy=price&sortOrder=asc) [Admin, Seller, Buyer access] <br /> <br />
[GET] - [https://cow-hut-auth-ochre.vercel.app/api/v1/cows?minPrice=20000&maxPrice=70000](https://cow-hut-auth-ochre.vercel.app/api/v1/cows?minPrice=20000&maxPrice=70000) [Admin, Seller, Buyer access] <br /> <br />
[GET] - [https://cow-hut-auth-ochre.vercel.app/api/v1/cows?location=Chattogram](https://cow-hut-auth-ochre.vercel.app/api/v1/cows?location=Chattogram) [Admin, Seller, Buyer access] <br /> <br />
[GET] - [https://cow-hut-auth-ochre.vercel.app/api/v1/cows?searchTerm=Cha](https://cow-hut-auth-ochre.vercel.app/api/v1/cows?searchTerm=Cha) [Admin, Seller, Buyer access] <br /> <br />

## Orders
<hr />

[POST] - [https://cow-hut-auth-ochre.vercel.app/api/v1/orders](https://cow-hut-auth-ochre.vercel.app/api/v1/orders) [Buyer access] <br /> <br />
[GET] - [https://cow-hut-auth-ochre.vercel.app/api/v1/orders](https://cow-hut-auth-ochre.vercel.app/api/v1/orders) [Admin, Specific Seller,Specific Buyer access] <br />


## Bonus Part
<hr />

[POST] - [https://cow-hut-auth-ochre.vercel.app/api/v1/orders](https://cow-hut-auth-ochre.vercel.app/api/v1/orders) [Buyer access] <br /> <br />
[GET] - [https://cow-hut-auth-ochre.vercel.app/api/v1/orders](https://cow-hut-auth-ochre.vercel.app/api/v1/orders) [Admin, Specific Seller,Specific Buyer access] <br /> <br />

### Admin
<hr />

[POST] - [https://cow-hut-auth-ochre.vercel.app/api/v1/admins/create-admin](https://cow-hut-auth-ochre.vercel.app/api/v1/admins/create-admin) <br /> <br />

## My Profile
<hr />

[GET] - [https://cow-hut-auth-ochre.vercel.app/api/v1/users/my-profile](https://cow-hut-auth-ochre.vercel.app/api/v1/users/my-profile) [Buyer, Seller access]
[PATCH] - [https://cow-hut-auth-ochre.vercel.app/api/v1/users/my-profile](https://cow-hut-auth-ochre.vercel.app/api/v1/users/my-profile) [Buyer, Seller access]

## Order:
<hr />

[GET] - [https://cow-hut-auth-ochre.vercel.app/api/v1/orders/648ecf4b8ae9e3eeb3e6a411](https://cow-hut-auth-ochre.vercel.app/api/v1/orders/648ecf4b8ae9e3eeb3e6a411) [Specific Buyer, Specific Seller access]