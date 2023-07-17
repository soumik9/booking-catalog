

const CardLayoutScreen = ({ title, children }: { title: string; children: React.ReactNode }) => {
    return (
        <div className='container'>
            <div className="flex flex-col items-center justify-center min-h-screen-minus-56">
                <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-center">{title}</h2>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default CardLayoutScreen