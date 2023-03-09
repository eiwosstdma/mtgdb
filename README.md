This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

> **Warning**
> 
> Do not use that project in a production environment.

# MTGDB
## What is that
MTGDB is a Nextjs project which has the purpose to offer 
a learning experience about Next/React ecosystems & MongoDB (Using Mongoose).

## Getting started
### ENV
You first need to rename the 'example.env' into '.env' and gives an URI for
the application to connect to a local MongoDB instance.

### RUN
Once your ENV file is done, you just have to run `npm run dev`, 
like any other default NextJS application to run the application locally.

## How to use it
With that application you can add/see/delete Magic the gathering card upon three 
important characteristic;
- Name
- Color
- Type

You should also provide an image which will be put on the server.


# Side notes
## Important
- Search engine need to be done. => Need to gives a different page when no cards are found.

## GOOD
- Should add better error handling throughout getServerSideProps() functions
- Should delete the file in "public/image" too
- Should use Formik for forms handling
