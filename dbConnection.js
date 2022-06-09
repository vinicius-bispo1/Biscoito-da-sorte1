const { Pool } = require('pg')

const client = new Pool({
  connectionString: process.env.DATABASE_URL ||'postgres://lrzpdvtgmnwdcw:9e20319e42bef2260fce9a9a4f72bcd67ab6be97014882cbe28d8722ddd4c3e7@ec2-52-206-182-219.compute-1.amazonaws.com:5432/d6hhdja9nf39v8',
  ssl: {
    rejectUnauthorized: false
  }
})

module.exports = client