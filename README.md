## Getting Started

### To setup this repo locally
```bash
yarn install
npx prisma
npx prisma init
```
Setup a postgres database and add the database url to the DATABASE_URL variable in the env file

```bash
npx prisma introspect
npx prisma generate
```

To run the app in dev
```bash
yarn trainer dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
