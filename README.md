# GraphQL organizing your REST APIs

This is a simple web app that displays a list of movies with the vilain and heroes associated with it. When clicking on the movie it will open up the trailler on another tab.

![Alt text](assets/heroes-movies.gif?raw=true 'Web Application')

It seems pretty simple, but the idea here is to demonstrate how you can fetch related data from your REST APIs easily using GraphQL. The step-by-step you can find [here](https://deploy-preview-6--herodev.netlify.app/blog/graphql-organizing-your-rest-apis).

Feel free to clone and play around with it.

To see it working locally, just follow the following steps 👇👇

## 1 - Start the REST API Server

In the project directory, you can run:

### `cd rest-api-server & yarn start`

It starts the REST API server<br />
Open [http://localhost:3000](http://localhost:3000) to access the endpoints on the browser:

-   [/movies](http://localhost:3000/movies)
-   [/heroes/1](http://localhost:3000/heroes/1)
-   [/villains/1](http://localhost:3000/villains/1)

![Alt text](assets/rest.gif?raw=true 'Rest endpoints')

## 2 - Start the GraphQL Server

In the project directory, you can run:

### `cd graphql-server & yarn start`

It starts the GraphQL server<br />
Open [http://localhost:4000](http://localhost:4000) to access the GraphQL playground on the browser. Try to copy and paste the following query there:

```graphql
query Movies {
    getMovies {
        name
        villain {
            name
        }
        heroes {
            name
        }
    }
}
```

![Alt text](assets/graphql.gif?raw=true 'GraphQL Playground')

## 3 - Start the Frontend Application

To start the React app you can run:

### `cd react-web-app & yarn test`

Launches the react web app.<br />

Don't forget to start the servers first 😅.
