import Head from "next/head"
import React from "react";

const ScrollPage = () => {
  const testFunction = (e) => {
    console.log(e)
  }
  return (
    <div>
      <Head>
        <title>Scrollアニメーション</title>
      </Head>
      <div className="h-screen pt-32">
        <div className="relative">
          <h1 onClick={testFunction} className="js--splitting text-slate-700 font-extrabold text-8xl leading-normal tracking-wider pl-32">
            ひとつのサービスで、
            <br />
            世界を変える。
          </h1>
          <p className="absolute top-0 right-24 font-extrabold text-6xl text-slate-300 tracking-wider leading-tight whitespace-nowrap" style={{ writingMode: 'vertical-rl' }}>
            Changing the world<br />with single service.
          </p>
          <div className="flex justify-end mt-24">
            <div className="w-4/5">
              <img className="w-full h-full object-cover" src="/images/image02.jpeg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollPage;
