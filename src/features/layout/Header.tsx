import { LoggedInButton } from "../auth/LoggedInButton";
import { SignInButton } from "../auth/SignInButton";

export const Header = () => {
    return (
        <div className="flex items-center gap-4">
            <h1 className="font-bold text-lg flex-1">Dizzital</h1>
            <LoggedInButton/>
        </div>
    );
};