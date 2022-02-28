import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useQuery } from "react-query";
import * as MachineAPI from "../api/Machine";
import { allMachineDataState } from "../atoms/MachineAtom";
import PageHeader from "../components/atoms/PageHeader";
import StatusCard from "../components/atoms/StatusCard";
import StatusCardDanger from "../components/atoms/StatusCardDanger";
import StatusCardWarning from "../components/atoms/StatusCardWarning";
import Footer from "../components/molecules/Footer";
import Header from "../components/molecules/Header";
import SideNAv from "../components/molecules/SideNAv";

function Home() {
  const [allMachines, setAllMachines] = useRecoilState(allMachineDataState);

  const { data: machineData, isLoading: machinesLoading } = useQuery(
    "allMachineData",
    () => MachineAPI.getMachineStatus()
  );

  useEffect(() => {
    if (machineData) {
      setAllMachines(machineData.data);
    }
  }, [machineData]);

  if (machinesLoading) {
    return (
      <div>
        <div className="flex gap-5">
          <div className=" hidden md:block">
            <SideNAv />
          </div>
          <div className="ml-0 md:ml-40 lg:ml-52 relative ">
            <Header />
            <div>
              <PageHeader title="Machine Status" />
              <hr className="border-2 border-primary-0" />
              <div className="w-full  overflow-auto justify-center">
                {/* <Skeleton /> */}
                Loading
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (machineData?.data) {
    return (
      <div>
        <div className="flex gap-5">
          <div className=" hidden md:block">
            <SideNAv />
          </div>
          <div className="ml-0 md:ml-40 lg:ml-52 relative ">
            <Header />
            <div>
              <PageHeader title="Machine Status" />
              <hr className="border-2 border-primary-0" />
              <div className="flex flex-wrap overflow-auto justify-center">
                {allMachines?.map((machine, index) => {
                  if (machine.Status === "Running") {
                    return <StatusCard key={index} cardData={machine} />;
                  } else if (machine.Status === "Stop") {
                    return <StatusCardDanger key={index} cardData={machine} />;
                  } else if (machine.Status === "Warning") {
                    return <StatusCardWarning key={index} cardData={machine} />;
                  }
                })}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Home;
