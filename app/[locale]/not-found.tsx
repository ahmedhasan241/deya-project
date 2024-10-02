import Image from "next/image";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-10 w-full h-screen justify-center items-center">
      <div className="relative w-full min-h-[50vh]">
        <Image src={"/imgs/404.png"} fill alt="404 page" />
      </div>
      <Link
        href="/"
        className="flex w-fit text-white gap-1 items-center py-4 px-12 bg-primary rounded"
      >
        {" "}
        <FaArrowLeftLong />
        Back to home
      </Link>
    </div>
  );
}
