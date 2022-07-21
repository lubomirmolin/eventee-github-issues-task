export class User {
    public id?: number;
    public avatar_url?: string;
    public url?: string;

    constructor({ id, avatar_url, url }: Partial<User>) {
        this.id = id;
        this.avatar_url = avatar_url;
        this.url = url;
    }
}
