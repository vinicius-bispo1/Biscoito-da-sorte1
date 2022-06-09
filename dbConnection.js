const { Pool } = require('pg')

const client = new Pool({
  connectionString: process.env.DATABASE_URL ||'postgres://eyyzwaajbvtgxt:5e5275d15d8acea6d22a9bf8a07afb6966b91ef40e22a2c1adb065581032c20e@ec2-34-225-159-178.compute-1.amazonaws.com:5432/df9viabrf7jf90',
  ssl: {
    rejectUnauthorized: false
  }
})

module.exports = client