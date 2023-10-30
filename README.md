# AnaghTech Assessment

[Problem Requirements](./React Assesment (JT).pdf)

## Getting Started

```bash
git clone https://github.com/nikosamofa/anaghtech-next-assessment
cd anaghtech-next-assessment

# node version 18 is required for this project
nvm install 18
nvm use 18

# install packages
npm install

# run local dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Explanation of the Project

### [React-Query](https://tanstack.com/query/v5/docs/react/overview)

React-Query makes fetching, caching, synchronizing and updating server state in your web applications a breeze.
The same characters data can be used for different episodes. So frontend cache for characters is required to reduce requests to the rickandmortyapi.com server.

The infinite loading and caching in this project leverage the React-Query.

### Preloading of data in the SSR

The page 1 data for episodes and characters are preloaded as they are the initial data used in the page.

### [EpisodeList](./src/components/Home/EpisodeList/index.tsx)

Infinite scroll loading is introduced.
The height of list is limited to `55vh` to see the infinite scroll loading effect.

### Fetching characters data for selected Episode

Normally the typical approach to fetch data by list of url is to use a batch request.
As React-Query is used, the batch request is not a good option for this case. So introduced 2 components

- `CharacterCard`
- `CharacterCardByUrl` which returns `CharacterCard` after fetching the data via url.

It causes another issue. For example, if the selected episode includes 50 characters which are not stored in the cache, 20 requests will be sent to the server at once without batch.
The infinite loading can be introduced here to fetch data by scroll pagination, similar to infinite scroll loading in `EpisodeList` component.

### [client](./src/client/) directory

Client directory includes all the api requests and React-Query hooks related to api.
Normally the directory name is `api` or `apis`, I used the name `client` due to conflicts with the default `api` directory of Next.js, which is used for creating serverless functions or API routes.
