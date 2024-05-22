# Next.js Starter Template with shadcn/ui

![Next.js](https://img.shields.io/badge/Next.js-11-black?style=for-the-badge&logo=next.js)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-1.0-blue?style=for-the-badge)

This starter template combines the power of Next.js with the user-friendly UI components from shadcn/ui. It provides a solid foundation for the rapid development of modern web applications.

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Usage](#usage)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/YourUsername/nextjs-shadcn-starter.git
    ```
2. Navigate to the project directory:
    ```bash
    cd nextjs-shadcn-starter
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm run dev
    ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to see your application.

## Features

- **Next.js**: A powerful React framework with server-side rendering and static site generation.
- **shadcn/ui**: A collection of easy-to-use UI components that seamlessly integrate into your project.
- **TypeScript**: Statically typed language for developing robust and scalable code.
- **ESLint and Prettier**: Tools for consistent code quality and formatting.

## Usage

### Importing Components

Use the pre-built components from shadcn/ui in your pages and components:

```tsx
import { Button } from 'shadcn/ui';

const HomePage = () => (
  <div>
    <h1>Welcome to Next.js with shadcn/ui</h1>
    <Button>Click Me</Button>
  </div>
);

export default HomePage;
```

### Customizing Styles

Customize the global styles in the `styles` folder and use Tailwind CSS to create custom designs.

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the production version.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint for code verification.

## Contributing

Contributions are welcome! Please fork the repository and open pull requests to suggest changes.

## License

This project is licensed under the MIT License. For more information, see the [LICENSE](LICENSE) file.