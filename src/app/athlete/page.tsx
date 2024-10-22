import Link from "next/link";

export default function Athelete() {
    return (
   <div>
      <div className="p-0 sm:ml-64 uppercase">
        <main className=" overflow-x-auto flex-1 bg-gradient-to-b from-[#1E1E1E] to-[#000000] uppercase">
          <div className="container px-6 lg:pt-8 pb-20 mx-auto uppercase">
  
          <div className="overflow-hidden shadow-sm sm:rounded-lg">
  
         <div className="search-input w-[100%] lg:w-[100%] relative mb-4 ">
              <div className="search-icon absolute top-[29%] left-[8px]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                          stroke="#A0FC6E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M21.0004 20.9999L16.6504 16.6499" stroke="#A0FC6E" stroke-width="1.5"
                          stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
              </div>
              <input
                  className="uppercase placeholder-white appearance-none block w-full bg-transparent text-[#54545A] text-3xl font-[300] border-b-0 border-t-0 border-l-0 border-r-0 border-[#A0FC6E] rounded-[5px] pt-3 px-10 leading-tight outline-none focus:bg-transparent focus:border-[#A0FC6E] focus:ring-0"
                  id="grid-last-name" type="text" placeholder="your athletes"></input>
          </div>
  
          <hr className="h-px my-4 bg-[#A0FC6E] border-0"></hr>
  
  
          {/* <!-- {{-- Desktop --}} --> */}
          <div className=" hidden lg:block">
              <div className="flex lg:flex-row flex-col">
                  <div className="flex flex-col">
  
  
                      <div className=" relative overflow-x-auto">
                          <table className="w-[55rem] font-light text-left rtl:text-right text-gray-500 ">
                              <thead className=" text-white bg-[#000000] ">
                                  <tr>
                                      <th scope="col" className="px-6 py-3">
                                          Name
                                      </th>
                                      <th scope="col" className="px-0 py-3">
                                          Results
                                      </th>
                                      <th scope="col" className="px-0 py-3">
                                          Adhesion
                                      </th>
                                      <th scope="col" className="px-6 py-3">
                                          Tags
                                      </th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr className=" border-b border-[#000000] text-white">
                                      <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">
                                          athlete1
                                      </th>
                                      <td className="px-6 py-4">
                                          n%
                                      </td>
                                      <td className="px-6 py-4">
                                          n%
                                      </td>
                                      <td className="px-6 py-4">
                                          <button type="button"
                                              className="text-white bg-[#DA1E28] font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2 ">
                                              Expiring </button>
                                          <button type="button"
                                              className="text-white bg-[#0441B1] font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2 ">
                                              Tag </button>
                                          <button type="button"
                                              className="text-white bg-[#0441B1] font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2 ">
                                              Tag </button>
                                      </td>
                                  </tr>
                                  <tr className="border-b border-[#000000] text-white">
                                      <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">
                                          athlete2
                                      </th>
                                      <td className="px-6 py-4">
                                          n%
                                      </td>
                                      <td className="px-6 py-4">
                                          n%
                                      </td>
                                      <td className="px-6 py-4">
                                          <button type="button"
                                              className="text-white bg-[#0441B1] font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2 ">
                                              Tag </button>
                                          <button type="button"
                                              className="text-white bg-[#0441B1] font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2 ">
                                              Tag </button>
                                          <button type="button"
                                              className="text-white bg-[#0441B1] font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2 ">
                                              Tag </button>
                                      </td>
                                  </tr>
                                  <tr className=" border-b border-[#000000] text-white">
                                      <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">
                                          athlete3
                                      </th>
                                      <td className="px-6 py-4">
                                          n%
                                      </td>
                                      <td className="px-6 py-4">
                                          n%
                                      </td>
                                      <td className="px-6 py-4">
                                          <button type="button"
                                              className="text-white bg-[#0441B1] font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2 ">
                                              Tag </button>
                                          <button type="button"
                                              className="text-white bg-[#0441B1] font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2 ">
                                              Tag </button>
                                          <button type="button"
                                              className="text-white bg-[#0441B1] font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2 ">
                                              Tag </button>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
  
                      </div>
                      <button data-modal-target="default-modal" data-modal-toggle="default-modal" type="button"
                          className="flex w-25">
                          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                              x="0px" y="0px" width="24" height="24"
                              viewBox="0 0 122.881 122.88" enable-background="new 0 0 122.881 122.88"
                              >
                                {/*  xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"*/}
                              <g>
                                  <path stroke="#A0FC6E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                                      d="M56.573,4.868c0-0.655,0.132-1.283,0.37-1.859c0.249-0.6,0.61-1.137,1.056-1.583C58.879,0.545,60.097,0,61.44,0 c0.658,0,1.287,0.132,1.863,0.371c0.012,0.005,0.023,0.011,0.037,0.017c0.584,0.248,1.107,0.603,1.543,1.039 c0.881,0.88,1.426,2.098,1.426,3.442c0,0.03-0.002,0.06-0.006,0.089v51.62l51.619,0c0.029-0.003,0.061-0.006,0.09-0.006 c0.656,0,1.285,0.132,1.861,0.371c0.014,0.005,0.025,0.011,0.037,0.017c0.584,0.248,1.107,0.603,1.543,1.039 c0.881,0.88,1.428,2.098,1.428,3.441c0,0.654-0.133,1.283-0.371,1.859c-0.248,0.6-0.609,1.137-1.057,1.583 c-0.445,0.445-0.98,0.806-1.58,1.055v0.001c-0.576,0.238-1.205,0.37-1.861,0.37c-0.029,0-0.061-0.002-0.09-0.006l-51.619,0.001 v51.619c0.004,0.029,0.006,0.06,0.006,0.09c0,0.656-0.133,1.286-0.371,1.861c-0.006,0.014-0.012,0.025-0.018,0.037 c-0.248,0.584-0.602,1.107-1.037,1.543c-0.883,0.882-2.1,1.427-3.443,1.427c-0.654,0-1.283-0.132-1.859-0.371 c-0.6-0.248-1.137-0.609-1.583-1.056c-0.445-0.444-0.806-0.98-1.055-1.58h-0.001c-0.239-0.575-0.371-1.205-0.371-1.861 c0-0.03,0.002-0.061,0.006-0.09V66.303H4.958c-0.029,0.004-0.059,0.006-0.09,0.006c-0.654,0-1.283-0.132-1.859-0.371 c-0.6-0.248-1.137-0.609-1.583-1.056c-0.445-0.445-0.806-0.98-1.055-1.58H0.371C0.132,62.726,0,62.097,0,61.44 c0-0.655,0.132-1.283,0.371-1.859c0.249-0.6,0.61-1.137,1.056-1.583c0.881-0.881,2.098-1.426,3.442-1.426 c0.031,0,0.061,0.002,0.09,0.006l51.62,0l0-51.62C56.575,4.928,56.573,4.898,56.573,4.868L56.573,4.868z" />
                              </g>
                          </svg>
                          <span className="text-[#A0FC6E] ml-5">Add</span>
  
  
  
                      </button>
  
                      {/* <!-- Main modal --> tabindex="-1" */}
                      <div id="default-modal" aria-hidden="true"
                          className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                          <div className="relative p-4 w-[30rem] max-w-2xl max-h-full">
                              {/* <!-- Modal content --> */}
                              <div className="relative bg-gradient-to-b from-[#1E1E1E] to-[#000000]">
                                  {/* <!-- Modal header --> */}
                                  <div className="flex items-center justify-between p-4 md:p-5 ">
                                      <h3 className="text-2xl font-light text-gray-900 dark:text-white pl-4">
                                          NEW athlete
                                      </h3>
                                      <button type="button"
                                          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                          data-modal-hide="default-modal">
                                          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                              fill="none" viewBox="0 0 14 14">
                                              <path stroke="currentColor" stroke-linecap="round"
                                                  stroke-linejoin="round" stroke-width="2"
                                                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                          </svg>
                                          <span className="sr-only">Close modal</span>
                                      </button>
                                  </div>
                                  {/* <!-- Modal body --> */}
                                  <div className="p-4 md:p-5 space-y-4">
                                      <label className="text-white px-5 py-5 text-2xl">Name</label>
                                      <input className="placeholder-[#585858] appearance-none block w-full bg-transparent text-[#54545A] text-[14px] font-[300] border-b-3.5 border-t-0 border-l-0 border-r-0 border-[#585858] rounded-[0px] py-3 px-9 leading-tight outline-none focus:bg-transparent focus:border-[#585858] focus:ring-0"
                                          id="grid-last-name" type="text" placeholder="John Doe"></input>
                                  </div>
  
                                  <div className="p-4 md:p-5 space-y-4">
                                      <label className="text-white px-5 py-5 text-2xl">type of plan</label><br></br>
                                      <select className="bg-transparent border-[#A0FC6E] text-white ml-5">
                                          <option className="bg-black border-black text-white checked:bg-black">Premium
                                          </option>
                                          <option className="bg-black border-black text-white checked:bg-black">basic
                                          </option>
                                          <option className="bg-black border-black text-white checked:bg-black">athlete 3
                                          </option>
                                      </select>
                                  </div>
  
                                  {/* <!-- Modal footer --> */}
                                  <div className="flex items-center p-4 md:p-5 w-full">
                                      <button type="button"
                                          className="text-white bg-[#A0FC6E] ml-4 font-medium w-[22rem] justify-center text-sm px-8 py-2 me-2 mb-2 flex flex-row">
  
                                          <span className="text-black ml-5 font-bold">Save</span></button>
                                  </div>
                              </div>
                          </div>
                      </div>
  
  
  
                  </div>
  
  
                  <div className="flex flex-col">
  
                      {/* <!-- {{-- Recommended Meals --}} --> */}
                      <div className="relative  w-[20rem] h-[30rem] bg-gradient-to-b from-[#1E1E1E] to-[#000000] ml-5">
                          <h1 className="text-white px-5 py-5 text-2xl">Recommended Meals</h1>
                          <div className="activity1">
                              <div className="flex flex row mt-5 ml-5">
                                  <span className="text-white text-xl">Meal Name</span>
                                  <div className="ml-auto mr-10 mt-1">
                                      <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <circle cx="12.4155" cy="4.19043" r="2.09521" fill="#F6F6F6" />
                                          <circle cx="12.4155" cy="12" r="2.09521" fill="#F6F6F6" />
                                          <circle cx="12.4155" cy="19.8096" r="2.09521" fill="#F6F6F6" />
                                      </svg>
                                  </div>
                              </div>
                              <div className="flex flex row mt-5 ml-5">
                                  <div className="mr-auto mb-4">
                                      <span className="text-white text-md">Breakfast</span>
                                  </div>
                                  <span className="text-white text-md text-end mr-11">80kcal</span>
  
                              </div>
  
                          </div>
  
                          <hr className="h-px mx-3 bg-[#585858] border-0"></hr>
  
                          <div className="activity2">
                              <div className="flex flex row mt-5 ml-5">
                                  <span className="text-white text-xl">Meal Name</span>
                                  <div className="ml-auto mr-10 mt-1">
                                      <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <circle cx="12.4155" cy="4.19043" r="2.09521" fill="#F6F6F6" />
                                          <circle cx="12.4155" cy="12" r="2.09521" fill="#F6F6F6" />
                                          <circle cx="12.4155" cy="19.8096" r="2.09521" fill="#F6F6F6" />
                                      </svg>
                                  </div>
                              </div>
                              <div className="flex flex row mt-5 ml-5">
                                  <div className="mr-auto mb-4">
                                      <span className="text-white text-md">Lunch</span>
                                  </div>
                                  <span className="text-white text-md text-end mr-11">130kcal</span>
  
                              </div>
                          </div>
  
                          <hr className="h-px mx-3 bg-[#585858] border-0"></hr>
  
                          <div className="activity2">
                              <div className="flex flex row mt-5 ml-5">
                                  <span className="text-white text-xl">Meal Name</span>
                                  <div className="ml-auto mr-10 mt-1">
                                      <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <circle cx="12.4155" cy="4.19043" r="2.09521" fill="#F6F6F6" />
                                          <circle cx="12.4155" cy="12" r="2.09521" fill="#F6F6F6" />
                                          <circle cx="12.4155" cy="19.8096" r="2.09521" fill="#F6F6F6" />
                                      </svg>
                                  </div>
                              </div>
                              <div className="flex flex row mt-5 ml-5">
                                  <div className="mr-auto mb-4">
                                      <span className="text-white text-md">Snack</span>
                                  </div>
                                  <span className="text-white text-md text-end mr-11">24kcal</span>
  
                              </div>
                          </div>
  
                          <a href="">
                              <button type="button"
                                  className="text-white bg-[#A0FC6E] ml-4 font-medium w-[18rem] justify-center text-sm px-8 py-2 me-2 mb-2 flex flex-row">
                                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path
                                          d="M13.6998 6.30234C13.6998 5.92457 13.5497 5.56226 13.2826 5.29513C13.0155 5.028 12.6532 4.87793 12.2754 4.87793C11.8976 4.87793 11.5353 5.028 11.2682 5.29513C11.001 5.56226 10.851 5.92457 10.851 6.30234V10.5756H6.57773C6.19996 10.5756 5.83765 10.7257 5.57052 10.9928C5.30339 11.2599 5.15332 11.6222 5.15332 12C5.15332 12.3778 5.30339 12.7401 5.57052 13.0072C5.83765 13.2743 6.19996 13.4244 6.57773 13.4244H10.851V17.6977C10.851 18.0754 11.001 18.4377 11.2682 18.7049C11.5353 18.972 11.8976 19.1221 12.2754 19.1221C12.6532 19.1221 13.0155 18.972 13.2826 18.7049C13.5497 18.4377 13.6998 18.0754 13.6998 17.6977V13.4244H17.973C18.3508 13.4244 18.7131 13.2743 18.9803 13.0072C19.2474 12.7401 19.3975 12.3778 19.3975 12C19.3975 11.6222 19.2474 11.2599 18.9803 10.9928C18.7131 10.7257 18.3508 10.5756 17.973 10.5756H13.6998V6.30234Z"
                                          fill="#1E1E1E" />
                                  </svg>
                                  <span className="text-black ml-5 mt-0.5 font-bold">create NEW</span>
                              </button>
                          </a>
                      </div>
                      {/* <!-- {{-- Recommended Meals End --}} -->
  
                      <!-- {{-- Activity Calender --}} --> */}
                      <div
                          className="relative overflow-x-auto w-[20rem] h-[30rem] bg-gradient-to-b from-[#1E1E1E] to-[#000000] ml-5 mt-4">
                          <h1 className="text-white px-5 py-5 text-2xl">Activty Calender</h1>
                          <hr className="h-px my-0 mx-3 bg-[#585858] border-0"></hr>
                          <div className="activity1">
                              <div className="flex flex row mt-5 ml-5">
                                  <span className="text-white text-xl">Activity 1</span>
                                  <div className="ml-auto mr-10 mt-1">
                                      <svg className=" text-white" width="24" height="24" viewBox="0 0 24 24"
                                          stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                          stroke-linejoin="round">
                                          <path stroke="none" d="M0 0h24v24H0z" />
                                          <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                                          <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                                      </svg>
                                  </div>
                              </div>
                              <div className="flex flex row mt-5 ml-5">
  
                                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <g clip-path="url(#clip0_139_7571)">
                                          <path
                                              d="M5.52539 0C5.7243 0 5.91507 0.0790176 6.05572 0.21967C6.19637 0.360322 6.27539 0.551088 6.27539 0.75V1.5H18.2754V0.75C18.2754 0.551088 18.3544 0.360322 18.4951 0.21967C18.6357 0.0790176 18.8265 0 19.0254 0C19.2243 0 19.4151 0.0790176 19.5557 0.21967C19.6964 0.360322 19.7754 0.551088 19.7754 0.75V1.5H21.2754C22.071 1.5 22.8341 1.81607 23.3967 2.37868C23.9593 2.94129 24.2754 3.70435 24.2754 4.5V21C24.2754 21.7956 23.9593 22.5587 23.3967 23.1213C22.8341 23.6839 22.071 24 21.2754 24H3.27539C2.47974 24 1.71668 23.6839 1.15407 23.1213C0.591461 22.5587 0.275391 21.7956 0.275391 21V4.5C0.275391 3.70435 0.591461 2.94129 1.15407 2.37868C1.71668 1.81607 2.47974 1.5 3.27539 1.5H4.77539V0.75C4.77539 0.551088 4.85441 0.360322 4.99506 0.21967C5.13571 0.0790176 5.32648 0 5.52539 0ZM3.27539 3C2.87757 3 2.49603 3.15804 2.21473 3.43934C1.93343 3.72064 1.77539 4.10218 1.77539 4.5V6H22.7754V4.5C22.7754 4.10218 22.6174 3.72064 22.3361 3.43934C22.0547 3.15804 21.6732 3 21.2754 3H3.27539ZM22.7754 7.5H1.77539V21C1.77539 21.3978 1.93343 21.7794 2.21473 22.0607C2.49603 22.342 2.87757 22.5 3.27539 22.5H21.2754C21.6732 22.5 22.0547 22.342 22.3361 22.0607C22.6174 21.7794 22.7754 21.3978 22.7754 21V7.5Z"
                                              fill="#F6F6F6" />
                                          <rect x="4.58398" y="10.0981" width="4.36719" height="4.36719" rx="2.18359"
                                              fill="#F6F6F6" />
                                      </g>
                                      <defs>
                                          <clipPath id="clip0_139_7571">
                                              <rect width="24" height="24" fill="white"
                                                  transform="translate(0.275391)" />
                                          </clipPath>
                                      </defs>
                                  </svg>
                                  <div className="mr-auto ml-4 mb-4">
                                      <span className="text-white text-md">Tuesday, Aug 20</span>
                                  </div>
                              </div>
                              <span className="text-white text-md ml-5 ">text</span>
                          </div>
  
                          <hr className="h-px my-5 mx-3 bg-[#585858] border-0"></hr>
  
                          <div className="activity2">
                              <div className="flex flex row mt-5 ml-5">
                                  <span className="text-white text-xl">Activity 2</span>
                                  <div className="ml-auto mr-10 mt-1">
                                      <svg className=" text-white" width="24" height="24" viewBox="0 0 24 24"
                                          stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                          stroke-linejoin="round">
                                          <path stroke="none" d="M0 0h24v24H0z" />
                                          <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                                          <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                                      </svg>
                                  </div>
                              </div>
                              <div className="flex flex row mt-5 ml-5">
  
                                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <g clip-path="url(#clip0_139_7571)">
                                          <path
                                              d="M5.52539 0C5.7243 0 5.91507 0.0790176 6.05572 0.21967C6.19637 0.360322 6.27539 0.551088 6.27539 0.75V1.5H18.2754V0.75C18.2754 0.551088 18.3544 0.360322 18.4951 0.21967C18.6357 0.0790176 18.8265 0 19.0254 0C19.2243 0 19.4151 0.0790176 19.5557 0.21967C19.6964 0.360322 19.7754 0.551088 19.7754 0.75V1.5H21.2754C22.071 1.5 22.8341 1.81607 23.3967 2.37868C23.9593 2.94129 24.2754 3.70435 24.2754 4.5V21C24.2754 21.7956 23.9593 22.5587 23.3967 23.1213C22.8341 23.6839 22.071 24 21.2754 24H3.27539C2.47974 24 1.71668 23.6839 1.15407 23.1213C0.591461 22.5587 0.275391 21.7956 0.275391 21V4.5C0.275391 3.70435 0.591461 2.94129 1.15407 2.37868C1.71668 1.81607 2.47974 1.5 3.27539 1.5H4.77539V0.75C4.77539 0.551088 4.85441 0.360322 4.99506 0.21967C5.13571 0.0790176 5.32648 0 5.52539 0ZM3.27539 3C2.87757 3 2.49603 3.15804 2.21473 3.43934C1.93343 3.72064 1.77539 4.10218 1.77539 4.5V6H22.7754V4.5C22.7754 4.10218 22.6174 3.72064 22.3361 3.43934C22.0547 3.15804 21.6732 3 21.2754 3H3.27539ZM22.7754 7.5H1.77539V21C1.77539 21.3978 1.93343 21.7794 2.21473 22.0607C2.49603 22.342 2.87757 22.5 3.27539 22.5H21.2754C21.6732 22.5 22.0547 22.342 22.3361 22.0607C22.6174 21.7794 22.7754 21.3978 22.7754 21V7.5Z"
                                              fill="#F6F6F6" />
                                          <rect x="4.58398" y="10.0981" width="4.36719" height="4.36719" rx="2.18359"
                                              fill="#F6F6F6" />
                                      </g>
                                      <defs>
                                          <clipPath id="clip0_139_7571">
                                              <rect width="24" height="24" fill="white"
                                                  transform="translate(0.275391)" />
                                          </clipPath>
                                      </defs>
                                  </svg>
                                  <div className="mr-auto ml-4 mb-4">
                                      <span className="text-white text-md">Tuesday, Aug 20</span>
                                  </div>
                              </div>
                              <span className="text-white text-md ml-5 ">text</span>
                          </div>
  
                          <hr className="h-px my-5 mx-3 bg-[#585858] border-0"></hr>
  
                          <Link href="/athlete/activity">
                              <button type="button"
                                  className="text-white bg-[#A0FC6E] ml-4 font-medium w-[18rem] justify-center text-sm px-8 py-2 me-2 mb-2 flex flex-row">
                                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path
                                          d="M13.6998 6.30234C13.6998 5.92457 13.5497 5.56226 13.2826 5.29513C13.0155 5.028 12.6532 4.87793 12.2754 4.87793C11.8976 4.87793 11.5353 5.028 11.2682 5.29513C11.001 5.56226 10.851 5.92457 10.851 6.30234V10.5756H6.57773C6.19996 10.5756 5.83765 10.7257 5.57052 10.9928C5.30339 11.2599 5.15332 11.6222 5.15332 12C5.15332 12.3778 5.30339 12.7401 5.57052 13.0072C5.83765 13.2743 6.19996 13.4244 6.57773 13.4244H10.851V17.6977C10.851 18.0754 11.001 18.4377 11.2682 18.7049C11.5353 18.972 11.8976 19.1221 12.2754 19.1221C12.6532 19.1221 13.0155 18.972 13.2826 18.7049C13.5497 18.4377 13.6998 18.0754 13.6998 17.6977V13.4244H17.973C18.3508 13.4244 18.7131 13.2743 18.9803 13.0072C19.2474 12.7401 19.3975 12.3778 19.3975 12C19.3975 11.6222 19.2474 11.2599 18.9803 10.9928C18.7131 10.7257 18.3508 10.5756 17.973 10.5756H13.6998V6.30234Z"
                                          fill="#1E1E1E" />
                                  </svg>
                                  <span className="text-black ml-5 font-bold">ADD NEW</span>
                              </button>
                          </Link>
                      </div>
                      {/* <!-- {{-- Activity Calender End --}} --> */}
                  </div>
  
  
              </div>
          </div>
  
          {/* <!-- {{-- Mobile --}} --> */}
  
          <div className=" lg:hidden">
              <div className="flex lg:flex-row flex-col">
                  <div className=" relative overflow-x-auto">
  
  
                      <select className="bg-transparent border-[#A0FC6E] text-white">
                          <option className="bg-black border-black text-white checked:bg-black">Filter By:TAG1</option>
                          <option className="bg-black border-black text-white checked:bg-black">Filter By:TAG2</option>
                          <option className="bg-black border-black text-white checked:bg-black">Filter By:TAG3</option>
                      </select>
  
                      <select className="bg-transparent border-[#A0FC6E] text-white">
                          <option className="bg-black border-black text-white checked:bg-black">Sort By:TAG1</option>
                          <option className="bg-black border-black text-white checked:bg-black" selected>Sort By:TAG2
                          </option>
                          <option className="bg-black border-black text-white checked:bg-black">Sort By:TAG3</option>
                      </select>
  
                  </div>
  
                  <div
                      className="relative overflow-x-auto w-full h-[100%] pb-10 bg-gradient-to-b from-[#1E1E1E] to-[#000000] ml-0 mt-4">
                      <h1 className="text-white px-5 py-5 text-2xl">athlete 1</h1>
  
                      <button type="button"
                          className="text-white bg-[#0441B1] font-medium rounded-md text-sm px-4 py-1.5 me-2 mb-2 ml-5"> Tag1
                      </button>
                      <button type="button"
                          className="text-white bg-[#0441B1] font-medium rounded-md text-sm px-4 py-1.5 me-2 mb-2 "> Tag2
                      </button>
  
                      <div className="activity1">
                          <div className="flex flex row mt-5 ml-5">
                              {/* <!-- {{-- <span className="text-white text-lg">Renewal Rate</span>
                              <span className="text-[#8F8F8F] text-lg pl-2 pt-0">25%</span> --}} --> */}
                              <div className="ml-auto mr-5 mt-[-15%]">
                                  <svg width="49" height="49" viewBox="0 0 49 49" fill="none"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <g clip-path="url(#clip0_2198_8291)">
                                          <path d="M21.1567 17.7104L28.2735 24.7142L21.1567 31.8309" stroke="#A0FC6E"
                                              stroke-linecap="round" />
                                      </g>
                                      <defs>
                                          <clipPath id="clip0_2198_8291">
                                              <rect width="48" height="48" fill="white"
                                                  transform="matrix(-1 0 0 -1 48.7153 48.7705)" />
                                          </clipPath>
                                      </defs>
                                  </svg>
  
                              </div>
                          </div>
                          <div className="flex flex row mt-2 ml-5">
                              <span className="text-white text-lg">Results</span>
                              <span className="text-[#8F8F8F] text-lg pl-2 pt-0">25%</span>
                              <span className="text-white text-lg pl-5">adherence</span>
                              <span className="text-[#8F8F8F] text-lg pl-2 pt-0">3%</span>
                          </div>
  
                      </div>
                  </div>
  
                  <div
                      className="relative overflow-x-auto w-full h-[100%] pb-10 mt-10 bg-gradient-to-b from-[#1E1E1E] to-[#000000] ml-0 mt-4">
                      <h1 className="text-white px-5 py-5 text-2xl">athlete 2</h1>
  
                      <button type="button"
                          className="text-white bg-[#0441B1] font-medium rounded-md text-sm px-4 py-1.5 me-2 mb-2 ml-5"> Tag1
                      </button>
                      <button type="button"
                          className="text-white bg-[#0441B1] font-medium rounded-md text-sm px-4 py-1.5 me-2 mb-2 "> Tag2
                      </button>
  
                      <div className="activity1">
                          <div className="flex flex row mt-5 ml-5">
                              {/* <!-- {{-- <span className="text-white text-lg">Renewal Rate</span> */}
                              {/* <span className="text-[#8F8F8F] text-lg pl-2 pt-0">25%</span> --}} --> */}
                              <div className="ml-auto mr-5 mt-[-15%]">
                                  <svg width="49" height="49" viewBox="0 0 49 49" fill="none"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <g clip-path="url(#clip0_2198_8291)">
                                          <path d="M21.1567 17.7104L28.2735 24.7142L21.1567 31.8309" stroke="#A0FC6E"
                                              stroke-linecap="round" />
                                      </g>
                                      <defs>
                                          <clipPath id="clip0_2198_8291">
                                              <rect width="48" height="48" fill="white"
                                                  transform="matrix(-1 0 0 -1 48.7153 48.7705)" />
                                          </clipPath>
                                      </defs>
                                  </svg>
  
                              </div>
                          </div>
                          <div className="flex flex row mt-2 ml-5">
                              <span className="text-white text-lg">Results</span>
                              <span className="text-[#8F8F8F] text-lg pl-2 pt-0">25%</span>
                              <span className="text-white text-lg pl-5">adherence</span>
                              <span className="text-[#8F8F8F] text-lg pl-2 pt-0">9</span>
                          </div>
  
                      </div>
                  </div>
  
  
                  <div className="flex flex-col mt-5">
  
                      {/* <!-- {{-- Recommended Meals --}} --> */}
                      <div className="relative  w-full h-[30rem] bg-gradient-to-b from-[#1E1E1E] to-[#000000] ml-0">
                          <h1 className="text-white px-5 py-5 text-2xl">Recommended Meals</h1>
                          <div className="activity1">
                              <div className="flex flex row mt-5 ml-5">
                                  <span className="text-white text-xl">Meal Name</span>
                                  <div className="ml-auto mr-10 mt-1">
                                      <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <circle cx="12.4155" cy="4.19043" r="2.09521" fill="#F6F6F6" />
                                          <circle cx="12.4155" cy="12" r="2.09521" fill="#F6F6F6" />
                                          <circle cx="12.4155" cy="19.8096" r="2.09521" fill="#F6F6F6" />
                                      </svg>
                                  </div>
                              </div>
                              <div className="flex flex row mt-5 ml-5">
                                  <div className="mr-auto mb-4">
                                      <span className="text-white text-md">Breakfast</span>
                                  </div>
                                  <span className="text-white text-md text-end mr-11">80kcal</span>
  
                              </div>
  
                          </div>
  
                          {/* <hr className="h-px mx-3 bg-[#585858] border-0"> */}
  
                          <div className="activity2">
                              <div className="flex flex row mt-5 ml-5">
                                  <span className="text-white text-xl">Meal Name</span>
                                  <div className="ml-auto mr-10 mt-1">
                                      <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <circle cx="12.4155" cy="4.19043" r="2.09521" fill="#F6F6F6" />
                                          <circle cx="12.4155" cy="12" r="2.09521" fill="#F6F6F6" />
                                          <circle cx="12.4155" cy="19.8096" r="2.09521" fill="#F6F6F6" />
                                      </svg>
                                  </div>
                              </div>
                              <div className="flex flex row mt-5 ml-5">
                                  <div className="mr-auto mb-4">
                                      <span className="text-white text-md">Lunch</span>
                                  </div>
                                  <span className="text-white text-md text-end mr-11">130kcal</span>
  
                              </div>
                          </div>
  
                          <hr className="h-px mx-3 bg-[#585858] border-0"></hr>
  
                          <div className="activity2">
                              <div className="flex flex row mt-5 ml-5">
                                  <span className="text-white text-xl">Meal Name</span>
                                  <div className="ml-auto mr-10 mt-1">
                                      <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <circle cx="12.4155" cy="4.19043" r="2.09521" fill="#F6F6F6" />
                                          <circle cx="12.4155" cy="12" r="2.09521" fill="#F6F6F6" />
                                          <circle cx="12.4155" cy="19.8096" r="2.09521" fill="#F6F6F6" />
                                      </svg>
                                  </div>
                              </div>
                              <div className="flex flex row mt-5 ml-5">
                                  <div className="mr-auto mb-4">
                                      <span className="text-white text-md">Snack</span>
                                  </div>
                                  <span className="text-white text-md text-end mr-11">24kcal</span>
  
                              </div>
                          </div>
  
                          <a href="./add/step1.html">
                              <button type="button"
                                  className="text-white bg-[#A0FC6E] ml-4 font-medium w-[18rem] justify-center text-sm px-8 py-2 me-2 mb-2 flex flex-row">
                                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path
                                          d="M13.6998 6.30234C13.6998 5.92457 13.5497 5.56226 13.2826 5.29513C13.0155 5.028 12.6532 4.87793 12.2754 4.87793C11.8976 4.87793 11.5353 5.028 11.2682 5.29513C11.001 5.56226 10.851 5.92457 10.851 6.30234V10.5756H6.57773C6.19996 10.5756 5.83765 10.7257 5.57052 10.9928C5.30339 11.2599 5.15332 11.6222 5.15332 12C5.15332 12.3778 5.30339 12.7401 5.57052 13.0072C5.83765 13.2743 6.19996 13.4244 6.57773 13.4244H10.851V17.6977C10.851 18.0754 11.001 18.4377 11.2682 18.7049C11.5353 18.972 11.8976 19.1221 12.2754 19.1221C12.6532 19.1221 13.0155 18.972 13.2826 18.7049C13.5497 18.4377 13.6998 18.0754 13.6998 17.6977V13.4244H17.973C18.3508 13.4244 18.7131 13.2743 18.9803 13.0072C19.2474 12.7401 19.3975 12.3778 19.3975 12C19.3975 11.6222 19.2474 11.2599 18.9803 10.9928C18.7131 10.7257 18.3508 10.5756 17.973 10.5756H13.6998V6.30234Z"
                                          fill="#1E1E1E" />
                                  </svg>
                                  <span className="text-black ml-5 mt-0.5 font-bold">create NEW</span>
                              </button>
                          </a>
                      </div>
                      {/* <!-- {{-- Recommended Meals End --}} --> */}
  
                    {/* <!-- {{-- Activity Calender --}} --> */}
                      <div
                          className="relative mt-4 lg:mt-0 w-[100%] lg:w-[20rem] h-[30rem] bg-gradient-to-b from-[#1E1E1E] to-[#000000] lg:ml-5 rounded-lg">
                          <h1 className="text-white px-5 py-5 text-2xl">Notes</h1>
                          <hr className="h-px my-0 mx-3 bg-[#585858] border-0"></hr>
                          <div className="activity1">
                              <div className="flex flex row mt-5 ml-5">
                                  <span className="text-white text-xl">note 1</span>
                                  <div className="ml-auto mr-10 mt-1">
                                      <svg className=" text-white" width="24" height="24" viewBox="0 0 24 24"
                                          stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                          stroke-linejoin="round">
                                          <path stroke="none" d="M0 0h24v24H0z" />
                                          <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                                          <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                                      </svg>
                                  </div>
                              </div>
                              <span className="text-white text-md ml-5 ">text</span>
                              <div className="flex flex row mt-5 ml-5">
                                  <button type="button"
                                      className="text-white bg-[#0441B1] font-medium rounded-md text-sm px-4 py-1 me-2 mb-2 ">
                                      Training </button>
                                  <button type="button"
                                      className="text-white bg-[#0441B1] font-medium rounded-md text-sm px-4 py-1 me-2 mb-2 ">
                                      Athlete Name </button>
                              </div>
  
                          </div>
  
                          <hr className="h-px my-5 mx-3 bg-[#585858] border-0"></hr>
  
                          <div className="activity1">
                              <div className="flex flex row mt-5 ml-5">
                                  <span className="text-white text-xl">note 2</span>
                                  <div className="ml-auto mr-10 mt-1">
                                      <svg className=" text-white" width="24" height="24" viewBox="0 0 24 24"
                                          stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                          stroke-linejoin="round">
                                          <path stroke="none" d="M0 0h24v24H0z" />
                                          <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                                          <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                                      </svg>
                                  </div>
                              </div>
                              <span className="text-white text-md ml-5 ">text</span>
                              <div className="flex flex row mt-5 ml-5">
                                  <button type="button"
                                      className="text-white bg-[#0441B1] font-medium rounded-md text-sm px-4 py-1 me-2 mb-2 ">
                                      Training </button>
                                  <button type="button"
                                      className="text-white bg-[#0441B1] font-medium rounded-md text-sm px-4 py-1 me-2 mb-2 ">
                                      Athlete Name </button>
                              </div>
  
                          </div>
  
                          <hr className="h-px my-5 mx-3 bg-[#585858] border-0 "></hr>
  
                          <div className="mr-10">
                              <button type="button"
                                  className="text-white bg-[#A0FC6E] ml-4 font-medium w-full lg:w-[18rem] justify-center text-sm px-8 py-2 me-2 mb-2 flex flex-row">
                                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path
                                          d="M13.6998 6.30234C13.6998 5.92457 13.5497 5.56226 13.2826 5.29513C13.0155 5.028 12.6532 4.87793 12.2754 4.87793C11.8976 4.87793 11.5353 5.028 11.2682 5.29513C11.001 5.56226 10.851 5.92457 10.851 6.30234V10.5756H6.57773C6.19996 10.5756 5.83765 10.7257 5.57052 10.9928C5.30339 11.2599 5.15332 11.6222 5.15332 12C5.15332 12.3778 5.30339 12.7401 5.57052 13.0072C5.83765 13.2743 6.19996 13.4244 6.57773 13.4244H10.851V17.6977C10.851 18.0754 11.001 18.4377 11.2682 18.7049C11.5353 18.972 11.8976 19.1221 12.2754 19.1221C12.6532 19.1221 13.0155 18.972 13.2826 18.7049C13.5497 18.4377 13.6998 18.0754 13.6998 17.6977V13.4244H17.973C18.3508 13.4244 18.7131 13.2743 18.9803 13.0072C19.2474 12.7401 19.3975 12.3778 19.3975 12C19.3975 11.6222 19.2474 11.2599 18.9803 10.9928C18.7131 10.7257 18.3508 10.5756 17.973 10.5756H13.6998V6.30234Z"
                                          fill="#1E1E1E" />
                                  </svg>
                                  <span className="text-black ml-2 mt-0.5 font-bold">ADD NEW</span></button>
                          </div>
  
                      </div>
                 
                  </div>
  
  
  
  
  
                  </div>
   
          </div>
      </div>
  
          </div>
          
  
        </main>
      </div>
    </div>
    );
  }
  