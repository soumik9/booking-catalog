
interface Props {
    selectedItems: string[];
    checked: any;
    onChange: any;
    value: any;
}

const FilterCheckbox = ({ selectedItems, checked, onChange, value }: Props) => {
    return (
        <div className="relative">
            <label className="flex items-center space-x-2 cursor-pointer">
                <input
                    type="checkbox"
                    className="appearance-none cursor-pointer w-6 h-6 border border-primary-300 rounded-md checked:bg-primary checked:border-primary focus:outline-none"
                    checked={checked}
                    onChange={onChange}
                    value={value}
                />
                {selectedItems.includes(value) && <span className='absolute left-[-1px] text-white'>&#x2713;</span>}
                <span className="text-primary">{value}</span>
            </label>
        </div>

    )
}

export default FilterCheckbox