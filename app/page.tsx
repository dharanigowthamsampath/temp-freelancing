import JobForm from "@/components/job-form";
import MenuBar from "@/components/menu-bar";
import SearchBar from "@/components/search-bar";
import UserCard from "@/components/user-card";

const dummyData = [
  {
    price: "4000",
    skills: ["Python", "Django", "Postgres"],
    tech: "Technical",
    location: "Chennai, Tamil Nadu",
    requirements: "Sample Data 1",
  },
  {
    price: "5000",
    skills: ["React", "Node.js", "MongoDB"],
    tech: "Full Stack",
    location: "Bangalore, Karnataka",
    requirements: "Sample Data 2",
  },
  {
    price: "3500",
    skills: ["Java", "Spring Boot", "MySQL"],
    tech: "Backend",
    location: "Mumbai, Maharashtra",
    requirements: "Sample Data 3",
  },
  {
    price: "4500",
    skills: ["Angular", "TypeScript", "Firebase"],
    tech: "Frontend",
    location: "Hyderabad, Telangana",
    requirements: "Sample Data 4",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row h-screen">
      <MenuBar />
      <div className="w-full md:w-1/3 flex flex-col">
        <div className="flex-grow flex justify-center items-center p-4 overflow-auto">
          <JobForm />
        </div>
      </div>
      <div className="h-full w-full md:w-2/3 p-4 overflow-auto">
        <SearchBar />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {dummyData.map((data, index) => (
            <UserCard
              key={index}
              price={data.price}
              skills={data.skills}
              tech={data.tech}
              location={data.location}
              requirements={data.requirements}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
