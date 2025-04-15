const TabButton = ({ tab, activeTab, setActiveTab }) => {
    return (
        <button
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded text-white font-medium ${activeTab === tab ? "bg-green-600" : "bg-[#1F3F6A]"}`}
        >
            {tab}
        </button>
    );
};

export default TabButton;
