import React, { useState } from 'react';

function Tracker() {
    const [query, setQuery] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const fetchNutritionData = () => {
        fetch(`https://api.calorieninjas.com/v1/nutrition?query=${query}`, {
            method: 'GET',
            headers: {
                'X-Api-Key': 'toSYXtP00zD0wD8kW4S9Kg==Bpvpw0dbMgbDLC7w'
            },
            contentType: 'application/json'
        })
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(result)) {
                    setResult([...result, ...data.items]);
                } else {
                    setResult(data.items);
                }
                setError(null);
            })
            .catch(error => {
                setError('Error fetching data');
                setResult(null);
            });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchNutritionData();
    };

    return (
        <div className='flex justify-center items-center h-screen mt-12 bg-gray-200'>
            <div className="bg-white p-5 rounded-lg shadow-md w-4/5 max-w-4xl h-3/5">
                <h1 className="text-center text-gray-800 text-lg">Calorie-Tracker</h1>
                <form onSubmit={handleSubmit} className="flex flex-col items-center gap-2 mb-5">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Enter food items"
                        className="p-2 text-base border border-gray-300 rounded-md w-full max-w-md"
                    />
                    <button type="submit" className="p-2 text-base bg-white text-black rounded-md cursor-pointer hover:bg-orange-500">
                        Get Nutrition Info
                    </button>
                </form>
                {error && <pre className="text-red-500 text-center mt-5">{error}</pre>}
                {result && (
                    <table className="w-full border-collapse mt-5">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-2 text-left border-b">Name</th>
                                <th className="p-2 text-left border-b">Calories</th>
                                <th className="p-2 text-left border-b">Serving Size</th>
                                <th className="p-2 text-left border-b">Total Fat</th>
                                <th className="p-2 text-left border-b">Sugar</th>
                                <th className="p-2 text-left border-b">Protein</th>
                                <th className="p-2 text-left border-b">Carbohydrates</th>
                                <th className="p-2 text-left border-b">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {result.map((item, index) => (
                                <tr key={index} className="hover:bg-gray-100">
                                    <td className="p-2 border-b">{item.name}</td>
                                    <td className="p-2 border-b">{item.calories}</td>
                                    <td className="p-2 border-b">{item.serving_size_g} g</td>
                                    <td className="p-2 border-b">{item.fat_total_g} g</td>
                                    <td className="p-2 border-b">{item.sugar_g} g</td>
                                    <td className="p-2 border-b">{item.protein_g} g</td>
                                    <td className="p-2 border-b">{item.carbohydrates_total_g} g</td>
                                    <td className="p-2 border-b">
                                        <button type="button"
                                            onClick={() => {
                                                result.splice(index, 1);
                                                setResult([...result]);
                                            }}
                                            className="text-red-600 hover:text-red-800"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash-2"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

export default Tracker;
