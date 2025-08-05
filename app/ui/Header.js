import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h2>GRADEDGE</h2>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/cv">Cv</Link>
          </li>
          <li>
            <Link href="/cover-letter">Cover Letter</Link>
          </li>
          <li>
            <Link href="/ats-checker">ATS Checker</Link>
          </li>
          <li>
            <Link href="/features">Features</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
