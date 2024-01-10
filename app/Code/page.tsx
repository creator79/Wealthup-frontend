"use client"

import React, { useState } from 'react'


interface PageProps {}

const page: React.FC<PageProps> = () => {

    const [tokenCode, setTokenCode] = useState('');
    const [inputCode, setInputCode] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleRefreshCode = async (e: { preventDefault: () => void; }) => {
        try {
            e.preventDefault();
            const response = await fetch('https://wealthup-backend-b4ez.onrender.com/api/v1/codes');
            const data = await response.json();

            // Assuming the API response has a "code" property
            setTokenCode(data.code);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleCheckCode = async (e: { preventDefault: () => void; }) => {
        try {
            e.preventDefault();
            const response = await fetch('https://wealthup-backend-b4ez.onrender.com/api/v1/codes/use', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    code: inputCode,
                }),
            });

            const result = await response.json();

            // Check if the API call was successful
            if (response.ok) {
                setSuccessMessage(result.message);
                setErrorMessage('');
            } else {
                setErrorMessage(result.error);
                setSuccessMessage('');
            }
        } catch (error) {
            console.error('Error checking code:', error);
            setErrorMessage('An error occurred while checking the code');
            setSuccessMessage('');
        }
    };



    return (
        <>

            <form>
                <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                    <div className="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
                        <h2 className='text-xl font-bold text-white flex-1 mx-auto text-center'>Token Generation</h2>

                        <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600">
                            <div className="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">

                            </div>

                        </div>
                        <button
                            type="button"
                            data-tooltip-target="tooltip-fullscreen"
                            className="p-2 text-gray-500 rounded cursor-pointer sm:ms-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        >
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 19 19"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 1h5m0 0v5m0-5-5 5M1.979 6V1H7m0 16.042H1.979V12M18 12v5.042h-5M13 12l5 5M2 1l5 5m0 6-5 5"
                                />
                            </svg>
                            <span className="sr-only">Full screen</span>
                        </button>

                    </div>
                    <div className="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800 flex items-center justify-center">
                        <textarea
                            id="editor"
                            rows={8}
                            className=" flex-1 mx-auto text-center mt-[7rem] block w-full px-0  text-white text-2xl border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400 font-bold"
                            disabled={true}
                            value={tokenCode}
                        />
                    </div>
                </div>
                <button
                    onClick={handleRefreshCode}
                    type="button"
                    className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                >
                    Refresh Code
                </button>
            </form>

            <div className="mt-10">
                <label
                    htmlFor="default-input"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Enter The Token Code
                </label>
                <input
                    type="text"
                    id="default-input"
                    value={inputCode}
                    onChange={(e) => setInputCode(e.target.value)}
                    placeholder='Type your Token'
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />


            </div>
            <button
                type="submit"
                onClick={handleCheckCode}
                className=" mt-8 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
            >
                Check Code
            </button>


            <div className='flex-1 mx-auto text-center font-serif text-xl '>
                {successMessage && <div className="text-green-600">{successMessage}</div>}
                {errorMessage && <div className="text-red-600">{errorMessage}</div>}

            </div>

        </>
    )
}

export default page