import { MessageStrategy } from "../strategies/MessageStrategy";
export class FormatMessage
{
    messageStrategy: MessageStrategy;

    constructor( messageStrategy: MessageStrategy )
    {
        this.messageStrategy = messageStrategy;
    }

    public formatMessage( message: string ): void
    {
        console.log( " formateando el puto mensaje ");
        let formatMessage = this.messageStrategy.format( message );
        return formatMessage;
    }
}