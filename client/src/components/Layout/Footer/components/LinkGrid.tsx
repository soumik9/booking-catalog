import { linkTypes } from '../../../../config/types';
import { Link } from 'react-router-dom';

interface Props {
    title: string;
    links: linkTypes[];
}

const LinkGrid = ({ title, links }: Props) => {
    return (
        <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                {title}
            </h6>

            {links.map((item: linkTypes) => <p className="mb-4" key={item._id}>
                <Link to={item.url} className="text-primary-900">
                    {item.title}
                </Link>
            </p>)}

        </div>
    )
}

export default LinkGrid