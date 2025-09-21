## Setup Instructions
git remote add origin https://github.com/nadeemahmed12/EDVIRON_SOFTWARE_DEVELOPER_ASSESSMENT.git

#navigate
cd EDVIRON_SOFTWARE_DEVELOPER_ASSESSMENT/backend

#Install dependencies
npm install

#.env file
MONGO_URI=mongodb+srv://nadeem:nadeem@cluster0.fj35kym.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=mysecret
JWT_EXPIRES_IN=1d
PORT=5000


PG_KEY=edvtest01
PAYMENT_API_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0cnVzdGVlSWQiOiI2NWIwZTU1MmRkMzE5NTBhOWI0MWM1YmEiLCJJbmRleE9mQXBpS2V5Ijo2fQ.IJWTYCOurGCFdRM2xyKtw6TEcuwXxGnmINrXFfsAdt0
SCHOOL_ID=65b0e6293e9f76a9694d84b4
PAYMENT_BASE_URL=https://dev-vanilla.edviron.com/erp

#run
npm run start:dev



User Authentication
🔹 Register User
Endpoint: POST /auth/register
Description: Register a new user.
Request Body:
{
    "email":"aaa19@gmail.com",
    "password":"11111"
}

Response:
{
    "message": "User registered successfully",
    "userId": "68cf5911415eac14b005efe5"
}

🔹Login User
Endpoint: POST /auth/login
Description: Login user and get JWT token.
Request Body:
{
    "email":"aaa19@gmail.com",
    "password":"11111"
}
Response:
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2OGNmNTkxMTQxNWVhYzE0YjAwNWVmZTUiLCJlbWFpbCI6ImFhYTE5QGdtYWlsLmNvbSIsInJvbGUiOiJzdHVkZW50IiwiaWF0IjoxNzU4NDE5MjI1LCJleHAiOjE3NTg1MDU2MjV9.zClWPagB0Ykj4NS_hqlTDIkoFs0lA9Xd7OYgbzr--9I"
}

2️⃣ Orders
🔹 Create Order
Endpoint: POST /orders/create
Description: Creates a new order.
Request Body:
{
  "school_id": "65b0e6293e9f76a9694d84b4",
  "trustee_id": "abc12",
  "student_info": { "name": "xyyyzz", "id": "STU021", "email": "xyyyzz@test.com" },
  "gateway_name": "Paytm"
}
Response:
{
    "school_id": "65b0e6293e9f76a9694d84b4",
    "trustee_id": "abc12",
    "student_info": {
        "name": "xyyyzz",
        "id": "STU021",
        "email": "xyyyzz@test.com"
    },
    "gateway_name": "Paytm",
    "_id": "68cf5931415eac14b005efe8",
    "createdAt": "2025-09-21T01:47:29.327Z",
    "updatedAt": "2025-09-21T01:47:29.327Z",
    "__v": 0
}

