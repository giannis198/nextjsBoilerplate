export const metadata = {
  title: "",
  description: "",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main"></div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
