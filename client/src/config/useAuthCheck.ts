import Cookies from 'js-cookie';
import { useEffect, useState } from "react";
import { useAppDispatch } from './helpers';
import { userLoggedIn } from '../redux/features/auth/authSlice';

export default function useAuthCheck() {

    // global and states
    const dispatch = useAppDispatch();
    const [authChecked, setAuthChecked] = useState(false);

    useEffect(() => {
        // get data from cookie
        const accessToken = Cookies.get('accessToken');
        const _id = Cookies.get('_id');

        if (accessToken) {
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