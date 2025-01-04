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
