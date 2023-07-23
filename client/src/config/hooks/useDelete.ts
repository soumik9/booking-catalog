import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { homeUrl } from '../constants';

const useDelete = () => {

    const navigate = useNavigate();

    const sendDeleteRequest = async (id: string | undefined, deleteItem: any, isSuccess: boolean) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                await deleteItem(id);
                if (isSuccess) {
                    navigate(homeUrl);
                }
            }
        })
    }

    return { sendDeleteRequest };
}

export default useDelete;