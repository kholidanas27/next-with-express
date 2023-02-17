import Link from "next/link";

function UserRoute() {
  return (
    <ul>
      <li>
        <Link href="/">UserList</Link>
      </li>
      <li>
        <Link href="/user">About Us</Link>
      </li>
      <li>
        <Link href="/blog/hello-world"></Link>
      </li>
    </ul>
  );
}

export default UserRoute;
