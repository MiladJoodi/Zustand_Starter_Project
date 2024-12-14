"use client"
import { useCounterStore, useUserStore } from "@/store";
import Link from "next/link";

export default function Home() {

  // Use Zustand
  const userStore = useUserStore();
  const counterStore = useCounterStore();

  return (
    <div className="">
      <div className="flex gap-2 p-2">
        <Link className="p-2 border" href="/">Home</Link>
        <Link className="p-2 border" href="/about">About</Link>
        <Link className="p-2 border" href="/contact">Contact</Link>
      </div>
      <h1>About</h1> 
      <h1>User: {userStore.user?.email}</h1>

      <br />
      <h1>Counter: {counterStore.counter}</h1>
      <button className="bg-blue-500 rounded-md text-white p-2" onClick={counterStore.increment}>
        Increment
      </button>
      <button className="bg-blue-500 rounded-md text-white p-2" onClick={counterStore.decrement}>
        Decrement
      </button>
      <button className="bg-blue-500 rounded-md text-white p-2" onClick={counterStore.reset}>
        Reset
      </button>
      
    </div>
  );
}
