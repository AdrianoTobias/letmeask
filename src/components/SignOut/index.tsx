import { useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

import './styles.scss';

export function SignOut() {
    const history = useHistory();
    const { signOut } = useAuth();

    async function handleSignOut() {
        await signOut();
        history.push('/');
      }

    return (
        <span className="sign-out-content" onClick={handleSignOut}>Sign out</span>
    )
}