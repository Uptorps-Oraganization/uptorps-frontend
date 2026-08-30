import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ContextHandlers/ThemeProvider";
import { useEffect, useState } from "react";
import { apiStatusCheck } from "@/apirequests/generalrequests";
import { get_All_Citizens } from "@/apirequests/citizenrequests";
import type { Citizen } from "@/typesninterfaces/datatypes";

const Homepage = () => {
  const { theme, setTheme } = useTheme();
  const [apitext, setApiText] = useState("");
  const [citizens, setCitizens] = useState<Citizen[]>([]);

  useEffect(() => {
    apiStatusCheck()
      .then((data) => {
        if (data.status == "success") {
          setApiText(data.message);
          return;
        }
      })
      .catch((err) => {
        setApiText(`Could not Reach API ${err}`);
      });

    get_All_Citizens()
      .then((data) => {
        if (data) {
          setApiText("Showing Citizens");
          setCitizens(data);
          return;
        }
      })
      .catch((err) => {
        setApiText(`Could not Reach Citizens API ${err}`);
      });
  }, []);

  return (
    <div className="flex flex-col w-full h-full">
      <header className="flex flex-col sm:flex-col md:flex-row justify-around items-center p-2">
        <h1 className="flex-1 font-sans text-3xl">Uptorps</h1>
        <p className="text-[12px]">{theme}</p>
        <Button onClick={() => setTheme("system")} className="bg-blue-500 dark:bg-green-900 m-5 rounded-2xl">
          System
        </Button>
        <Button onClick={() => setTheme("light")} className="bg-blue-500 dark:bg-green-900">
          Light
        </Button>
        <Button onClick={() => setTheme("dark")} className="bg-blue-500 dark:bg-green-900 m-5">
          Dark
        </Button>
      </header>

      <main className="flex-1 flex flex-col justify-center items-center">
        <p className="text-1xl font-bold my-2">
          API Status: <span className="text-green-950">{apitext}</span>
        </p>

        <div className="flex flex-col space-y-2">
          {citizens.map((citizen, index) => {
            return (
              <div key={index} className="flex items-stretch p-2 border-2 border-green-300/20 rounded-[10px] min-w-120 space-x-1">
                <section className="w-[40%] flex flex-col justify-center items-center p-2 bg-green-950 rounded-[8px] border">
                  <span className="text-white text-[14px] font-bold">User ID</span>
                  <span className="text-white text-[50px] font-bold">{citizen.id}</span>
                </section>
                <section className="w-full flex flex-col items-start p-2 bg-amber-600 rounded-[8px] border">
                  {Object.entries(citizen).map((value, index) => (
                    <span key={index} className="text-[12px]">
                      <b>{value[0].toUpperCase()}:</b> {value[1]}
                    </span>
                  ))}
                </section>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Homepage;
