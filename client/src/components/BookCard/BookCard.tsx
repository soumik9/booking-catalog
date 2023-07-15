import React from 'react'

const BookCard = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800">aa</h3>
                <p className="text-sm text-gray-600">By asda</p>
                <p className="mt-4 text-gray-700">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente dolore alias officiis laboriosam ut. Consequuntur, nisi dolores quia nesciunt quae, nostrum illum in sint quibusdam provident et ullam consequatur neque.</p>
                <div className="mt-6 flex justify-end">
                    <button className="px-4 py-2 text-white bg-primary rounded-md hover:bg-primary-600 trans focus:outline-none">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BookCard