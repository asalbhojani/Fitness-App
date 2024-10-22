export default function Note() {
    return (
        <div>
            <div className="p-0 sm:ml-64">
                <main
                    className=" overflow-x-auto flex-1 bg-gradient-to-b from-[#1E1E1E] to-[#000000] uppercase"
                >
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
                                    id="grid-last-name" type="text" placeholder="note"></input>
                            </div>

                            <hr className="h-px my-4 bg-[#A0FC6E] border-0"></hr>


                            <div className="flex lg:flex-row flex-col">
                                <div className="flex flex-col">



                                    <div
                                        className="relative overflow-x-auto w-[20rem] h-[30rem] bg-gradient-to-b from-[#1E1E1E] to-[#000000] ml-5">
                                        <h1 className="text-white px-5 py-5 text-2xl">Activty Calender</h1>
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
                                                    Nutrition </button>
                                                <button type="button"
                                                    className="text-white bg-[#0441B1] font-medium rounded-md text-sm px-4 py-1 me-2 mb-2 ">
                                                    Athlete Name </button>
                                            </div>

                                        </div>

                                        <hr className="h-px my-5 mx-3 bg-[#585858] border-0 "></hr>

                                        <button type="button"
                                            className="text-white bg-[#A0FC6E] ml-4 font-medium w-[18rem] justify-center text-sm px-8 py-2 me-2 mb-2 flex flex-row">
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

                </main>
            </div>

        </div>
    );
}