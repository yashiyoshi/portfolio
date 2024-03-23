import { Nunito } from "next/font/google";

const nunito = Nunito({ 
  subsets: ["latin"],
  weight: "600",
 });

export default function Home() {
  return (
    <div className={nunito.className}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-main1">
        <h1 className=" text-main2 text-7xl">Hey! I am Yassir Utara.</h1>
        <h2 className="items-center">front end developer</h2>

      </main>
    </div>

  );
}
