# GoMeal 🍔

A full-stack food delivery app I built using the MERN stack. Users can browse restaurants, add items to cart, place orders, and track them — with a separate admin panel to manage the whole thing.

---

## What's inside

- JWT-based auth (register, login, protected routes)
- Menu browsing with category filters
- Cart with live price updates
- Order placement and order history
- Admin dashboard to add/remove food items and manage orders
- Stripe payment integration at checkout

---

## Tech used

- **Frontend** — React.js, CSS3
- **Backend** — Node.js, Express.js
- **Database** — MongoDB with Mongoose
- **Auth** — JWT
- **Payments** — Stripe

---

## Folder structure

```
Go-Meal/
├── Frontend/gomeal     # user-facing React app
├── Backend/            # REST API (Express + MongoDB)
└── admin/              # admin dashboard (React)
```

---

## Running locally

You'll need Node.js and a MongoDB connection (local or Atlas).

```bash
# Clone it
git clone https://github.com/ananyasaxena13/Go-Meal.git
cd Go-Meal
```

**Backend**
```bash
cd Backend
npm install
```

Add a `.env` file:
```
MONGODB_URI=your_mongo_uri
JWT_SECRET=your_secret
STRIPE_SECRET_KEY=your_stripe_key
```
```bash
npm start
```

**Frontend**
```bash
cd ../Frontend/gomeal
npm install
npm run dev
```

**Admin**
```bash
cd ../../admin
npm install
npm run dev
```

---

## Some API routes

```
POST  /api/user/register       sign up
POST  /api/user/login          login + get token
GET   /api/food/list           fetch all menu items
POST  /api/cart/add            add to cart
POST  /api/order/place         place an order
GET   /api/order/userorders    get logged-in user's orders
```

---

## Screenshots

> _coming soon — will add UI screenshots here_

---

Built by [Ananya Saxena](https://github.com/ananyasaxena13)
