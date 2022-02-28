import React, { useEffect, useState } from "react";
import Pagination from "@createnl/pagination";
import { useQuery } from "react-query";
import * as WeeklyPlanAPI from "../api/WeeklyPlan";
import PageHeader from "../components/atoms/PageHeader";
import Footer from "../components/molecules/Footer";
import Header from "../components/molecules/Header";
import SideNAv from "../components/molecules/SideNAv";

const WeeklyPlan = () => {
  const pageSize = 9;
  const [weeklyPlans, setWeeklyPlans] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const { data: weeklyPlanData, isLoading } = useQuery("weeklyPlans", () =>
    WeeklyPlanAPI.getWeeklyPlans()
  );

  function handlePageClick(page) {
    setCurrentPage(page);
  }

  useEffect(() => {
    if (weeklyPlanData?.data) {
      setWeeklyPlans(weeklyPlanData.data);
    }
  }, [weeklyPlanData]);

  useEffect(() => {
    if (weeklyPlans.length) {
      console.log("weeklyPlans", weeklyPlans);
      setPageCount(Math.ceil(weeklyPlans.length / pageSize));
      if (currentPage === 1) {
        setPaginatedData(weeklyPlans.slice(0, pageSize));
      } else {
        setPaginatedData(
          weeklyPlans.slice(
            (currentPage - 1) * pageSize,
            currentPage * pageSize
          )
        );
      }
    }
  }, [currentPage, weeklyPlans]);

  if (isLoading) {
    return (
      <div className=" w-screen">
        <div className="flex gap-5">
          <div className=" hidden md:block">
            <SideNAv />
          </div>
          <div className="ml-0 md:ml-40 lg:ml-52 relative w-full">
            <Header />
            <div>
              <PageHeader title="Machine Status" />
              <hr className="border-2 border-primary-0" />
              <div className="flex flex-wrap overflow-auto">
                <div className="p-3 w-full">
                  <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-12 px-4 w-full">
                    {/* Search */}
                    <div className="flex relative mx-auto max-w-md w-full">
                      <input
                        className="border-2 border-primary bg-red transition h-12 px-5 pr-16 rounded-md focus:outline-none w-full text-black text-lg "
                        type="search"
                        name="search"
                        placeholder="Search"
                      />
                      <button
                        type="submit"
                        className="absolute right-2 top-3 mr-4"
                      >
                        <svg
                          className="text-black h-6 w-6 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          version="1.1"
                          id="Capa_1"
                          x="0px"
                          y="0px"
                          viewBox="0 0 56.966 56.966"
                          style={{ enableBackground: "new 0 0 56.966 56.966" }}
                          xmlSpace="preserve"
                          width="512px"
                          height="512px"
                        >
                          <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                        </svg>
                      </button>
                    </div>

                    {/* Plan Uploader */}
                    <div className="flex flex-col lg:flex-row items-start justify-center border-2 p-2 my-2 w-max lg:space-x-4">
                      <span className="font-bold lg:whitespace-nowrap">
                        Uplaod a new plan:
                      </span>
                      <input type="file" id="fileInput" />
                    </div>
                    {/* Button Container */}
                    <div className="flex items-center justify-start p-2 my-2 w-full space-x-4">
                      <button className="p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg rounded-lg hover:border-4 border-blue-300">
                        Submit
                      </button>
                      <button className="p-2 pl-5 pr-5 bg-red-500 text-gray-100 text-lg rounded-lg hover:border-4 border-red-300">
                        Clear
                      </button>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="w-full">
                      <div className="bg-white rounded my-6 w-full">
                        Loading...
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className=" w-screen">
      <div className="flex gap-5">
        <div className=" hidden md:block">
          <SideNAv />
        </div>
        <div className="ml-0 md:ml-40 lg:ml-52 relative w-full">
          <Header />
          <div>
            <PageHeader title="Machine Status" />
            <hr className="border-2 border-primary-0" />
            <div className="flex flex-wrap overflow-auto">
              <div className="p-3 w-full">
                <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-12 px-4 w-full">
                  {/* Search */}
                  <div className="flex relative mx-auto max-w-md w-full">
                    <input
                      className="border-2 border-primary bg-red transition h-12 px-5 pr-16 rounded-md focus:outline-none w-full text-black text-lg "
                      type="search"
                      name="search"
                      placeholder="Search"
                    />
                    <button
                      type="submit"
                      className="absolute right-2 top-3 mr-4"
                    >
                      <svg
                        className="text-black h-6 w-6 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        id="Capa_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 56.966 56.966"
                        style={{ enableBackground: "new 0 0 56.966 56.966" }}
                        xmlSpace="preserve"
                        width="512px"
                        height="512px"
                      >
                        <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                      </svg>
                    </button>
                  </div>

                  {/* Plan Uploader */}
                  <div className="flex flex-col lg:flex-row items-start justify-center border-2 p-2 my-2 w-max lg:space-x-4">
                    <span className="font-bold lg:whitespace-nowrap">
                      Uplaod a new plan:
                    </span>
                    <input type="file" id="fileInput" />
                  </div>
                  {/* Button Container */}
                  <div className="flex items-center justify-start p-2 my-2 w-full space-x-4">
                    <button className="p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg rounded-lg hover:border-4 border-blue-300">
                      Submit
                    </button>
                    <button className="p-2 pl-5 pr-5 bg-red-500 text-gray-100 text-lg rounded-lg hover:border-4 border-red-300">
                      Clear
                    </button>
                  </div>
                </div>
                <div className="p-8">
                  <div className="w-full">
                    <div className="bg-white shadow-md rounded my-6 w-full">
                      <table className="w-full table-auto">
                        <thead>
                          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <th className="p-3 text-center"></th>
                            <th className="p-3 text-center">Machine</th>
                            <th className="p-3 text-center">Quality</th>
                            <th className="p-3 text-center">Quality Factor</th>
                            <th className="p-3 text-center">Width</th>
                            <th className="p-3 text-center">Tape</th>
                            <th className="p-3 text-center">
                              Planned Quantity
                            </th>
                            <th className="py-3 px-6 text-center">
                              No of yarn ends
                            </th>
                            <th className="py-3 px-6 text-center"></th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                          {paginatedData.map((plan, index) => (
                            <tr
                              className="border-b border-gray-200 hover:bg-gray-100"
                              key={index}
                            >
                              <td className="py-3 px-6 text-left whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="mr-2">
                                    <input type="checkbox" id="checkbox" />
                                  </div>
                                </div>
                              </td>
                              <td className="py-3 px-6 text-left">
                                <div className="flex items-center">
                                  <span>{plan?.["Machine Name"]}</span>
                                </div>
                              </td>
                              <td className="py-3 px-6 text-center">
                                <div className="flex items-center justify-center">
                                  <span>{plan?.Quality}</span>
                                </div>
                              </td>
                              <td className="py-3 px-6 text-center">
                                <div className="flex items-center justify-center">
                                  <span>{plan?.["Quality Factor"]}</span>
                                </div>
                              </td>
                              <td className="py-3 px-6 text-center">
                                <div className="flex items-center justify-center">
                                  <span>{plan?.Width}</span>
                                </div>
                              </td>
                              <td className="py-3 px-6 text-center">
                                <div className="flex items-center justify-center">
                                  <span>{plan?.Tape}</span>
                                </div>
                              </td>
                              <td className="py-3 px-6 text-center">
                                <div className="flex items-center justify-center">
                                  <span>{plan?.["Planned Quantity"]}</span>
                                </div>
                              </td>
                              <td className="py-3 px-6 text-center">
                                <div className="flex items-center justify-center">
                                  <span>{plan?.["No Of Ends"]}</span>
                                </div>
                              </td>
                              <td className="py-3 px-6 text-center">
                                <div className="flex items-center justify-center">
                                  <button className="p-2 bg-blue-500 text-gray-100 text-xs rounded-lg hover:border-4 border-blue-300">
                                    View & Edit
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <div id="containerPag">
                        <Pagination
                          centerNumbers
                          id="pagination"
                          onChange={(e) => {
                            handlePageClick(e);
                          }}
                          amountOfPages={pageCount}
                          currentPage={currentPage}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WeeklyPlan;
