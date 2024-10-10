const InfoCard = ({ title, description, icon }) => {
    return (
        <div className="p-6 bg-white border border-neutral-300 dark:bg-neutral-800 dark:border-neutral-700 bg-opacity-10 dark:bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg text-white">
            <div className="flex items-center space-x-3">
                <div className="text-2xl">{icon}</div>
                <h3 className="text-xl font-semibold">{title}</h3>
            </div>
            <p className="mt-3 text-sm text-gray-300">{description}</p>
        </div>
    );
};


export default InfoCard