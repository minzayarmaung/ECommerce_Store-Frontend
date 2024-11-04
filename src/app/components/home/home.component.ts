import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, ElementRef, NgModule, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export class AppModule {}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
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
export class HomeComponent {
  private mobileScreen: MediaQueryList;
  isOpen = true;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
  constructor(private renderer: Renderer2, private el: ElementRef , private translate: TranslateService) {
    this.mobileScreen = window.matchMedia('(max-width: 990px)');
    this.translate.addLangs(['en','mm','jp']);
    this.translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    this.setupEventListeners();
  }

  setupEventListeners(): void {
    const dashboardNavDropdownToggles = this.el.nativeElement.querySelectorAll(
      '.dashboard-nav-dropdown-toggle'
    );
    const menuToggles = this.el.nativeElement.querySelectorAll('.menu-toggle');

    dashboardNavDropdownToggles.forEach((toggle: Element) => {
      this.renderer.listen(toggle, 'click', () => {
        const parentDropdown = this.closest(toggle, '.dashboard-nav-dropdown');
        if (parentDropdown) {
          this.toggleClass(parentDropdown, 'show');
          const childDropdowns = parentDropdown.querySelectorAll(
            '.dashboard-nav-dropdown'
          );
          childDropdowns.forEach((child: Element) =>
            this.removeClass(child, 'show')
          );
          const siblings = this.getSiblings(parentDropdown);
          siblings.forEach((sibling: Element) =>
            this.removeClass(sibling, 'show')
          );
        }
      });
    });

    menuToggles.forEach((toggle: Element) => {
      this.renderer.listen(toggle, 'click', () => {
        if (this.mobileScreen.matches) {
          const dashboardNav =
            this.el.nativeElement.querySelector('.dashboard-nav');
          if (dashboardNav) {
            this.toggleClass(dashboardNav, 'mobile-show');
          }
        } else {
          const dashboard = this.el.nativeElement.querySelector('.dashboard');
          if (dashboard) {
            this.toggleClass(dashboard, 'dashboard-compact');
          }
        }
      });
    });
  }

  toggleClass(element: Element, className: string): void {
    if (element.classList.contains(className)) {
      this.renderer.removeClass(element, className);
    } else {
      this.renderer.addClass(element, className);
    }
  }

  removeClass(element: Element, className: string): void {
    if (element.classList.contains(className)) {
      this.renderer.removeClass(element, className);
    }
  }

  getSiblings(element: Element): Element[] {
    const siblings: Element[] = [];
    let sibling: Node | null = element.parentNode
      ? element.parentNode.firstChild
      : null;
    while (sibling) {
      if (sibling.nodeType === 1 && sibling !== element) {
        siblings.push(sibling as Element);
      }
      sibling = sibling.nextSibling;
    }
    return siblings;
  }

  closest(element: Element, selector: string): Element | null {
    let currentElement: Element | null = element;
    while (currentElement && currentElement !== document.documentElement) {
      if (currentElement.matches(selector)) {
        return currentElement;
      }
      currentElement = currentElement.parentElement;
    }
    return null;
  }

  // Translate 
  changeLanguage(lang: string):void{
    this.translate.use(lang);
    console.log('Current language:', this.translate.currentLang);

  }

} 

