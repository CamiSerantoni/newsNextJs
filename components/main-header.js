import Link from "next/link";

export default function MainHeader() {
  return (
    <header>
      <ul className="main-header">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/news">News</Link>
        </li>
      </ul>
    </header>
  );
}
