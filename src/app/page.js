import Image from "next/image";
import Header from "./Components/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h2>Hello world</h2>
     <Header/>
    </main>
  );
}
