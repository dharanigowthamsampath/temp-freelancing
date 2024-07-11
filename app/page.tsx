import JobForm from "@/components/job-form";
import MenuBar from "@/components/menu-bar";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row min-h-screen">
      <MenuBar />
      <div className="w-full md:w-1/3 flex flex-col">
        <div className="flex-grow flex justify-center items-center p-4 overflow-auto">
          <JobForm />
        </div>
      </div>
      <div className="w-full md:w-2/3"></div>
    </main>
  );
}
