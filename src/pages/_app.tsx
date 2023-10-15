import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { api } from "@/components/utils/api";

import "@/components/styles/globals.css";
import Navbar from "@/components/components/Navbar";
import NewsCard from "../components/Newscard";
import Footer from "../components/Footer";
import NewsCards from "../components/NewsCards";
import Image from "next/image";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <div className="flex min-h-screen flex-col bg-gray-900 font-serif text-gray-600">
        {/* <Image
          src="/images/header-image.png"
          alt="BJO Logo"
          layout="responsive"
          width={1440}
          height={400}
          className="h-[200px] w-[90vw] object-cover"
        /> */}
        <div className="m-4 mx-auto w-full max-w-5xl rounded border border-gray-400 bg-gray-200 p-6 shadow">
          <Navbar />
          <NewsCards />
          <div className="flex items-center justify-between p-6">
            {/* Add your group image here */}
          </div>
          <div className="p-6">
            <Component {...pageProps} />
          </div>
        </div>
        <Footer />
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