3️⃣ Payments
🔹 Create Payment
Endpoint: POST /payment/create-payment
Description: Create a payment request for an order.
Request Body:
{
  "school_id": "65b0e6293e9f76a9694d84b4",
  "amount": "4000",
  "callback_url": "http://localhost:5000/webhook/payment-status"
}
response:
{
    "collect_request_id": "68cf594c154d1bce65b5c896",
    "collect_request_url": "https://dev-payments.edviron.com/edviron-pg/redirect?session_id=session_DmCYRlFItDu9TAZMaqjIWmqkxPoYrKekpGELwAUD1Z0fzbsLFZidWzLMPeLxvD8NL5RRjxWWy83SlLgjVjAD7oLbWpDkEL0LpFcs-UC4IO6iVQAcI9qIueXEtp9vUwpaymentpayment&collect_request_id=68cf594c154d1bce65b5c896&amount=4000.00&&platform_charges=%5B%7B%22platform_type%22%3A%22UPI%22%2C%22payment_mode%22%3A%22Others%22%2C%22range_charge%22%3A%5B%7B%22charge%22%3A2%2C%22charge_type%22%3A%22FLAT%22%2C%22upto%22%3Anull%7D%5D%7D%2C%7B%22platform_type%22%3A%22CreditCard%22%2C%22payment_mode%22%3A%22Others%22%2C%22range_charge%22%3A%5B%7B%22charge%22%3A2%2C%22charge_type%22%3A%22PERCENT%22%2C%22upto%22%3Anull%7D%5D%7D%2C%7B%22platform_type%22%3A%22DebitCard%22%2C%22payment_mode%22%3A%22Others%22%2C%22range_charge%22%3A%5B%7B%22charge%22%3A20%2C%22charge_type%22%3A%22FLAT%22%2C%22upto%22%3A100%7D%5D%7D%2C%7B%22platform_type%22%3A%22NetBanking%22%2C%22payment_mode%22%3A%22Others%22%2C%22range_charge%22%3A%5B%7B%22charge%22%3A1%2C%22charge_type%22%3A%22FLAT%22%2C%22upto%22%3Anull%7D%5D%7D%2C%7B%22platform_type%22%3A%22Wallet%22%2C%22payment_mode%22%3A%22Others%22%2C%22range_charge%22%3A%5B%7B%22charge%22%3A20%2C%22charge_type%22%3A%22PERCENT%22%2C%22upto%22%3Anull%7D%5D%7D%2C%7B%22platform_type%22%3A%22PayLater%22%2C%22payment_mode%22%3A%22Others%22%2C%22range_charge%22%3A%5B%7B%22charge%22%3A20%2C%22charge_type%22%3A%22PERCENT%22%2C%22upto%22%3Anull%7D%5D%7D%2C%7B%22platform_type%22%3A%22CardLess%20EMI%22%2C%22payment_mode%22%3A%22Others%22%2C%22range_charge%22%3A%5B%7B%22charge%22%3A20%2C%22charge_type%22%3A%22PERCENT%22%2C%22upto%22%3Anull%7D%5D%7D%2C%7B%22platform_type%22%3A%22DebitCard%22%2C%22payment_mode%22%3A%22Visa%22%2C%22range_charge%22%3A%5B%7B%22charge%22%3A1%2C%22charge_type%22%3A%22PERCENT%22%2C%22upto%22%3A100%7D%2C%7B%22charge%22%3A10%2C%22charge_type%22%3A%22FLAT%22%2C%22upto%22%3Anull%7D%5D%7D%2C%7B%22platform_type%22%3A%22NetBanking%22%2C%22payment_mode%22%3A%22AU%20Small%20Finance%20Bank%22%2C%22range_charge%22%3A%5B%7B%22charge%22%3A10%2C%22charge_type%22%3A%22FLAT%22%2C%22upto%22%3A20%7D%2C%7B%22charge%22%3A0%2C%22charge_type%22%3A%22PERCENT%22%2C%22upto%22%3Anull%7D%5D%7D%5D&school_name=Some-School",
    "sign": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb2xsZWN0X3JlcXVlc3RfaWQiOiI2OGNmNTk0YzE1NGQxYmNlNjViNWM4OTYiLCJjb2xsZWN0X3JlcXVlc3RfdXJsIjoiaHR0cHM6Ly9kZXYtcGF5bWVudHMuZWR2aXJvbi5jb20vZWR2aXJvbi1wZy9yZWRpcmVjdD9zZXNzaW9uX2lkPXNlc3Npb25fRG1DWVJsRkl0RHU5VEFaTWFxaklXbXFreFBvWXJLZWtwR0VMd0FVRDFaMGZ6YnNMRlppZFd6TE1QZUx4dkQ4Tkw1UlJqeFdXeTgzU2xMZ2pWakFEN29MYldwRGtFTDBMcEZjcy1VQzRJTzZpVlFBY0k5cUl1ZVhFdHA5dlV3cGF5bWVudHBheW1lbnQmY29sbGVjdF9yZXF1ZXN0X2lkPTY4Y2Y1OTRjMTU0ZDFiY2U2NWI1Yzg5NiZhbW91bnQ9NDAwMC4wMCYmcGxhdGZvcm1fY2hhcmdlcz0lNUIlN0IlMjJwbGF0Zm9ybV90eXBlJTIyJTNBJTIyVVBJJTIyJTJDJTIycGF5bWVudF9tb2RlJTIyJTNBJTIyT3RoZXJzJTIyJTJDJTIycmFuZ2VfY2hhcmdlJTIyJTNBJTVCJTdCJTIyY2hhcmdlJTIyJTNBMiUyQyUyMmNoYXJnZV90eXBlJTIyJTNBJTIyRkxBVCUyMiUyQyUyMnVwdG8lMjIlM0FudWxsJTdEJTVEJTdEJTJDJTdCJTIycGxhdGZvcm1fdHlwZSUyMiUzQSUyMkNyZWRpdENhcmQlMjIlMkMlMjJwYXltZW50X21vZGUlMjIlM0ElMjJPdGhlcnMlMjIlMkMlMjJyYW5nZV9jaGFyZ2UlMjIlM0ElNUIlN0IlMjJjaGFyZ2UlMjIlM0EyJTJDJTIyY2hhcmdlX3R5cGUlMjIlM0ElMjJQRVJDRU5UJTIyJTJDJTIydXB0byUyMiUzQW51bGwlN0QlNUQlN0QlMkMlN0IlMjJwbGF0Zm9ybV90eXBlJTIyJTNBJTIyRGViaXRDYXJkJTIyJTJDJTIycGF5bWVudF9tb2RlJTIyJTNBJTIyT3RoZXJzJTIyJTJDJTIycmFuZ2VfY2hhcmdlJTIyJTNBJTVCJTdCJTIyY2hhcmdlJTIyJTNBMjAlMkMlMjJjaGFyZ2VfdHlwZSUyMiUzQSUyMkZMQVQlMjIlMkMlMjJ1cHRvJTIyJTNBMTAwJTdEJTVEJTdEJTJDJTdCJTIycGxhdGZvcm1fdHlwZSUyMiUzQSUyMk5ldEJhbmtpbmclMjIlMkMlMjJwYXltZW50X21vZGUlMjIlM0ElMjJPdGhlcnMlMjIlMkMlMjJyYW5nZV9jaGFyZ2UlMjIlM0ElNUIlN0IlMjJjaGFyZ2UlMjIlM0ExJTJDJTIyY2hhcmdlX3R5cGUlMjIlM0ElMjJGTEFUJTIyJTJDJTIydXB0byUyMiUzQW51bGwlN0QlNUQlN0QlMkMlN0IlMjJwbGF0Zm9ybV90eXBlJTIyJTNBJTIyV2FsbGV0JTIyJTJDJTIycGF5bWVudF9tb2RlJTIyJTNBJTIyT3RoZXJzJTIyJTJDJTIycmFuZ2VfY2hhcmdlJTIyJTNBJTVCJTdCJTIyY2hhcmdlJTIyJTNBMjAlMkMlMjJjaGFyZ2VfdHlwZSUyMiUzQSUyMlBFUkNFTlQlMjIlMkMlMjJ1cHRvJTIyJTNBbnVsbCU3RCU1RCU3RCUyQyU3QiUyMnBsYXRmb3JtX3R5cGUlMjIlM0ElMjJQYXlMYXRlciUyMiUyQyUyMnBheW1lbnRfbW9kZSUyMiUzQSUyMk90aGVycyUyMiUyQyUyMnJhbmdlX2NoYXJnZSUyMiUzQSU1QiU3QiUyMmNoYXJnZSUyMiUzQTIwJTJDJTIyY2hhcmdlX3R5cGUlMjIlM0ElMjJQRVJDRU5UJTIyJTJDJTIydXB0byUyMiUzQW51bGwlN0QlNUQlN0QlMkMlN0IlMjJwbGF0Zm9ybV90eXBlJTIyJTNBJTIyQ2FyZExlc3MlMjBFTUklMjIlMkMlMjJwYXltZW50X21vZGUlMjIlM0ElMjJPdGhlcnMlMjIlMkMlMjJyYW5nZV9jaGFyZ2UlMjIlM0ElNUIlN0IlMjJjaGFyZ2UlMjIlM0EyMCUyQyUyMmNoYXJnZV90eXBlJTIyJTNBJTIyUEVSQ0VOVCUyMiUyQyUyMnVwdG8lMjIlM0FudWxsJTdEJTVEJTdEJTJDJTdCJTIycGxhdGZvcm1fdHlwZSUyMiUzQSUyMkRlYml0Q2FyZCUyMiUyQyUyMnBheW1lbnRfbW9kZSUyMiUzQSUyMlZpc2ElMjIlMkMlMjJyYW5nZV9jaGFyZ2UlMjIlM0ElNUIlN0IlMjJjaGFyZ2UlMjIlM0ExJTJDJTIyY2hhcmdlX3R5cGUlMjIlM0ElMjJQRVJDRU5UJTIyJTJDJTIydXB0byUyMiUzQTEwMCU3RCUyQyU3QiUyMmNoYXJnZSUyMiUzQTEwJTJDJTIyY2hhcmdlX3R5cGUlMjIlM0ElMjJGTEFUJTIyJTJDJTIydXB0byUyMiUzQW51bGwlN0QlNUQlN0QlMkMlN0IlMjJwbGF0Zm9ybV90eXBlJTIyJTNBJTIyTmV0QmFua2luZyUyMiUyQyUyMnBheW1lbnRfbW9kZSUyMiUzQSUyMkFVJTIwU21hbGwlMjBGaW5hbmNlJTIwQmFuayUyMiUyQyUyMnJhbmdlX2NoYXJnZSUyMiUzQSU1QiU3QiUyMmNoYXJnZSUyMiUzQTEwJTJDJTIyY2hhcmdlX3R5cGUlMjIlM0ElMjJGTEFUJTIyJTJDJTIydXB0byUyMiUzQTIwJTdEJTJDJTdCJTIyY2hhcmdlJTIyJTNBMCUyQyUyMmNoYXJnZV90eXBlJTIyJTNBJTIyUEVSQ0VOVCUyMiUyQyUyMnVwdG8lMjIlM0FudWxsJTdEJTVEJTdEJTVEJnNjaG9vbF9uYW1lPVNvbWUtU2Nob29sIiwiY3VzdG9tX29yZGVyX2lkIjpudWxsLCJleHAiOjE3NTg0MjY0NzZ9.4F5kjusySeANmC2To0_SkbAAks93oI5r6CxubUdiUF0"
}

