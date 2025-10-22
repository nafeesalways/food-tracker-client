import React, { Suspense } from "react";
import Banner from "./Banner";
import Reviews from "./Reviews";
import StorageTips from "./StorageTips";
import Framer from "./Framer";
import ExpiryItems from "./ExpiryItems";
import Expired from "./Expired";
import ExpiryStats from "./ExpiryStats";
import NewsLetterBox from "./NewsLetterBox";
import HowItWorks from "./HowItWorks";

const Home = () => {
  const itemsPromise = fetch(
    "https://food-tracker-server.vercel.app/items"
  ).then((res) => res.json());
  const expiredItemsPromise = fetch(
    "https://food-tracker-server.vercel.app/expiredItems"
  ).then((res) => res.json());
  return (
    <div>
      <Banner></Banner>
      <Suspense>
        <section className="mt-10">
          <ExpiryItems itemsPromise={itemsPromise}></ExpiryItems>
        </section>
      </Suspense>
      <Suspense>
        <section>
          <Expired expiredItemsPromise={expiredItemsPromise}></Expired>
        </section>
      </Suspense>
      <section>
        <HowItWorks></HowItWorks>
      </section>
      <section>
        <Framer></Framer>
      </section>
      <section className="mt-6">
        <Reviews></Reviews>
      </section>
      <section>
        <StorageTips></StorageTips>
      </section>
      <section>
        <ExpiryStats></ExpiryStats>
      </section>
      <section>
        <NewsLetterBox></NewsLetterBox>
      </section>
    </div>
  );
};

export default Home;
