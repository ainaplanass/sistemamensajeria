import { User } from "./User";
import { ThemeType } from "./Theme";
export class SubscriptionChannel
{
    private type: ThemeType;
    private users: User[];

    constructor(type: ThemeType)
    {
        this.type = type;
        this.users = [];
    }
    
    public getType() : ThemeType
    {
        return this.type;
    }

    public subscribe(newUser: User): void
    {
        this.users.push(newUser);
    }

    public getUsers()
    {
        return this.users; 
    }
}