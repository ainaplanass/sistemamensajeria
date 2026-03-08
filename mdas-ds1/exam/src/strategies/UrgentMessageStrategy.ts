import { MessageStrategy } from "./MessageStrategy";

export class UrgentMessageStrategy implements MessageStrategy {

    format( message:string ) : string{
        return "[URGENT MESSAGE] " + message;
    }
}