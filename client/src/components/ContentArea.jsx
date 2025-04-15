const ContentArea = ({ activeTab, contentMap }) => {
    return (
        <div className="bg-white rounded-md shadow-2xl border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-[#1F3F6A] mb-6">Final Year Project I (FYP ID)</h2>
            {contentMap[activeTab] || <p className="text-gray-700">Select a Tab to View Content.</p>}
        </div>
    );
};

export default ContentArea;
