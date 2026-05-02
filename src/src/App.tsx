import React, { useState } from "react";

const App: React.FC = () => {
    const [activeTab, setActiveTab] = useState("visuals");

    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">Visuals and Interactivity</h1>
                </div>
            </header>
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <div className="border-b border-gray-200">
                        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                            <button
                                onClick={() => setActiveTab("visuals")}
                                className={`${
                                    activeTab === "visuals"
                                        ? "border-indigo-500 text-indigo-600"
                                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                            >
                                Visuals
                            </button>
                            <button
                                onClick={() => setActiveTab("interactivity")}
                                className={`${
                                    activeTab === "interactivity"
                                        ? "border-indigo-500 text-indigo-600"
                                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                            >
                                Interactivity
                            </button>
                        </nav>
                    </div>

                    <div className="mt-8">
                        {activeTab === "visuals" ? (
                            <div className="bg-white overflow-hidden shadow rounded-lg">
                                <div className="px-4 py-5 sm:p-6">
                                    <h2 className="text-lg font-medium text-gray-900">The Power of Visuals</h2>
                                    <p className="mt-1 text-sm text-gray-600">
                                        Visuals are a powerful tool for communication. They can convey complex ideas in a simple, intuitive way.
                                    </p>
                                    <div className="mt-4">
                                        <img
                                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                            alt="Visual representation"
                                            className="h-64 w-full object-cover rounded-md"
                                        />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="bg-white overflow-hidden shadow rounded-lg">
                                <div className="px-4 py-5 sm:p-6">
                                    <h2 className="text-lg font-medium text-gray-900">Interactivity</h2>
                                    <p className="mt-1 text-sm text-gray-600">
                                        Interactivity makes experiences engaging and memorable. It allows users to actively participate and shape their experience.
                                    </p>
                                    <div className="mt-4">
                                        <div className="flex items-center justify-center h-64 bg-gray-100 rounded-md">
                                            <button
                                                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                                                onClick={() => alert("You interacted!")}
                                            >
                                                Click Me
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default App;