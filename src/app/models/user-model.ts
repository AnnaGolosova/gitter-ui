export class UserModel {
    public readonly  Username: string;
    public readonly DisplayName: string;
    public AvatarUrl: string;
    public Url: string;

    constructor (
        userName: string, 
        displayName: string,
        avatarUrl: string,
        url : string)
    {
        this.Username = userName;
        this.DisplayName = displayName;
        this.AvatarUrl = avatarUrl;
        this.Url = url;
    }
}
