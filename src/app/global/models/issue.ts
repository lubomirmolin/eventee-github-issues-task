import {User} from "./user";
import {Label} from "./label";
import {DateTime} from 'luxon';

export class Issue {
    id?: number;
    url?: string;
    number?: number;
    state?: string;
    title?: string;
    body?: string;
    user?: User;
    labels?: Label[];
    locked?: boolean;
    comments?: number;
    created_at?: string;
    updated_at?: string;

    constructor({ id, url, number, state, title, body, user, labels, locked, comments, created_at, updated_at }: Partial<Issue>) {
        this.id = id;
        this.url = url;
        this.number = number;
        this.state = state;
        this.title = title;
        this.body = body;
        this.user = user;
        this.labels = labels;
        this.locked = locked;
        this.comments = comments;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    get createdAtDateTime(): DateTime | null {
        if (this.created_at) {
            return null;
        }

        return DateTime.fromISO(this.created_at!);
    }

    get updatedAtDateTime(): DateTime | null {
        return DateTime.fromISO(this.updated_at!);
    }
}
