Project Description
Ecommerce-Follow-Along is a comprehensive project designed to guide developers through the process of building an e-commerce application from scratch. This project will cover various aspects of web development, including front-end design, back-end integration, and database management, providing a hands-on learning experience.

Milestone 1: Project Overview
In this session, we focused on the foundational elements of the Ecommerce-Follow-Along project. Key topics covered included:

1. Project Setup
We initialized the GitHub repository and set up the basic structure for our application.
2. Technology Stack
An overview of the technologies that will be utilized throughout the project:
Node.js: JavaScript runtime for the back-end.
Express.js: Web framework for building the back-end API.
MongoDB: NoSQL database to store application data.
React (MUI): Front-end framework using React with Material-UI for UI components.
3. Version Control
Introduction to Git and GitHub for version control.
Emphasized best practices for committing code and managing branches.
4. Development Environment
Configuration of local development environments to ensure consistency across team members.
milstone 5 created signup page.
- The **Sign-Up page** is where users can create an account by entering their name, email, and password.
- **Form validation** checks that the data users enter is correct, like ensuring the email is in the right format and the password is strong enough.
- In Milestone 5, you’ll design the sign-up form, add validation to make sure the data is accurate, and ensure a smooth user experience.
- Once you’re done, push your code to GitHub, update the README with your progress, and share the repository link for submission.

milestone 4:-
User Model:

A User Model defines the structure of user data in the database using MongoDB schemas (e.g., name, email, password, and other fields). It acts as a blueprint for how data is stored and validated.
User Controller:

A User Controller manages user-related operations, such as handling user sign-up, login, and other requests. It interacts with the User Model to perform actions like creating, fetching, or updating user data.
File Uploads with Multer:

Multer is used to handle file uploads (e.g., profile pictures) in your backend. It stores files and tracks them on the server, making it easy to manage user-uploaded content.


milestone 6:-
1. Encrypt the Password:
Use bcrypt to hash the user’s password during the signup process.
Make sure you never save the plain text password in the database, only the hashed version.
2. Store Complete User Data:
Ensure you’re saving all relevant user information (like name, email, etc.) to the database.
While saving, make sure the password is always encrypted (hashed with bcrypt) and never stored as plain text.
3. Missed the Mentor-Led Session?:
No worries if you couldn’t attend the live coding session! You can always refer to the content and work through the steps.
If you get stuck on the coding aspect, feel free to reach out to your mentor for guidance.
Once you’ve completed these steps:
1. Push Your Code:
Push your updated code to the same GitHub repository you used for the previous milestones.
2. Make Your Repository Public:
Ensure your repository is publicly accessible so that your mentor can review it.
3. Update Your README:
Add a new section in your README to summarize the progress you've made for Milestone 6.
4. Share the Link:
Once everything is updated, share the repository link in the assignment submission section provided.

milestone 7:-
Why Encrypting Passwords? 
Protect User Data:

Encrypting passwords ensures they remain secure, even if the database is compromised.
It makes it significantly harder for attackers to access sensitive information.
Privacy:

Passwords should never be stored in plain text. Encryption ensures that user privacy is maintained.
Compliance:

Encrypting passwords helps you meet important security standards like GDPR (General Data Protection Regulation) and PCI-DSS (Payment Card Industry Data Security Standard).
Prevents Password Theft:

Hashing algorithms like bcrypt make it difficult for attackers to decipher the password.
Since hashed passwords can't be reversed, it adds another layer of protection against theft.
How Login Authentication Works 
User Enters Credentials:

The user provides their email/username and password on the login page.
Fetch User Data from Database:

The backend searches the database for a record matching the provided email/username.
If no user is found, return an error message: "User does not exist."
Compare Encrypted Passwords:

Use the same hashing algorithm (like bcrypt) to hash the password the user entered.
Compare this hashed password with the stored hashed password in the database.
If the hashes match, the user is authenticated; if not, send an error message.
Note: Password hashing is a one-way process, so instead of decrypting the password, we compare the hashes.

Steps for Milestone 7 
Create Login Endpoint:

Design a login endpoint that accepts email/username and password from the user.
The backend should fetch the corresponding user record from the database.
Validate Password:

Use bcrypt or another hashing algorithm to hash the entered password.
Compare the hashed version of the entered password with the stored hashed password in the database.
Ensure the comparison is done properly and provide feedback if authentication fails.
Important: Remember, you’re not decrypting the password, you’re comparing hashed passwords.

Submission Guidelines 
Push Your Code:

Commit and push your changes to your existing GitHub repository for the project.
Ensure Repository is Public:

Make sure your repository is publicly accessible, so the mentor can review your code.
Update README:

Add a section in your README that summarizes your progress on login functionality and password encryption for Milestone 7.
Share the Link:

After completing the task, provide your repository link in the assignment submission section.

milestone 8:-
Why Create Card Components? 
Showcase Products Effectively:

Card components display product details in a clean, visually appealing way.
Helps users easily understand the product at a glance.
Reusable Design:

Once created, the card component can be used across different pages or sections of your app.
Saves time and ensures design consistency.
Improved User Experience:

Cards help users quickly browse and interact with products, enhancing their experience.
Each product gets its own space with clear details.
Organized Layout:

Using cards makes your homepage clean and structured.
Keeps everything organized, so users don’t feel overwhelmed.
How to Display a Single Card for Multiple Products?
Create a Dynamic Component:

Build a single card component that accepts dynamic product details as props (e.g., product name, image, price).
Use Mapping:

Use array mapping to iterate over your list of products and render a card for each one. This keeps things scalable and efficient.
Pass Data Dynamically:

Pass unique product data (like name, price, and image) into each card to display relevant information.
Maintain Consistency:

Ensure that all product cards follow the same layout and design. This creates a uniform look and feel across the entire app.
Steps for Milestone 8 
Create the Card Component:

Design a reusable card component that takes in props (e.g., product name, image, price).
Make sure the card is flexible and can be used for any product.
Design the Homepage Layout:

Set up a grid layout or flexbox to display multiple cards neatly and evenly.
Ensure the cards are spaced properly and are responsive for different screen sizes.
Submission Guidelines 
Push Your Code:

Push your completed code to the same GitHub repository you’ve been using for previous milestones.
Ensure Repository is Public:

Make sure the repository is publicly accessible so your mentor can view your progress.
Update the README:

Add a new section to your README that summarizes the work you’ve done for Milestone 8.
Share the Repository Link:

After completing the steps, share your repository link in the assignment submission section.