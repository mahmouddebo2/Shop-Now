"use client";

import Container from "@/components/Container";
import { resetCart } from "@/redux/proSlice";
import { Check } from "lucide-react";
import Link from "next/link";
import { useEffect as effect } from "react";
import { useDispatch as usedispatches } from "react-redux";

const page = () => {
  const dispatch = usedispatches();
  effect(() => {
    dispatch(resetCart());
  }, []);

  return (
    <Container className="flex items-center justify-center py-20">
      <div className="min-h-[400px] flex flex-col items-center justify-center gap-y-5">
        <h2 className="text-4xl font-bold flex items-center justify-center gap-x-1 ">
          <Check size={50} color="#48D35A" />
          <Check size={50} color="#48D35A" />
          Your Payment Accepted by ShopNow.com
        </h2>
        <p>Now you can view your Orders or continue Shpping with us</p>
        <div className="flex items-center gap-x-5">
          {/* <Link href={"/order"}>
            <button className="bg-black text-slate-100 w-44 h-12 rounded-full text-base font-semibold hover:bg-designColor duration-300">
              View Orders
            </button>
          </Link> */}
          <Link href={"/"}>
            <button className="bg-black text-slate-100 w-44 h-12 rounded-full text-base font-semibold hover:bg-designColor duration-300">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default page;
