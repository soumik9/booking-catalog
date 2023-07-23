import { useAppSelector } from "../../config/helpers";
import { ICurrentPlan } from "../../config/types";
import CurrentPlanCard from "./components/CurrentPlanCard";

const CurrentPlan = () => {

    // global
    const auth = useAppSelector((state) => state.auth);

    return (
        <div className="container">
            <div className="mt-5">
                <div className="bg-primary-100 rounded-md relative overflow-hidden sm:py-10 px-5">

                    <h2 className="text-primary mb-3 border-b border-primary">Current Plans</h2>

                    {auth?.user?.currentPlans?.map((item: ICurrentPlan) => <CurrentPlanCard key={item._id} item={item} />)}
                </div>

            </div>
        </div>
    )
}

export default CurrentPlan