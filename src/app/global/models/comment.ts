import {createUser, User, UserFromServer} from './user';
import {DateTime} from 'luxon';

export interface CommentFromServer {
    id?: number;
    body?: string;
    user?: UserFromServer;
    created_at?: string;
    updated_at?: string;
    issue_url?: string;
    author_association?: string;
}

export interface Comment {
    id: number;
    body: string;
    user?: User;
    createdAt?: DateTime;
    updatedAt?: DateTime;
    authorAssociation: string;
}

export function createComment(params: Partial<CommentFromServer>) {
    return {
        id: params.id,
        body: params.body,
        user: params.user ? createUser(params.user) : null,
        createdAt: params.created_at ? DateTime.fromISO(params.created_at) : null,
        updatedAt: params.updated_at ? DateTime.fromISO(params.updated_at) : null,
        authorAssociation: params.author_association
    } as Comment;
}
