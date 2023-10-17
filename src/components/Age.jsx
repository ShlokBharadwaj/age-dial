import React, { useState, useEffect } from 'react';
import Footer from './Footer';

const Age = () => {
    const storedDob = localStorage.getItem('dob') || '';
    const storedAge = localStorage.getItem('calculatedAge') || null;

    const [dob, setDob] = useState(storedDob);
    const [showAge, setShowAge] = useState(!!storedAge);
    const [calculatedAge, setCalculatedAge] = useState(storedAge);

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
            const selectedDate = new Date(dob);
            const currentDate = new Date();
            if (selectedDate > currentDate) {
                alert("Please select a date in the past.");
                return;
            }
            setShowAge(true);
            const age = calculateAge(dob);
            setCalculatedAge(age);
            localStorage.setItem('dob', dob);
            localStorage.setItem('calculatedAge', age);
        }
    };

    const handleReset = () => {
        setShowAge(false);
        setDob('');
        setCalculatedAge(null);
        localStorage.removeItem('dob');
        localStorage.removeItem('calculatedAge');
    };

    useEffect(() => {
        if (showAge) {
            const interval = setInterval(() => {
                const age = calculateAge(dob);
                setCalculatedAge(age);
                localStorage.setItem('calculatedAge', age);
            }, 100);
            return () => clearInterval(interval);
        }
    }, [dob, showAge]);

    return (
        <div className="flex items-center justify-center h-screen bg-gray-900">
            <div className="text-white text-center p-8 rounded-lg shadow-lg">
                {showAge ? (
                    <div>
                        <h2 className="text-2xl mb-6">
                            <span className='text-8xl text-blue-500'>Age:</span> <span className="text-8xl">{calculatedAge.toString().split('.')[0]}</span>
                            .<span className="text-5xl">{calculatedAge.toString().split('.')[1]}</span>
                        </h2>
                        <button
                            onClick={handleReset}
                            className="bg-red-500 hover:bg-red-600 text-white py-3 px-8 rounded font-semibold transition-all duration-300"
                        >
                            Reset
                        </button>
                    </div>
                ) : (
                    <div>
                        <h1 className="text-4xl mb-6 font-bold">Select Your Date of Birth</h1>
                        <input
                            type="date"
                            value={dob}
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
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Age;
