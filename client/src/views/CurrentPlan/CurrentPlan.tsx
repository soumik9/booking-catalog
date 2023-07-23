import { MdOutlineNextPlan } from "react-icons/md";
import { useAppSelector } from "../../config/helpers";
import { Link } from "react-router-dom";
import { ICurrentPlan } from "../../config/types";

const CurrentPlan = () => {

    // global
    const auth = useAppSelector((state) => state.auth);

    return (
        <div className="container">
            <div className="mt-5">
                <div className="bg-primary-100 rounded-md relative overflow-hidden sm:py-10 px-5">

                    <h2 className="text-primary mb-3 border-b border-primary">Current Plans</h2>

                    {auth?.user?.currentPlans?.map((item: ICurrentPlan) => <div className="mb-3">
                        <div className="relative group">
                            <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-center justify-start space-x-6">
                                <MdOutlineNextPlan className="text-[22px] text-primary-400" />
                                <div className="space-y-2">
                                    <p className="text-slate-800">{item?.book?.title}</p>
                                    <Link to={`/book/${item?.book?._id}`} className="block text-primary-400 group-hover:text-primary-600 trans">
                                        View Details →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>)}
                </div>

            </div>
        </div>
    )
}

export default CurrentPlan