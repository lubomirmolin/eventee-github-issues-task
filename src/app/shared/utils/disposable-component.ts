import {Subject} from 'rxjs';
import {Component, Directive, OnDestroy} from '@angular/core';

/**
 * This exists to prevent memory leaks of RxJS subscriptions
 */
@Component({
	template: ''
})
export abstract class DisposableComponent implements OnDestroy {
	public componentDestroyed = new Subject<void>();

	ngOnDestroy(): void {
		this.componentDestroyed.next();
		this.componentDestroyed.complete();
	}
}

/**
 * This exists to prevent memory leaks of RxJS subscriptions
 */
@Directive()
export abstract class DisposableDirective implements OnDestroy {
	public componentDestroyed = new Subject<void>();

	ngOnDestroy(): void {
		this.componentDestroyed.next();
		this.componentDestroyed.complete();
	}
}
