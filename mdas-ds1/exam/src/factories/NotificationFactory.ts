import { Email } from "../models/Email";
import { Push } from "../models/Push";
import { SMS } from "../models/SMS";
import { Urgency } from "../models/Urgency";
import { User } from "../models/User";
import { MarketingMessageStrategy } from "../strategies/MarketingMessageStrategy";
import { UrgentMessageStrategy } from "../strategies/UrgentMessageStrategy";

export class NotificationFactory
{
    public createNotification( user:User, message:string, urgency:Urgency )
    {
        let contactMethod = user.getFavoriteContactMethod();
        switch ( contactMethod )
        {
            case  "EMAIL":
                new Email( message );
                break;
            case "SMS":
                new SMS( message );
                break;
            case "PUSH":
                new Push( message );
                break;
        }

        switch ( urgency )
        {
            case "MARKETING":
               let marketingStrategy = new MarketingMessageStrategy();
               message = marketingStrategy.format( message );    
               break; 
            case "URGENT":
               let urgencyStrategy = new UrgentMessageStrategy();
               message = urgencyStrategy.format( message );
               break;
        }

    console.log( message );
    }
}