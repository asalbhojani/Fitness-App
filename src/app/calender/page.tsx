export default function Calender() {
    return (
        <div>
            <div className="p-0 sm:ml-64 ">
                <main
                    className=" overflow-x-auto flex-1 bg-gradient-to-b from-[#1E1E1E] to-[#000000] uppercase">
                    <div className="container px-6 lg:pt-8 pb-20 mx-auto">

                        <div className="overflow-hidden shadow-sm sm:rounded-lg">

                            <div className="search-input w-[100%] lg:w-[100%] relative mb-4 ">
                                <div className="search-icon absolute top-[23%] left-[8px] block lg:hidden">
                                    <div className="mr-10">
                                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M17.3064 2.46888C17.3762 2.53854 17.4316 2.62131 17.4695 2.71243C17.5073 2.80354 17.5267 2.90122 17.5267 2.99988C17.5267 3.09853 17.5073 3.19621 17.4695 3.28733C17.4316 3.37844 17.3762 3.46121 17.3064 3.53088L8.83589 11.9999L17.3064 20.4689C17.4472 20.6097 17.5263 20.8007 17.5263 20.9999C17.5263 21.199 17.4472 21.39 17.3064 21.5309C17.1656 21.6717 16.9746 21.7508 16.7754 21.7508C16.5762 21.7508 16.3852 21.6717 16.2444 21.5309L7.24439 12.5309C7.17454 12.4612 7.11913 12.3784 7.08132 12.2873C7.04351 12.1962 7.02405 12.0985 7.02405 11.9999C7.02405 11.9012 7.04351 11.8035 7.08132 11.7124C7.11913 11.6213 7.17454 11.5385 7.24439 11.4689L16.2444 2.46888C16.3141 2.39903 16.3968 2.34362 16.4879 2.30581C16.5791 2.268 16.6767 2.24854 16.7754 2.24854C16.874 2.24854 16.9717 2.268 17.0628 2.30581C17.154 2.34362 17.2367 2.39903 17.3064 2.46888Z"
                                                fill="#A0FC6E" />
                                        </svg>
                                    </div>
                                </div>
                                <input
                                    className="uppercase ml-5 lg:ml-0 placeholder-white appearance-none block w-full bg-transparent text-[#54545A] text-3xl font-[300] border-b-0 border-t-0 border-l-0 border-r-0 border-[#A0FC6E] rounded-[5px] py-1 px-9 leading-tight outline-none focus:bg-transparent focus:border-[#A0FC6E] focus:ring-0"
                                    id="grid-last-name" type="text" placeholder="task calender"></input>
                            </div>

                            <hr className="h-px my-4 bg-[#A0FC6E] border-0"></hr>


                            <div className="flex lg:flex-row flex-col">

                                <div
                                    className="relative overflow-x-auto w-[20rem] h-[30rem] rounded-lg bg-gradient-to-b from-[#1E1E1E] to-[#0b0b0b] ml-5">
                                    <h1 className="text-white px-5 py-5 text-2xl">To do</h1>

                                    <hr className="h-px my-0 mx-3 bg-[#585858] border-0"></hr>

                                    <div className="activity1">
                                        <div className="flex flex row mt-5 ml-5">
                                            <span className="text-white text-xl">Activity 1</span>
                                            <div className="ml-auto mr-10 mt-1">
                                                <svg className=" text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                                                    stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
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
                                                <svg className=" text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                                                    stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
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

                                            <button type="button"
                                                className="text-white bg-[#A0FC6E] ml-4 font-medium w-[18rem] justify-center text-sm px-8 py-2 me-2 mb-2 flex flex-row">
                                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M13.6998 6.30234C13.6998 5.92457 13.5497 5.56226 13.2826 5.29513C13.0155 5.028 12.6532 4.87793 12.2754 4.87793C11.8976 4.87793 11.5353 5.028 11.2682 5.29513C11.001 5.56226 10.851 5.92457 10.851 6.30234V10.5756H6.57773C6.19996 10.5756 5.83765 10.7257 5.57052 10.9928C5.30339 11.2599 5.15332 11.6222 5.15332 12C5.15332 12.3778 5.30339 12.7401 5.57052 13.0072C5.83765 13.2743 6.19996 13.4244 6.57773 13.4244H10.851V17.6977C10.851 18.0754 11.001 18.4377 11.2682 18.7049C11.5353 18.972 11.8976 19.1221 12.2754 19.1221C12.6532 19.1221 13.0155 18.972 13.2826 18.7049C13.5497 18.4377 13.6998 18.0754 13.6998 17.6977V13.4244H17.973C18.3508 13.4244 18.7131 13.2743 18.9803 13.0072C19.2474 12.7401 19.3975 12.3778 19.3975 12C19.3975 11.6222 19.2474 11.2599 18.9803 10.9928C18.7131 10.7257 18.3508 10.5756 17.973 10.5756H13.6998V6.30234Z"
                                                        fill="#1E1E1E" />
                                                </svg>
                                                <span className="text-black ml-5 font-bold">ADD NEW</span></button>
                                        </div>
                                        {/* <!-- {{-- Todo end --}} --> */}

                                        <div
                                            className="relative overflow-x-auto w-[20rem] h-[30rem] rounded-lg bg-gradient-to-b from-[#1E1E1E] to-[#0b0b0b] ml-5 mt-5 lg:mt-0">
                                            <h1 className="text-white px-5 py-5 text-2xl">Future</h1>
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

                                                        <button type="button"
                                                            className="text-white bg-[#A0FC6E] ml-4 font-medium w-[18rem] justify-center text-sm px-8 py-2 me-2 mb-2 flex flex-row">
                                                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M13.6998 6.30234C13.6998 5.92457 13.5497 5.56226 13.2826 5.29513C13.0155 5.028 12.6532 4.87793 12.2754 4.87793C11.8976 4.87793 11.5353 5.028 11.2682 5.29513C11.001 5.56226 10.851 5.92457 10.851 6.30234V10.5756H6.57773C6.19996 10.5756 5.83765 10.7257 5.57052 10.9928C5.30339 11.2599 5.15332 11.6222 5.15332 12C5.15332 12.3778 5.30339 12.7401 5.57052 13.0072C5.83765 13.2743 6.19996 13.4244 6.57773 13.4244H10.851V17.6977C10.851 18.0754 11.001 18.4377 11.2682 18.7049C11.5353 18.972 11.8976 19.1221 12.2754 19.1221C12.6532 19.1221 13.0155 18.972 13.2826 18.7049C13.5497 18.4377 13.6998 18.0754 13.6998 17.6977V13.4244H17.973C18.3508 13.4244 18.7131 13.2743 18.9803 13.0072C19.2474 12.7401 19.3975 12.3778 19.3975 12C19.3975 11.6222 19.2474 11.2599 18.9803 10.9928C18.7131 10.7257 18.3508 10.5756 17.973 10.5756H13.6998V6.30234Z"
                                                                    fill="#1E1E1E" />
                                                            </svg>
                                                            <span className="text-black ml-5 font-bold">ADD NEW</span></button>

                                                    </div>
                                                    {/* <!-- {{-- future end --}} --> */}


                                                    <div
                                                        className="relative overflow-x-auto w-[20rem] h-[100%] rounded-lg bg-gradient-to-b from-[#1E1E1E] to-[#0b0b0b] ml-5 ml-5 mt-5 lg:mt-0">
                                                        <h1 className="text-white px-5 py-5 text-2xl">Completed</h1>
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

                                                            </div>




                                                    </div>

                                                </div>

                                        </div>

                                    </main>
                                </div>
                            </div>
                            );
}