import React, { useEffect } from 'react'
import { useAppSelector } from '../../config/helpers';
import { useNavigate } from 'react-router-dom';
import { homeUrl } from '../../config/constants';

interface Props {
    children: React.ReactNode;
}

const RequiredAuth = ({ children }: Props) => {

    const navigate = useNavigate();

    // global
    const auth = useAppSelector((state) => state.auth);

    useEffect(() => {
        if (!auth.isAuthenticated) {
            navigate(homeUrl);
        }
    }, [auth.isAuthenticated, navigate])

    return <React.Fragment>{children}</React.Fragment>;
}

export default RequiredAuth