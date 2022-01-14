import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setSignOut } from '../features/user/userSlice';

function useSignOut() {
    const dispatch = useDispatch();
    const history = useHistory();

    const signOut = () => {
        let confirmQ = window.confirm('Are you sure logout your session ?');
        if(confirmQ){
            localStorage.clear();
            dispatch(setSignOut())
            history.push('/login')
        }
    }
		
		return signOut;
}

export default useSignOut;
