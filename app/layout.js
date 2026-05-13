import './globals.css'

export const metadata = {
  title: 'Swarna Dey',
  description:
    'Portfolio of Swarna Dey - sociology graduate, art club founder, youth engagement specialist, and community builder based in Jyväskylä, Finland.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
