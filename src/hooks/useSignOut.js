import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setSignOut } from '../features/user/userSlice';
import { useAuth0 } from "@auth0/auth0-react";
import { redirectUri } from '../config';

function useSignOut() {
		const { logout } = useAuth0();
    const dispatch = useDispatch();
    const history = useHistory();

    const signOut = () => {
        let confirmQ = window.confirm('Are you sure logout your session ?');
        if(confirmQ){
            dispatch(setSignOut());
						logout({ returnTo: redirectUri + '/login' });
            history.push('/login')
        }
    }
		
		return signOut;
}

export default useSignOut;
