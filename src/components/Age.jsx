import React from 'react';

const Age = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-black">
            <div className="text-white text-center">
                <h1 className="text-4xl mb-4">Enter Your Age</h1>
                <input
                    className="bg-gray-800 text-white px-4 py-2 rounded-md mb-4"
                    type="number"
                    placeholder="Age"
                />
                <br />
                <button className="bg-gray-700 text-white px-4 py-2 rounded-md">
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Age;
