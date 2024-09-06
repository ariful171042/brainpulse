# BrainPlus

**BrainPlus** is a quiz system designed to test and challenge your brain. Built using Next.js, TypeScript, and Tailwind CSS, it provides a sleek and interactive user interface. The backend is integrated with MongoDB using Mongoose to store quiz data and user progress.

## Features

- **Quiz System**: Dynamic quiz generation to test users' knowledge.
- **Authentication**: Integrated with Clerk for user authentication.
- **Email Integration**: Uses EmailJS to send notifications and results.
- **Interactive Animations**: Framer Motion provides smooth transitions and animations.
- **Real-time Toast Notifications**: Uses React Hot Toast for real-time feedback.
- **Database**: MongoDB for storing quizzes, questions, and user information.
- **Responsive Design**: Built with Tailwind CSS for responsive and customizable styling.

## Getting Started

### Prerequisites

- Node.js >= 18
- MongoDB

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/arifnextdev/brainplus.git
   cd brainplus
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file for environment variables:

   ```bash
   MONGODB_URI=your_mongodb_uri
   NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
   NEXT_PUBLIC_CLERK_API_KEY=your_clerk_api_key
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Build for production:

   ```bash
   npm run build
   ```

6. Start the production server:

   ```bash
   npm start
   ```

### Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm start`: Start the production server.
- `npm run lint`: Run ESLint checks.

## License

This project is licensed under the MIT License.

