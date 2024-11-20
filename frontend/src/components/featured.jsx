export default function Feature() {
    return (
        <div className="container mx-auto p-6 bg-indigo-50 rounded-lg shadow-lg mt-8">
            <h2 className="text-3xl font-bold text-indigo-600 mb-4">Featured Games</h2>
            <p className="text-gray-600 mb-8">Check out these popular games available now</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="border rounded-lg shadow-sm p-4 bg-gray-50 hover:shadow-md transition hover:scale-90">
                    <span className="bg-red-100 text-red-700 text-xs font-semibold px-2 py-1 rounded-full">Bookable</span>
                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">Open Now</span>
                    <div className="my-4 h-32 bg-gray-200 rounded">
                        <img src="https://5.imimg.com/data5/SELLER/Default/2022/12/GT/XH/CW/2451824/cricket-turf.jpg" alt="Football" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="font-semibold text-gray-800">Turf Side</h3>
                    <p className="text-sm text-gray-600">Location: Bangalore</p>
                    
                </div>
                <div className="border rounded-lg shadow-sm p-4 bg-gray-50 hover:shadow-md transition hover:scale-90">
                    <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full">Book Now</span>
                    <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-2 py-1 rounded-full">5 Star Rating</span>
                    <div className="my-4 h-32 bg-gray-200 rounded">
                        <img src="https://media.istockphoto.com/id/520999573/photo/indoor-soccer-football-field.jpg?s=612x612&w=0&k=20&c=X2PinGm51YPcqCAFCqDh7GvJxoG2WnJ19aadfRYk2dI=" alt="Football" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="font-semibold text-gray-800">Sama Turf</h3>
                    <p className="text-sm text-gray-600">Location: Bangalore</p>
                </div>
                <div className="border rounded-lg shadow-sm p-4 bg-gray-50 hover:shadow-md transition hover:scale-90">
                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">Open Now</span>
                    <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full">Book Now</span>
                    <div className="my-4 h-32 bg-gray-200 rounded">
                        <img src="data:image/jpeg;base64,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" alt="Football" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="font-semibold text-gray-800">Camp Nou</h3>
                    <p className="text-sm text-gray-600">Location: Bangalore</p>
                </div>
            </div>
        </div>
    );
}
