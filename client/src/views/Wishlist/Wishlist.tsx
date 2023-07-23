import { GiSelfLove } from "react-icons/gi"
import { Link } from "react-router-dom"

const Wishlist = () => {
    return (
        <div className="container">
            <div className="mt-5">
                <div className="bg-primary-100 rounded-md relative overflow-hidden sm:py-12 px-5">

                    <div className="relative group">
                        <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-center justify-start space-x-6">
                            <GiSelfLove className="text-[22px] text-primary-400" />
                            <div className="space-y-2">
                                <p className="text-slate-800">Learn how to make a glowing gradient background!</p>
                                <Link to="https://braydoncoyer.dev/blog/tailwind-gradients-how-to-make-a-glowing-gradient-background" className="block text-primary-400 group-hover:text-primary-600 trans">View Details →</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Wishlist