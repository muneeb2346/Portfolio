export const projects = [
  {
    id: 1,
    title: "Iron Store Management System",
    description: "A comprehensive inventory and billing solution built with ASP.NET MVC and Entity Framework. Developed a role-based system with Admin/Worker dashboards featuring real-time sales tracking, customer management, automated billing, and financial reporting. Implemented features like expense tracking, salary management, and monthly profit calculation using Chart.js visualizations. The system streamlines iron and cement store operations with automated stock updates, pending balance tracking, and professional invoice generation.",
    longDescription: "This system revolutionizes traditional iron store management by digitizing all operations. It includes modules for inventory management, customer relationship management, sales tracking, financial reporting, and employee management. The system supports multi-user roles with different permission levels, ensuring data security and operational efficiency.",
    technologies: ["ASP.NET MVC", "Entity Framework", "C#", "SQL Server", "JavaScript", "Chart.js", "HTML/CSS", "Bootstrap"],
    features: [
      "Role-based authentication (Admin/Worker)",
      "Real-time inventory tracking",
      "Automated billing and invoicing",
      "Customer management with credit tracking",
      "Expense and salary management",
      "Profit/loss calculation with Chart.js visualizations",
      "Sales reporting and analytics",
      "Stock alerts and reordering suggestions"
    ],
    github: "https://github.com/muneeb2346/iron-store-management",
    liveDemo: null,
    image: "/images/iron-store-system.jpg",
    category: "Full Stack"
  },
  {
    id: 2,
    title: "Weather APP",
    description: "Engineered a responsive cross-platform weather application using Flutter framework, implementing clean architecture principles for enhanced scalability and maintainability. Integrated OpenWeather API to fetch and process real-time meteorological data, enabling dynamic weather forecasting across global locations. Designed adaptive UI themes that shift visually based on live weather conditions (e.g., sunny/rainy modes) and geographic context.",
    longDescription: "A feature-rich weather application that provides accurate forecasts with beautiful visualizations. The app adapts its theme based on current weather conditions, providing an immersive user experience. It includes features like location-based forecasts, weather alerts, and detailed meteorological data.",
    technologies: ["Flutter", "Dart", "OpenWeather API", "Clean Architecture", "Provider"],
    features: [
      "Real-time weather data from OpenWeather API",
      "Adaptive UI themes based on weather conditions",
      "Location-based forecasts",
      "7-day weather forecast",
      "Weather alerts and notifications",
      "Beautiful animations and transitions",
      "Offline data caching",
      "Cross-platform (iOS & Android)"
    ],
    github: "https://github.com/muneeb2346/weather-app",
    liveDemo: null,
    image: "/images/weather-app.jpg",
    category: "Mobile"
  },
  {
    id: 3,
    title: "Iron Inventory System",
    description: "Engineered a full-stack web-based inventory management system implementing secure user authentication and real-time stock tracking to optimize supply chain visibility. Developed business-critical modules including sales processing, automated invoicing, and analytics reporting using Java Servlets and JSP for robust MVC architecture. Deployed production environment on Apache Tomcat server, achieving 30% improvement in inventory workflow efficiency and data accuracy.",
    longDescription: "A comprehensive inventory management solution designed specifically for iron and hardware stores. The system tracks stock levels, manages suppliers and customers, processes sales, and generates detailed reports. It helps businesses maintain optimal inventory levels and reduce operational costs.",
    technologies: ["Java", "Java Servlets", "JSP", "JavaScript", "HTML/CSS", "Apache Tomcat", "MySQL", "Bootstrap"],
    features: [
      "Secure user authentication and authorization",
      "Real-time stock tracking and alerts",
      "Sales processing with automated invoicing",
      "Supplier and customer management",
      "Analytics and reporting dashboard",
      "Barcode scanning support",
      "Multi-location inventory management",
      "Purchase order generation"
    ],
    github: "https://github.com/muneeb2346/inventory-system",
    liveDemo: null,
    image: "/images/inventory-system.jpg",
    category: "Full Stack"
  }
];