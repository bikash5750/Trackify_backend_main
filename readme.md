POST   /api/auth/register         // Register new user
POST   /api/auth/login            // Login user
POST   /api/auth/logout           // Logout user
GET    /api/auth/me               // Get logged-in user info
PUT    /api/users/update-profile  // Update user profile
PUT    /api/users/change-password // Change user password
DELETE /api/users/delete-account  // Delete user account






POST   /api/categories            // Add new category
GET    /api/categories            // List categories
GET    /api/categories/:id        // Get single category
PUT    /api/categories/:id        // Update category
DELETE /api/categories/:id        // Delete category




POST   /api/expenses              // Add new expense
GET    /api/expenses              // Get all expenses for user
GET    /api/expenses/:id          // Get specific expense by ID
PUT    /api/expenses/:id          // Update expense
DELETE /api/expenses/:id          // Delete expense

GET    /api/expenses/search?q=...      // Search by title/description
GET    /api/expenses/filter?category=Food&from=2024-01-01&to=2024-01-31  // Filtered expenses
