import Image from "next/image";
import Navbar from "@/app/Component/Navbar";
export default function Admin() {

  return (
    <div>
      <Navbar />
      <div className="flex flex-col sm:flex-row">
        <div className=" m-2 w-4/5 sm:mx-24  sm:w-1/3">
          <div className="w-full  rounded-md p-4  text-white sm:p-8">
            <h2 className="m-3 mb-8 font-sans text-4xl font-bold transition-all hover:scale-105 sm:text-6xl ">

            </h2>
            <p className="text-md m-3 pt-3 font-serif text-slate-500 sm:text-xl">

            </p>
          </div>
          <div className="flex justify-end py-3">
          </div>
        </div>
        <div className="mx-auto mt-12 flex  w-1/2 items-center justify-center ">
          <Image
            src={"/nitj.jpeg"}
            alt="Icon"
            width={1300}
            height={1300}
            className=""
          />
        </div>
      </div>
    </div>
  );
}