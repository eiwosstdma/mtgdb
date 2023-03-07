import Link from 'next/link.js';
export default function Layout({ children }) {
  return (
    <>
      <nav className="container">
        <ul>
          <li style={{ fontSize: '2em', color: 'white' }}>MTGDB</li>
        </ul>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/cards">Cards</Link></li>
        </ul>
      </nav>

      <main className="container">{ children }</main>
    </>
  )
}
