# Mercado Express - React Application

A modern e-commerce application for fresh market products, built with React, Vite, and styled-components.

## Features

- **Admin Dashboard**: Complete management system for categories, products, orders, and payments
- **Client Store**: User-friendly shopping experience with cart, checkout, and order tracking
- **Authentication**: Login/register system with demo accounts
- **Responsive Design**: Mobile-first approach with responsive layout
- **Modern UI**: Clean, modern interface using styled-components
- **Fast Development**: Powered by Vite for lightning-fast hot reload

## Tech Stack

- **React 18** - Modern React with hooks
- **React Router** - Client-side routing
- **Styled Components** - CSS-in-JS styling
- **Lucide React** - Beautiful icon library
- **Vite** - Next generation frontend tooling

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone or download the project
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Demo Accounts

The application includes demo accounts for testing:

- **Admin**: admin@demo.com / 123456
- **Client**: cliente@demo.com / 123456

## Project Structure

```
src/
├── components/          # React components
│   ├── AuthPage.jsx     # Login/Register page
│   ├── AdminDashboard.jsx # Admin panel
│   ├── ClientStore.jsx   # Customer store
│   ├── Loader.jsx       # Loading spinner
│   └── Toast.jsx        # Notification component
├── data/               # Sample data
│   └── sampleData.js   # Categories, products, orders data
├── styles/             # Global styles
│   └── global.css      # CSS variables and global styles
├── App.jsx             # Main application component
└── main.jsx           # Application entry point
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Features Overview

### Admin Panel
- Dashboard with statistics and recent orders
- Category management (CRUD operations)
- Product catalog management
- Order processing and status updates
- Payment verification system

### Client Store
- Product browsing by categories
- Product search and filtering
- Shopping cart functionality
- Secure checkout process
- Order history and tracking
- User profile management

### Authentication
- User registration and login
- Demo account access
- Session management
- Protected routes

## Future Enhancements

- Real backend API integration
- Payment gateway integration
- Real-time order updates
- Push notifications
- Advanced search and filters
- Inventory management
- Multi-language support
- PWA capabilities

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.