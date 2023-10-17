import React, { useState, useEffect } from 'react';

const Age = () => {
    const [dob, setDob] = useState("");
    const [showAge, setShowAge] = useState(false);
    const [calculatedAge, setCalculatedAge] = useState(null);

    const calculateAge = (dob) => {
        const birthDate = new Date(dob);
        const ageInMilliseconds = Date.now() - birthDate.getTime();
        const age = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
        return age.toFixed(9);
    };

    const handleSubmit = () => {
        if (!dob) {
            alert("Please select your date of birth.");
        } else {
            setShowAge(true);
            setCalculatedAge(calculateAge(dob));
        }
    };

    useEffect(() => {
        if (showAge) {
            const interval = setInterval(() => {
                setCalculatedAge(calculateAge(dob));
            }, 100);
            return () => clearInterval(interval);
        }
    }, [dob, showAge]);

    return (
        <div className="flex items-center justify-center h-screen bg-gray-900">
            <div className="text-white text-center p-8 rounded-lg shadow-lg">
                {!showAge ? (
                    <div>
                        <h1 className="text-4xl mb-6 font-bold">Select Your Date of Birth</h1>
                        <input
                            type="date"
                            className="bg-gray-800 text-white p-4 rounded mb-4 text-center w-64 focus:outline-none text-xl"
                            onChange={(e) => setDob(e.target.value)}
                        />
                        <br />
                        <button
                            onClick={handleSubmit}
                            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded font-semibold transition-all duration-300"
                        >
                            Submit
                        </button>
                    </div>
                ) : (
                    <h2 className="text-3xl mb-6">
                        Current Age: {calculatedAge}
                    </h2>
                )}
            </div>
        </div>
    );
};

export default Age;
