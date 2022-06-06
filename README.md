# Capitole Technical Test

This repo is the solution to a technical test. It is a frontend application built with Vuejs + Vite.

*You can see the application running live [here](https://capitole-technical-test.vercel.app/)*

It uses the following libraries:

- [Vite](https://vitejs.dev/)
- [Tailwindcss](https://tailwindcss.com/)
- [Vue-router](https://router.vuejs.org/)
- [Vuex](https://vuex.vuejs.org/)
- [Axios](https://github.com/axios/axios)

## Functionality

The application consults [The Movie Database API](https://developers.themoviedb.org/3/getting-started/introduction) and let's you:

- Browse movies by different categories
- Search movies by their titles
- See further details of whatever movie of interest
- Add movies to a Cart and from a Cart view delete them if they are no longer wanted

The application handles the routing through [Vue-router](https://router.vuejs.org/) and it's state with [Vuex](https://vuex.vuejs.org/)

## How to run it locally

- You need to clone this repo locally
- Inside the project create a `.env` file with a single variable called `VITE_TMDB_API_KEY`.
- Create an account in the [The Movie Database API](https://developers.themoviedb.org/3/getting-started/introduction) and generate a new API KEY linked to your account.
- Insert that value in the variable located in the `.env` file
- Run `npm install` in your terminal and then `npm run dev`. Visit `http://localhost:3000/` to see the app running.