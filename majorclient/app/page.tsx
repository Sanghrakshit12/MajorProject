import Image from "next/image";
import Navbar from "@/app/Component/Navbar";
import { Container } from "@/app/Component/Container";
export default function Admin() {
  return (
    <>
    <Navbar />

    <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-6 md:p-12 lg:p-16 xl:p-24">
      <div className="flex items-center w-full">
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 bg-blue-600 rounded-sm"></div>
            <h2 className="font-semibold text-xl lg:text-2xl text-blue-600">
              NIT JALANDHAR
            </h2>
          </div>
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight tracking-tight text-white-800 dark:text-blue-500">
          Training and Placement Cell Management
          </h1>
          <p className="py-4 text-md md:text-xl xl:text-xl leading-relaxed text-white-600 dark:text-blue-500">
          The Placement Cell Management System streamlines the campus recruitment process by enabling students to register, log in, and explore current job and internship opportunities. The system securely stores both academic and personal details of registered students and manages comprehensive data about companies offering roles to eligible candidates.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center w-full">
      <Image
            src={"/nitj.jpeg"}
            alt="Icon"
            width={700}
            height={700}
            className="object-cover rounded-3xl shadow-2xl border-4 border-gray-200 dark:border-gray-700"
          />
        
      </div>
    </Container>
    </>
  );
}