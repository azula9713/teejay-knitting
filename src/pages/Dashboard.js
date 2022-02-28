import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import * as MachineAPI from "../api/Machine";
import PageHeader from "../components/atoms/PageHeader";
import Footer from "../components/molecules/Footer";
import Header from "../components/molecules/Header";
import SideNAv from "../components/molecules/SideNAv";
import CountUp from "react-countup";
import ProgressBar from "@ramonak/react-progress-bar";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "RPM",
    },
  },
};

//generate 6 lables for 24 hours

function Dashboard() {
  const [machineData, setMachineData] = useState({});

  const fakeData = (RPM) => {
    let arr = [];
    //generate set of 6 numbers between RPM value
    for (let i = 0; i < 12; i++) {
      arr.push(Math.floor(Math.random() * RPM));
    }
    return arr;
  };

  const labels = [
    "00:00",
    "02:00",
    "04:00",
    "06:00",
    "08:00",
    "10:00",
    "12:00",
    "14:00",
    "16:00",
    "18:00",
    "20:00",
    "22:00",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "RPM",
        data: fakeData(machineData?.RPM),
        fill: true,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const { data: machineDetails, isLoading: machineDataLoading } = useQuery(
    "machineDetails",
    () => MachineAPI.getMachineDetails()
  );

  useEffect(() => {
    if (machineDetails?.data && machineDetails?.data?.length > 0) {
      console.log("data", machineDetails.data[0]);
      setMachineData(machineDetails.data[0]);
    }
  }, [machineDetails]);

  return (
    <div>
      <div className="flex gap-5">
        <div className=" hidden md:block">
          <SideNAv />
        </div>
        <div className=" w-full ml-0 md:ml-40 lg:ml-52 relative ">
          <Header />
          <PageHeader title="Machine Status" />
          <hr className="border-2 border-primary-0" />
          <div className="flex flex-wrap overflow-auto">
            <div className="p-3 min-w-full">
              <h1 className=" font-bold text-lg text-left  md:pl-20 lg:pl-20 xl:pl-2 ">
                Shift Time - Shift A
              </h1>
              <div className="my-3 md:w-full md:grid lg:grid-cols-4 md:grid-cols-2 gap-6 md:pl-20 lg:pl-20 xl:pl-2 ">
                <div className="w-full ">
                  <div className="w-full bg-white rounded-md p-3 shadow-md">
                    <table className="text-left p-3">
                      <thead>
                        <tr>
                          <td>Machine Id</td>
                          <td>-</td>
                          <td>123</td>
                        </tr>
                        <tr>
                          <td>Machine Name</td>
                          <td>-</td>
                          <td>Abcd efg</td>
                        </tr>
                        <tr>
                          <td>Quantity</td>
                          <td>-</td>
                          <td>3</td>
                        </tr>
                        <tr>
                          <td>Purpose</td>
                          <td>-</td>
                          <td>Lorem ipsium anorweign dorstep</td>
                        </tr>
                        <tr>
                          <td>Machine Id</td>
                          <td>-</td>
                          <td>123</td>
                        </tr>
                        <tr>
                          <td>Machine Id</td>
                          <td>-</td>
                          <td>123</td>
                        </tr>
                        <tr>
                          <td>Machine Id</td>
                          <td>-</td>
                          <td>123</td>
                        </tr>
                        <tr>
                          <td>Machine Id</td>
                          <td>-</td>
                          <td>123</td>
                        </tr>
                      </thead>
                    </table>
                  </div>
                  <div className="w-full bg-white shadow-md rounded-md mt-6">
                    <Bar options={options} data={data} />;
                  </div>
                </div>
                <div className="w-full ">
                  <div className="w-full py-14 bg-white shadow-md rounded-md text-theme_blue-0 text-lg font-bold flex justify-evenly">
                    <div>
                      <CountUp end={machineData?.Efficeincy} />%
                      <h1 className="font-bold text-black-0 text-xs">
                        Efficeincy
                      </h1>
                    </div>
                    <div>
                      <CountUp end={machineData?.["Run Time"]} />s
                      <h1 className="font-bold text-black-0 text-xs">
                        Run Time
                      </h1>
                    </div>
                    <div>
                      <CountUp end={machineData?.RPM} />

                      <h1 className="font-bold text-black-0 text-xs">RPM</h1>
                    </div>
                  </div>
                  <div className="w-full py-10 mt-6 px-5  bg-white shadow-md rounded-md text-sm font-bold ">
                    <div className="flex flex-col w-full  items-start">
                      <h3>Foundation completion</h3>
                      <ProgressBar
                        completed={60}
                        className="w-full "
                        bgColor={"#7DCF97"}
                      />
                    </div>
                    <div className="flex flex-col w-full  items-start mt-5">
                      <h3>Secondary Level completion</h3>
                      <ProgressBar
                        completed={60}
                        className="w-full "
                        bgColor={"#7DCF97"}
                      />
                    </div>
                  </div>
                  <div className="w-full py-10 mt-6 px-5  bg-white shadow-md rounded-md text-sm font-bold ">
                    <Line options={options} data={data} />
                  </div>
                </div>
                <div className="w-full ">
                  <div className="w-full py-5 px-5  bg-white shadow-md rounded-md text-sm  font-bold ">
                    <h6 className="text-left">Abcd Efg</h6>
                    <table className="border-collapse border border-slate-500 w-full">
                      <tbody>
                        <tr>
                          <td className="border border-slate-700 ...">
                            Indiana
                          </td>
                          <td className="border border-slate-700 ...">
                            Indianapolis
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-slate-700 ...">Ohio</td>
                          <td className="border border-slate-700 ...">
                            Columbus
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-slate-700 ...">
                            Michigan
                          </td>
                          <td className="border border-slate-700 ...">
                            Detroit
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-slate-700 ...">
                            Michigan
                          </td>
                          <td className="border border-slate-700 ...">
                            Detroit
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="w-full py-5 px-5  bg-white shadow-md rounded-md text-sm font-bold mt-6">
                    <h6 className="text-left">Abcd Efg</h6>
                    <table className="border-collapse  w-full">
                      <tbody>
                        <tr>
                          <td className="p-3 px-2 text-xs">
                            {" "}
                            <div className=" w-5 h-5 rounded-full bg-theme_dgreen-0"></div>
                          </td>
                          <td className="p-3 px-2 text-xs">Indiana</td>
                          <td className="p-3 px-2 text-xs">
                            <div className=" w-10 h-5  bg-theme_red-0 text-white">
                              {" "}
                              5
                            </div>
                          </td>
                          <td className="p-3 px-2 text-xs">10.01.20.345</td>
                        </tr>
                        <tr>
                          <td className="p-3 px-2 text-xs">
                            {" "}
                            <div className=" w-5 h-5 rounded-full bg-theme_dgreen-0"></div>
                          </td>
                          <td className="p-3 px-2 text-xs">Indiana</td>
                          <td className="p-3 px-2 text-xs">
                            <div className=" w-10 h-5  bg-theme_red-0 text-white">
                              {" "}
                              5
                            </div>
                          </td>
                          <td className="p-3 px-2 text-xs">10.01.20.345</td>
                        </tr>
                        <tr>
                          <td className="p-3 px-2 text-xs">
                            {" "}
                            <div className=" w-5 h-5 rounded-full bg-theme_dgreen-0"></div>
                          </td>
                          <td className="p-3 px-2 text-xs">Indiana</td>
                          <td className="p-3 px-2 text-xs">
                            <div className=" w-10 h-5  bg-theme_red-0 text-white">
                              {" "}
                              5
                            </div>
                          </td>
                          <td className="p-3 px-2 text-xs">10.01.20.345</td>
                        </tr>
                        <tr>
                          <td className="p-3 px-2 text-xs">
                            {" "}
                            <div className=" w-5 h-5 rounded-full bg-theme_dgreen-0"></div>
                          </td>
                          <td className="p-3 px-2 text-xs">Indiana</td>
                          <td className="p-3 px-2 text-xs">
                            <div className=" w-10 h-5  bg-theme_blue-0 text-white">
                              {" "}
                              5
                            </div>
                          </td>
                          <td className="p-3 px-2 text-xs">10.01.20.345</td>
                        </tr>
                        <tr>
                          <td className="p-3 px-2 text-xs">
                            {" "}
                            <div className=" w-5 h-5 rounded-full bg-theme_dgreen-0"></div>
                          </td>
                          <td className="p-3 px-2 text-xs">Indiana</td>
                          <td className="p-3 px-2 text-xs">
                            <div className=" w-10 h-5  bg-theme_blue-0 text-white">
                              {" "}
                              5
                            </div>
                          </td>
                          <td className="p-3 px-2 text-xs">10.01.20.345</td>
                        </tr>
                        <tr>
                          <td className="p-3 px-2 text-xs">
                            {" "}
                            <div className=" w-5 h-5 rounded-full bg-theme_dgreen-0"></div>
                          </td>
                          <td className="p-3 px-2 text-xs">Indiana</td>
                          <td className="p-3 px-2 text-xs">
                            <div className=" w-10 h-5  bg-theme_red-0 text-white">
                              {" "}
                              5
                            </div>
                          </td>
                          <td className="p-3 px-2 text-xs">10.01.20.345</td>
                        </tr>
                        <tr>
                          <td className="p-3 px-2 text-xs">
                            {" "}
                            <div className=" w-5 h-5 rounded-full bg-theme_dgreen-0"></div>
                          </td>
                          <td className="p-3 px-2 text-xs">Indiana</td>
                          <td className="p-3 px-2 text-xs">
                            <div className=" w-10 h-5  bg-theme_red-0 text-white">
                              {" "}
                              5
                            </div>
                          </td>
                          <td className="p-3 px-2 text-xs">10.01.20.345</td>
                        </tr>
                        <tr>
                          <td className="p-3 px-2 text-xs">
                            {" "}
                            <div className=" w-5 h-5 rounded-full bg-theme_dgreen-0"></div>
                          </td>
                          <td className="p-3 px-2 text-xs">Indiana</td>
                          <td className="p-3 px-2 text-xs">
                            <div className=" w-10 h-5  bg-theme_red-0 text-white">
                              {" "}
                              5
                            </div>
                          </td>
                          <td className="p-3 px-2 text-xs">10.01.20.345</td>
                        </tr>
                        <tr>
                          <td className="p-3 px-2 text-xs">
                            {" "}
                            <div className=" w-5 h-5 rounded-full bg-theme_dgreen-0"></div>
                          </td>
                          <td className="p-3 px-2 text-xs">Indiana</td>
                          <td className="p-3 px-2 text-xs">
                            <div className=" w-10 h-5  bg-lgreen-0 text-white">
                              {" "}
                              5
                            </div>
                          </td>
                          <td className="p-3 px-2 text-xs">10.01.20.345</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="w-full ">
                  <div className="w-full py-5 px-5  bg-white shadow-md rounded-md text-sm font-bold ">
                    <h6 className="text-left">Abcd Efg</h6>
                    <table className="border-collapse border border-slate-500 w-full">
                      <thead>
                        <tr>
                          <th className="border border-slate-600 bg-theme_lblue-0 text-white"></th>
                          <th className="border border-slate-600 bg-theme_lblue-0 text-white">
                            State
                          </th>
                          <th className="border border-slate-600 bg-theme_lblue-0 text-white">
                            City
                          </th>
                          <th className="border border-slate-600 bg-theme_lblue-0 text-white">
                            distric
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-slate-700 ...">
                            Indiana
                          </td>
                          <td className="border border-slate-700 ...">
                            Indianapolis
                          </td>
                          <td className="border border-slate-700 ...">1234</td>
                          <td className="border border-slate-700 ...">556</td>
                        </tr>
                        <tr>
                          <td className="border border-slate-700 ...">
                            Indiana
                          </td>
                          <td className="border border-slate-700 ...">
                            Indianapolis
                          </td>
                          <td className="border border-slate-700 ...">1234</td>
                          <td className="border border-slate-700 ...">556</td>
                        </tr>
                        <tr>
                          <td className="border border-slate-700 ...">
                            Indiana
                          </td>
                          <td className="border border-slate-700 ...">
                            Indianapolis
                          </td>
                          <td className="border border-slate-700 ...">1234</td>
                          <td className="border border-slate-700 ...">556</td>
                        </tr>
                        <tr>
                          <td className="border border-slate-700 ...">
                            Indiana
                          </td>
                          <td className="border border-slate-700 ...">
                            Indianapolis
                          </td>
                          <td className="border border-slate-700 ...">1234</td>
                          <td className="border border-slate-700 ...">556</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="w-full py-5 px-5  bg-white shadow-md rounded-md text-sm font-bold mt-6">
                    <h6 className="text-left">Abcd Efg</h6>
                    <table className="border-collapse  w-full">
                      <tbody>
                        <tr>
                          <td className="p-3 text-xs">218.123.456.7</td>
                          <td className="p-3 text-xs">Indiana</td>
                          <td className="p-3 text-xs text-theme_green-0">
                            Sucess
                          </td>
                        </tr>
                        <tr>
                          <td className="p-3 text-xs">218.123.456.7</td>
                          <td className="p-3 text-xs">Indiana</td>
                          <td className="p-3 text-xs text-theme_green-0">
                            Sucess
                          </td>
                        </tr>
                        <tr>
                          <td className="p-3 text-xs">218.123.456.7</td>
                          <td className="p-3 text-xs">Indiana</td>
                          <td className="p-3 text-xs text-theme_yellow-0">
                            Warning
                          </td>
                        </tr>
                        <tr>
                          <td className="p-3 text-xs">218.123.456.7</td>
                          <td className="p-3 text-xs">Indiana</td>
                          <td className="p-3 text-xs text-theme_yellow-0">
                            Warning
                          </td>
                        </tr>
                        <tr>
                          <td className="p-3 text-xs">218.123.456.7</td>
                          <td className="p-3 text-xs">Indiana</td>
                          <td className="p-3 text-xs text-theme_yellow-0">
                            Warning
                          </td>
                        </tr>
                        <tr>
                          <td className="p-3 text-xs">218.123.456.7</td>
                          <td className="p-3 text-xs">Indiana</td>
                          <td className="p-3 text-xs text-theme_green-0">
                            Sucess
                          </td>
                        </tr>
                        <tr>
                          <td className="p-3 text-xs">218.123.456.7</td>
                          <td className="p-3 text-xs">Indiana</td>
                          <td className="p-3 text-xs text-theme_red-0">
                            Error
                          </td>
                        </tr>
                        <tr>
                          <td className="p-3 text-xs">218.123.456.7</td>
                          <td className="p-3 text-xs">Indiana</td>
                          <td className="p-3 text-xs text-theme_red-0">
                            Error
                          </td>
                        </tr>
                        <tr>
                          <td className="p-3 text-xs">218.123.456.7</td>
                          <td className="p-3 text-xs">Indiana</td>
                          <td className="p-3 text-xs text-theme_green-0">
                            Sucess
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
