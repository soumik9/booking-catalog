import Cookies from 'js-cookie';
import { useEffect, useState } from "react";
import { useAppDispatch } from './helpers';
import { profileLog, userLoggedIn } from '../redux/features/auth/authSlice';

export default function useAuthCheck() {

    // global and states
    const dispatch = useAppDispatch();
    const [authChecked, setAuthChecked] = useState(false);

    useEffect(() => {
        // get data from cookie
        const accessToken = Cookies.get('accessToken');
        const _id = Cookies.get('_id');

        if (accessToken && _id) {
            const headers = { Authorization: `Bearer ${accessToken}` };

            // getting logged user data
            fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/profile/${_id}`, { headers })
                .then(response => response.json())
                .then(data => {
                    dispatch(profileLog(data.data))
                })
                .catch(error => console.error(error));

            // storing data from cookies
            dispatch(
                userLoggedIn({
                    accessToken: accessToken,
                    isAuthenticated: true,
                    _id: _id,
                })
            );
        }
        setAuthChecked(true);
    }, [dispatch, setAuthChecked]);

    return authChecked;
}