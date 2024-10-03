# React Router Overview

React is a Single Page Application (SPA) framework that enables the creation of websites that feel like they have multiple pages. This is achieved with **React Router**, a popular library for handling routing within React applications.



## Installing React Router

To use routing in a React application, the `react-router-dom` package is required. It can be installed using a package manager like npm or yarn.

### Installation:

```bash
npm install react-router-dom
```

## Defining Routes

Routes determine what component should be rendered when a user navigates to a specific URL. You can define multiple routes to render different components based on the path provided. In React Router, a component is assigned to each route and displayed when the path matches.

## Using `<Link>` for Navigation

To navigate between different routes in React Router, you use the `<Link>` component. It is similar to an HTML anchor (`<a>`) tag but optimized for React applications. Unlike traditional full-page reloads, using `<Link>` enables smooth, client-side transitions between pages.

## `useNavigate` for Programmatic Navigation

The `useNavigate` hook is used when you need to navigate programmatically, such as redirecting users after a form submission or other interactions. This provides a simple way to change the URL without rendering a `<Link>` component.

## Accessing Parameters Using `useParams`

The `useParams` hook is used to access URL parameters in React Router. For instance, if your route path includes dynamic segments (e.g., `/product/:id`), you can use `useParams` to retrieve the `id` value. This is helpful when you need to extract information from the URL and use it within your component.

## How to create Private Routs



