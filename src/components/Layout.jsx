const Layout = ({ children }) => {
  return (
    <div className="layout">
      {children}

      {/* Add some global styles for spacing */}
      <style jsx>{`
        .layout {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        main {
          flex: 1;
        }
      `}</style>
    </div>
  );
};

export default Layout;