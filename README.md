# Tree Visualization Project

## Overview

This project is a web application that renders a tree structure with 10,000 nodes using Next.js, Redux, and TypeScript on the frontend, and NestJS on the backend. The application allows user registration and login, and dynamically generates a deep tree structure.

## Prerequisites

- Node.js (>=14.x)
- npm (>=6.x)

## Environment Variables

### Backend

Create a `.env` file in the `backend` directory with the following content:

```
DATABASE_URL=<your_mongo_database_url>
PORT=3000
```

## Setup

### Backend

1. Navigate to the `backend` directory:
    ```sh
    cd backend
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Start the NestJS server:
    ```sh
    npm run start:dev
    ```

### Frontend

1. Navigate to the `frontend` directory:
    ```sh
    cd frontend
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Start the Next.js development server:
    ```sh
    npm run dev
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3001`.
2. Register a new user by entering a username.
3. After registration, the tree structure with 10,000 nodes will be displayed.

## Code Explanation

### Backend

- **`user.controller.ts`**: Contains the user registration logic.
- **`user.service.ts`**: Handles user-related services.

### Frontend

- **`page.tsx`**: Main page that includes the user input and tree display components.
- **`layout.tsx`**: Layout file for consistent UI across the application.
- **`UserInput.tsx`**: Component for user registration input.
- **`TreeDisplay.tsx`**: Component for displaying the tree structure.
- **`treeSlice.ts`**: Redux slice for managing tree state.
- **`userSlice.ts`**: Redux slice for managing user state.
- **`TreeGenerator.ts`**: Utility function for generating a tree structure with 10,000 nodes.

## Troubleshooting

### Common Issues

- **CORS Policy Errors**: Ensure that the backend server has CORS enabled.
- **Stack Overflow Errors**: Ensure that tree generation logic is optimized and does not cause infinite recursion.
- **Missing Modules**: Ensure all required packages are installed using `npm install`.

## Additional Features (To be implemented)

- **Undo/Redo Functionality**: Implement functionality to undo/redo node updates.
- **UI Enhancements**: Add performance enhancements such as memoization or advanced state management techniques.

## Contributing

Feel free to open issues or submit pull requests for any improvements or bug fixes.

## License

This project is licensed under the MIT License.

---

This README file includes the project overview, setup instructions, environment variable configurations, usage instructions, and code explanations. The sections for additional features and contributing provide guidance for further development and collaboration.
