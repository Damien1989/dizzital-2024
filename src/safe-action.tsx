import { createSafeActionClient, DEFAULT_SERVER_ERROR_MESSAGE } from "next-safe-action";
import { currentUser } from "./auth/current-user";


class ActionError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ActionError";
    }
}

const handleServerError = (error: Error) => {
    if (error instanceof ActionError) {
        console.error("ActionError:", error.message);
        return error.message;
    }
    
    return DEFAULT_SERVER_ERROR_MESSAGE;
};

export const actionClient = createSafeActionClient({
    handleServerError,
});