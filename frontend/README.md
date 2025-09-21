## 🚀 Project Setup Instructions

### 1. Clone the Repository
git remote add origin https://github.com/nadeemahmed12/EDVIRON_SOFTWARE_DEVELOPER_ASSESSMENT.git

2. Install Dependencies
npm install

📖 Pages Documentation
1. Transactions Page

Route: /
Displays all transactions in a tabular format.
Features:
Search transactions by collect_id or custom_order_id
Filter by status
Filter by school
Sort by payment_time,
order_amount,
transaction_amount,
gateway
Pagination support

2. Transaction Status Page
Route: /status
Allows checking the current status of a transaction by entering its custom_order_id.
Features:
Real-time fetch of transaction status
Displays gateway, amount, and payment status
3. School Transactions Page
Route: /school
Displays all transactions grouped by school ID.
Features:
Filter transactions by school_id
Useful for school-specific reporting

