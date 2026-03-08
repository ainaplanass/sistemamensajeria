import { ContactMethod } from "./Contact";

export class User{

    public username: string;
    private email: string;
    private number: string;
    private favoriteContactMethod: ContactMethod;

    constructor ( username: string, email: string, number: string )
    {
        this.username = username,
        this.email = email,
        this.number = number
        this.favoriteContactMethod = this.getFavoriteContactMethod();

    }

    getFavoriteContactMethod() : ContactMethod
    {
        return "EMAIL";
    }

    getUsername()
    {
        return this.username;
    }
    getEmail()
    {
        return this.email;
    }
    getNumber()
    {
        return this.number;
    }

   public update(): void
   {

   }
}