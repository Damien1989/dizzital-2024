import { baseAuth } from "@/auth/auth"
import { SignInButton } from "./SignInButton"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { LoggedInDropdown } from "./LoggedInDropdown"

export const LoggedInButton = async () => {
const session = await baseAuth();

if(!session?.user) {
    return <SignInButton />
}

return (
    <LoggedInDropdown>
    <Button variant="outline" size="sm">
        <Avatar className="size-6">
<AvatarFallback>{session.user.name?.[0]}</AvatarFallback>
{session.user.image ? (
    <AvatarImage 
    src={session.user.image} 
    alt={`${session.user.name ?? "-"}'s profile picture`} 
    />
    ) : null }
        </Avatar>
    </Button>
    </LoggedInDropdown>
);
}