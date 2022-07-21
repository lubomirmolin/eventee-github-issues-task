import {Injectable} from '@angular/core';
import {ActiveState, EntityState, EntityStore, ID, StoreConfig} from '@datorama/akita';
import {Issue} from '../../global/models/issue';

export interface IssuesState extends EntityState<Issue>, ActiveState {
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'issues', resettable: true})
export class IssuesStore extends EntityStore<IssuesState> {

	constructor() {
		super();
	}
}

