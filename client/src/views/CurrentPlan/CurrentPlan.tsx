import { MdOutlineNextPlan } from "react-icons/md";
import { useAppSelector } from "../../config/helpers";
import { Link } from "react-router-dom";
import { ICurrentPlan } from "../../config/types";
import Button from "../../components/Button/Button";
import classNames from "classnames";
import { useGetCurrentPlansByUserQuery, useUpdateCurrentPlanMutation } from "../../redux/features/currentPlan/currentPlanApi";

const CurrentPlan = () => {

    // global
    const auth = useAppSelector((state) => state.auth);
    const { data: currentPlans, isLoading } = useGetCurrentPlansByUserQuery(undefined);
    const [updateCurrentPlan, { isLoading: updateLoading }] = useUpdateCurrentPlanMutation();

    // handler
    const handleUpdateRead = (planId: string) => {

        const updateData = { isFinished: true };

        updateCurrentPlan({
            planId, updateData, headers: {
                'Content-Type': 'application/json',
            }
        })
    }

    return (
        <div className="container">
            <div className="mt-5">
                <div className="bg-primary-100 rounded-md relative overflow-hidden sm:py-10 px-5">

                    <h2 className="text-primary mb-3 border-b border-primary">Current Plans</h2>

                    {auth?.user?.currentPlans?.map((item: ICurrentPlan) => <div className="mb-3" key={item._id}>
                        <div className="relative group">
                            <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-center justify-between">
                                <div className="flex space-x-6 items-center">
                                    <MdOutlineNextPlan className="text-[22px] text-primary-400" />
                                    <div className="space-y-2">
                                        <p className={classNames(
                                            "text-slate-800",
                                            item.isFinished && 'line-through'
                                        )}>{item?.book?.title}</p>
                                        <Link to={`/book/${item?.book?._id}`} className="block text-primary-400 group-hover:text-primary-600 trans">
                                            View Details →
                                        </Link>
                                    </div>
                                </div>

                                {!item.isFinished ? <Button
                                    text={updateLoading ? 'Updating' : 'Mark as read'}
                                    disabled={updateLoading}
                                    onClick={() => handleUpdateRead(item._id)}
                                /> : 'Finished'}

                            </div>
                        </div>
                    </div>)}
                </div>

            </div>
        </div>
    )
}

export default CurrentPlan