🔹 Check Payment Status
Endpoint: GET /payment/status
Description: Check payment status of a given order.
Response:
{
    "status": "NOT INITIATED",
    "amount": 4000,
    "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdGF0dXMiOiJOT1QgSU5JVElBVEVEIiwiYW1vdW50Ijo0MDAwfQ.ZElOL_wdHqttT_uTb8M-rtETMexiKqlQtTMbBFG9YFo",
    "sign": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdGF0dXMiOiJOT1QgSU5JVElBVEVEIiwiYW1vdW50Ijo0MDAwLCJqd3QiOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKemRHRjBkWE1pT2lKT1QxUWdTVTVKVkVsQlZFVkVJaXdpWVcxdmRXNTBJam8wTURBd2ZRLlpFbE9MX3dkSHF0dFRfdVRiOE0tcnRFVE1leGlLcWxRdFRNYkJGRzlZRm8iLCJleHAiOjE3NTg0MzYwMDN9.NogszjtpwJJYBIAyNjToZA71OJxS9oWtcFXpCAX77E8"
}


4️⃣ Webhooks
🔹 Payment Status Webhook
Endpoint: POST /webhook/payment-status
Description: Handles callbacks from payment gateway.
Request Body (sent by gateway):
{
  "school_id": "SCH019",
  "collect_request_id": "68cf594c154d1bce65b5c896",
  "status": "PENDING",
  "amount":4000,
  "order_info": {
    "order_id": "68cf5931415eac14b005efe8",
    "order_amount": 4000,
    "transaction_amount": 4000,
    "payment_mode": "UPI",
    "payment_details": "user@upi",
    "bank_reference": "BANKREF123",
    "payment_message": "PENDING",
    "status": "PENDING",
    "error_message": null,
    "payment_time": "2025-09-19T12:30:00Z"
  }
}

