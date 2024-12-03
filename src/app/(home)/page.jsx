import Header from "@/layouts/header/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header />
      <Link href="login">
        <h2>로그인 페이지로 이동</h2>
      </Link>
    </main>
  );
}
