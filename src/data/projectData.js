export const projects = [
  {
    id: 1,
    title: "Iron Store Management System",
    description: "A comprehensive inventory and billing solution for iron and cement stores with role-based dashboards and real-time tracking.",
    longDescription: "This enterprise-level system revolutionizes traditional iron store management by digitizing all operations. Built with ASP.NET MVC and Entity Framework, it includes modules for inventory management, customer relationship management, sales tracking, financial reporting, and employee management. The system supports multi-user roles with different permission levels, ensuring data security and operational efficiency.",
    technologies: ["ASP.NET MVC", "Entity Framework", "C#", "SQL Server", "JavaScript", "Chart.js", "HTML5/CSS3", "Bootstrap 5", "jQuery", "REST APIs"],
    features: [
      "Role-based authentication system (Admin/Manager/Worker)",
      "Real-time inventory tracking with automated stock alerts",
      "Automated billing and professional invoice generation",
      "Customer management with credit tracking and payment history",
      "Expense management and salary calculation module",
      "Monthly profit/loss calculation with Chart.js visualizations",
      "Sales reporting and analytics dashboard",
      "Stock alerts and automated reordering suggestions",
      "Multi-branch support and centralized management",
      "Export functionality for reports (PDF, Excel)"
    ],
    github: "https://github.com/muneeb2346/iron-store-management",
    liveDemo: null,
    image: "/images/iron-store-system.jpg",
    category: "Full Stack",
    status: "Completed",
    duration: "3 months",
    challenges: [
      "Implementing real-time stock updates across multiple users",
      "Designing an intuitive dashboard for non-technical users",
      "Optimizing database queries for large inventory datasets"
    ],
    solutions: [
      "Used SignalR for real-time updates and notifications",
      "Implemented a clean, card-based UI with clear visual indicators",
      "Added database indexing and query optimization techniques"
    ]
  },
  {
    id: 2,
    title: "Weather Application",
    description: "Cross-platform weather app with real-time forecasts, adaptive UI themes, and location-based services.",
    longDescription: "A feature-rich weather application built with Flutter that provides accurate forecasts with beautiful visualizations. The app adapts its theme based on current weather conditions, providing an immersive user experience. It includes features like location-based forecasts, weather alerts, and detailed meteorological data. Built following clean architecture principles for maintainability and scalability.",
    technologies: ["Flutter", "Dart", "OpenWeather API", "Provider", "Clean Architecture", "Google Maps API", "Firebase", "REST APIs", "JSON"],
    features: [
      "Real-time weather data from OpenWeather API",
      "Adaptive UI themes based on weather conditions (sunny/rainy/snowy)",
      "Location-based forecasts using GPS and network location",
      "7-day weather forecast with hourly breakdowns",
      "Weather alerts and notification system",
      "Beautiful animations and smooth transitions",
      "Offline data caching for poor connectivity",
      "Cross-platform support (iOS & Android)",
      "Multiple temperature units (Celsius/Fahrenheit)",
      "Air quality index and UV index display"
    ],
    github: "https://github.com/muneeb2346/weather-app",
    liveDemo: null,
    image: "/images/weather-app.jpg",
    category: "Mobile",
    status: "Completed",
    duration: "2 months",
    challenges: [
      "Managing state across multiple weather data sources",
      "Implementing smooth animations for weather transitions",
      "Handling location permissions across different platforms"
    ],
    solutions: [
      "Used Provider for efficient state management",
      "Implemented Flutter's animation controllers for smooth transitions",
      "Created a permission handler utility class"
    ]
  },
  {
    id: 3,
    title: "Inventory Management System",
    description: "Web-based inventory system with secure authentication, real-time tracking, and business analytics.",
    longDescription: "A comprehensive inventory management solution designed specifically for iron and hardware stores. Built with Java Servlets and JSP following MVC architecture, the system tracks stock levels, manages suppliers and customers, processes sales, and generates detailed reports. It helps businesses maintain optimal inventory levels and reduce operational costs through data-driven insights.",
    technologies: ["Java", "Java Servlets", "JSP", "JavaScript", "HTML5/CSS3", "Apache Tomcat", "MySQL", "Bootstrap 4", "Chart.js", "jQuery"],
    features: [
      "Secure user authentication and role-based authorization",
      "Real-time stock tracking with automated low-stock alerts",
      "Sales processing with automated invoicing system",
      "Supplier and customer relationship management",
      "Comprehensive analytics and reporting dashboard",
      "Barcode scanning support for quick inventory updates",
      "Multi-location inventory management",
      "Purchase order generation and tracking",
      "Profit margin calculation and sales analytics",
      "Data export capabilities (CSV, PDF)"
    ],
    github: "https://github.com/muneeb2346/inventory-system",
    liveDemo: null,
    image: "/images/inventory-system.jpg",
    category: "Full Stack",
    status: "Completed",
    duration: "2.5 months",
    challenges: [
      "Implementing secure session management",
      "Optimizing database for concurrent user access",
      "Creating responsive reports for mobile devices"
    ],
    solutions: [
      "Used HttpSession with proper timeout handling",
      "Implemented database connection pooling",
      "Designed responsive reports using Chart.js and CSS media queries"
    ]
  }
];