Response:
{
    "school_id": "SCH019",
    "collect_request_id": "68cf594c154d1bce65b5c896",
    "status": "PENDING",
    "amount": 4000,
    "rawResponse": {
        "school_id": "SCH019",
        "collect_request_id": "68cf594c154d1bce65b5c896",
        "status": "PENDING",
        "amount": 4000,
        "order_info": {
            "order_id": "68cf5931415eac14b005efe8",
            "order_amount": 4000,
            "transaction_amount": 4000,
            "payment_mode": "UPI",
            "payment_details": "user@upi",
            "bank_reference": "BANKREF123",
            "payment_message": "PENDING",
            "status": "PENDING",
            "error_message": null,
            "payment_time": "2025-09-19T12:30:00Z"
        }
    },
    "_id": "68cf5977415eac14b005efea",
    "createdAt": "2025-09-21T01:48:39.209Z",
    "updatedAt": "2025-09-21T01:48:39.209Z",
    "__v": 0
}
5️⃣ Transactions
🔹 Create Transaction
Endpoint: POST /transactions/create
Description: Create a new transaction.
Request Body:
{
  "collect_id":"68cf5931415eac14b005efe8",
  "school_id": "65b0e6293e9f76a9694d84b4",
  "order_amount": 4000,
  "transaction_amount": 4000,
  "status": "PENDING"
}

