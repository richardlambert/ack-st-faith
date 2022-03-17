# ACK-St.-Faith (Work in Progress)

## Running in Development Mode

You will need the following to run in development mode:

- An instance of MongoDB running locally e.g. `mongodb://localhost:27017/ack-st-faith` (assuming you have docker installed you can run `docker run -d -p 27017:27017 mongo`);
- A `.env.local` file in the root of the project directory (provided).

1. `docker run -d -p 27017:27017 mongo`
2. `cd ack-st-faith`
3. `npm i`
4. `npm run dev`
5. Browse to `http://localhost:3000`
