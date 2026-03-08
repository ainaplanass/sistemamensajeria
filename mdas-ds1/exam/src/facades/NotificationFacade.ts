import { User } from "../models/User";
import { ThemeType } from "../models/Theme";
import { Urgency } from "../models/Urgency";
import { SubscriptionChannel } from "../models/SubscriptionChannel";
import { NotificationFactory } from "../factories/NotificationFactory";

export class NotificationFacade
{
    public promotion: SubscriptionChannel;
    public security: SubscriptionChannel;
    public system: SubscriptionChannel;

    constructor()
    {
        this.promotion = new SubscriptionChannel("PROMOTION");
        this.security = new SubscriptionChannel("SECURITY");
        this.system = new SubscriptionChannel("SYSTEM");
    }

    public subscribe( user:User, theme:ThemeType )
    {
        switch( theme )
        {
            case "PROMOTION": 
                this.promotion.subscribe( user );
                break;
            case "SECURITY":
                this.security.subscribe( user );
                break;
            case "SYSTEM":
                this.system.subscribe( user );
                break;
        }
    }

    public broadcast( message:string, theme: ThemeType, urgency:Urgency )
    {
        let notificationFactory = new NotificationFactory();
        
        switch( theme )
        {
            case "PROMOTION":
                this.promotion.getUsers().forEach(element => {
                    notificationFactory.createNotification( element, message, urgency );
                });
                break;
           case "SECURITY":
                this.security.getUsers().forEach(element => {
                    notificationFactory.createNotification( element, message, urgency );
                });
                break;
            case "SYSTEM":
                this.system.getUsers().forEach(element => {
                    notificationFactory.createNotification( element, message, urgency );
                });
        }

    }
}