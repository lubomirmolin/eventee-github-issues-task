import {createUser, User, UserFromServer} from './user';
import {Label} from "./label";
import {DateTime} from 'luxon';
import {Comment} from './comment';

export enum IssueState {
    Open = 'open',
    Closed = 'closed'
}

export interface IssueFromServer {
    id: number;
    url: string;
    number: number;
    state: string;
    title: string;
    body: string;
    user: UserFromServer;
    labels: Label[];
    locked: boolean;
    comments: number;
    created_at: string;
    updated_at: string;
}

export interface Issue {
    id: number;
    url: string;
    number: number;
    state: IssueState;
    title: string;
    body: string;
    user: UserFromServer;
    labels: Label[];
    locked: boolean;
    commentsCount: number;
    comments: Comment[];
    createdAt: DateTime;
    updatedAt: DateTime;
}

export function createIssue(params: Partial<IssueFromServer>): Issue {
    return {
        id: params.id,
        url: params.url,
        number: params.number,
        state: params.state,
        title: params.title,
        body: params.body,
        user: params.user ? createUser(params.user) : null,
        labels: params.labels || [],
        locked: params.locked,
        commentsCount: params.comments,
        comments: [],
        createdAt: params.created_at ? DateTime.fromISO(params.created_at) : null,
        updatedAt: params.updated_at ? DateTime.fromISO(params.updated_at) : null
    } as Issue;
}
