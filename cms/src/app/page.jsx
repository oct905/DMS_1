"use server";
import NavBar from "@/components/NavBar";
import Table from "@/components/Table";
import { fetchData } from "@/services/fetchUser";

const Home = async () => {
  let data = await fetchData();

  return (
    <main className="main">
      <NavBar />
      <div className="container">
        {data === "error" || !data ? (
          <span className="text-red-700">
            You are not authorized to view this page1
          </span>
        ) : (
          <Table data={data} />
        )}
      </div>
    </main>
  );
};

export default Home;
