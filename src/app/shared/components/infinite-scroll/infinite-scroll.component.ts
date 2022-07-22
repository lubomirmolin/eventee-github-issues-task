import {Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';

@Component({
	// tslint:disable-next-line:component-selector
	selector: 'infinite-scroll',
	template: `<ng-content></ng-content><div #anchor></div>`
})
export class InfiniteScrollComponent implements OnInit, OnDestroy {
	@Input() options = {};
	@Output() scrolled = new EventEmitter();
	@ViewChild('anchor', {static: true}) anchor: ElementRef<HTMLElement>;

	private observer: IntersectionObserver;

	constructor(private host: ElementRef) {
	}

	get element() {
		return this.host.nativeElement;
	}

	ngOnInit() {
		const options = {
			root: this.isHostScrollable() ? this.host.nativeElement : null,
			...this.options
		};

		try {
			this.observer = new IntersectionObserver(([entry]) => {
				if (entry.isIntersecting) {
					this.scrolled.emit();
				}
			}, options);
		} catch (e) {
			// for safari
		}

		this.observer?.observe(this.anchor.nativeElement);
	}

	ngOnDestroy() {
		this.observer?.disconnect();
	}

	private isHostScrollable() {
		const style = window.getComputedStyle(this.element);

		return style.getPropertyValue('overflow') === 'auto' ||
			style.getPropertyValue('overflow-y') === 'scroll';
	}
}
