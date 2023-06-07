
export const metadata = {
    title: 'Keeper',
    description : 'Store Notes while online'
}


const RootLayout = ({ children }) => {
  return (
    <html lang="en">
    <body>
        <div className="main">
        </div>
        <main className="app">
        {children}
        </main>
    </body>
    </html>
  )
}

export default RootLayout;