import { authOptions } from "@/auth";
import PricingCard from "@/components/PricingCard";
import { getServerSession } from "next-auth";
import React from "react";

async function page() {
  const session  = await getServerSession(authOptions)
  return (
    <div className="isolate h-full overflow-hidden bg-gray-900 pb-40">
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-16 text-white text-center lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Lets handle your Membership {session?.user?.name?.split(' ')?.[0]}!
          </p>
        </div>
        <div className="relative">
          <svg
            viewBox="0 0 1208 1024"
            className="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
          >
            <ellipse
              cx="604"
              cy="512"
              fill="url(#radial-gradient)"
              rx="604"
              ry="512"
            ></ellipse>
            <defs>
              <radialGradient id="radial-gradient">
                <stop stop-color="#7775D6"></stop>
                <stop offset="1" stop-color="#E935C1"></stop>
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      {/* cards */}
      <PricingCard redirect={false}/>
    </div>
  );
}

export default page;
