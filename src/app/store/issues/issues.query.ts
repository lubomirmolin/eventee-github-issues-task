import {Injectable} from '@angular/core';
import {Order, QueryEntity} from '@datorama/akita';
import {IssuesState, IssuesStore} from './issues.store';

@Injectable({providedIn: 'root'})
export class IssuesQuery extends QueryEntity<IssuesState> {

	constructor(protected override store: IssuesStore) {
		super(store);
	}

}
