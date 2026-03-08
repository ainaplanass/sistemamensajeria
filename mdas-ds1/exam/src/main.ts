import { NotificationFacade } from "./facades/NotificationFacade";
import { User } from "./models/User";

const notifyService = new NotificationFacade();

const user1 = new User("Ana", "ana@email.com", "600000000");
notifyService.subscribe(user1, "SECURITY");

notifyService.broadcast("Intento de acceso detectado", "SECURITY", "URGENT");
