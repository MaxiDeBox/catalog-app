import {AfterViewInit, Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective implements OnInit, AfterViewInit {

  constructor(private _el: ElementRef) { }

  ngAfterViewInit() {
    this._el.nativeElement.focus()
  }

  ngOnInit() {
  }

}
