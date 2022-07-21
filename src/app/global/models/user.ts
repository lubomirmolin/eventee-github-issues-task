
export class UserFromServer {
    id?: number;
    avatar_url?: string;
    url?: string;
    login?: string;
}

export class User {
    id?: number;
    avatarUrl?: string;
    url?: string;
    login?: string;
}

export function createUser(params: Partial<UserFromServer>): User {
    return {
        id: params.id,
        login: params.login,
        url: params.url,
        avatarUrl: params.avatar_url
    }
}
