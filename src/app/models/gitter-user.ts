import { UUID } from "angular2-uuid";
import { UserModel } from "./user-model";

export class GitterUser {
    public Id: UUID;
    public Username: string;
    public DisplayName: string;
    public AvatarUrl: string;
    public Url: string;

    constructor (
        id: UUID, 
        userName: string, 
        displayName: string,
        avatarUrl: string,
        url : string)
    {
        this.Id = id;
        this.Username = userName;
        this.DisplayName = displayName;
        this.AvatarUrl = avatarUrl;
        this.Url = url;
    }

    public ConvertToUserModel() : UserModel{
        return new UserModel(this.Username, this.DisplayName, this.AvatarUrl, this.Url);
    }
}
