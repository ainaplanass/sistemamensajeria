import { MessageStrategy } from "./MessageStrategy";

export class MarketingMessageStrategy implements MessageStrategy {

    format( message:string ) : string{
        return  message + "/ndarte de baja pedorro";
    }
}