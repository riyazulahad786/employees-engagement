1.git clone https://github.com/riyazulahad786/employees-engagement.git
2.npm install, in backend and frontend dir
3.frontend - npm run dev
  backend - npm start

  for deployment we need to replace url http://localhost:8080  with production url once we deploy backend .




ER DIAGRAM

+-----------------+               +----------------+
|    Employee     |               |      Kudo      |
+-----------------+               +----------------+
| _id (PK)        |<------------- | _id (PK)       |
| name            |   giver (FK) | giver (FK)      |
| email           |               | receiver (FK)  |
| totalGiven      |-------------> | message        |
| totalReceived   |   receiver (FK)| timestamp     |
+-----------------+               +----------------+
