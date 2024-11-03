import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
  animations: [
    trigger('menuToggle', [
      state(
        'closed',
        style({
          transform: 'translateX(-100%)',
        })
      ),
      state(
        'open',
        style({
          transform: 'translateX(0)',
        })
      ),
      transition('closed <=> open', [animate('0.3s ease-in-out')]),
    ]),
  ],
})
export class TopbarComponent {
  isOpen = false;
  mobileScreen = window.matchMedia('(max-width: 768px)');

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
