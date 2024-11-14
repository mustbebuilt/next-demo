import Navbar from './Components/Navbar';
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>

      <Navbar />
        <header>
          <h1>Welcome</h1>
        </header>
     
        {children}
        
        <footer>
          &copy; 2024
        </footer>
        
        </body>
    </html>
  );
}