Response:
{
    "collect_id": "68cf5931415eac14b005efe8",
    "school_id": "65b0e6293e9f76a9694d84b4",
    "order_amount": 4000,
    "transaction_amount": 4000,
    "status": "PENDING",
    "_id": "68cf598c415eac14b005efed",
    "payment_time": "2025-09-21T01:49:00.850Z",
    "createdAt": "2025-09-21T01:49:00.851Z",
    "updatedAt": "2025-09-21T01:49:00.851Z",
    "__v": 0
}

Get All Transactions
Endpoint: GET /transactions
Response:
[
    {
        "order_amount": 110,
        "transaction_amount": 110,
        "status": "PENDING",
        "collect_id": "68ce7800d689f11a0fefe2af",
        "school_id": "65b0e6293e9f76a9694d84b4",
        "gateway_name": "PhonePe",
        "custom_order_id": "68ce7881d689f11a0fefe2b4",
        "payment_time": "2025-09-20T09:48:49.686Z"
    },
    {
        "order_amount": 10,
        "transaction_amount": 10,
        "status": "PENDING",
        "collect_id": "68ce8761f6c2c40efad8683b",
        "school_id": "65b0e6293e9f76a9694d84b4",
        "gateway_name": "PhonePe",
        "custom_order_id": "68ce8afbf6c2c40efad86840",
        "payment_time": "2025-09-20T11:07:39.584Z"
    },........]

🔹 Get Transactions by School ID
Endpoint: GET /transactions/school/:schoolId
Response:
    [
    {
        "school_id": "65b0e6293e9f76a9694d84b4",
        "order_amount": 110,
        "transaction_amount": 110,
        "status": "PENDING",
        "payment_time": "2025-09-20T09:48:49.686Z",
        "collect_id": "68ce7800d689f11a0fefe2af",
        "gateway_name": "PhonePe",
        "custom_order_id": "68ce7881d689f11a0fefe2b4"
    },
    {
        "school_id": "65b0e6293e9f76a9694d84b4",
        "order_amount": 10,
        "transaction_amount": 10,
        "status": "PENDING",
        "payment_time": "2025-09-20T11:07:39.584Z",
        "collect_id": "68ce8761f6c2c40efad8683b",
        "gateway_name": "PhonePe",
        "custom_order_id": "68ce8afbf6c2c40efad86840"
    }...]

    🔹 Transaction Status
Endpoint: GET /transactions/status/:transactionId
Response:
[
    {
        "order_amount": 4000,
        "transaction_amount": 4000,
        "status": "PENDING",
        "payment_time": "2025-09-21T01:49:00.850Z",
        "collect_id": "68cf5931415eac14b005efe8",
        "school_id": "65b0e6293e9f76a9694d84b4",
        "gateway_name": "Paytm",
        "custom_order_id": "68cf598c415eac14b005efed"
    }
]
