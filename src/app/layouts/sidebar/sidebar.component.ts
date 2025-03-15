import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, Input, OnChanges } from '@angular/core';
import MetisMenu from 'metismenujs';
import { EventService } from '../../core/services/event.service';
import { Router, NavigationEnd } from '@angular/router';

import { HttpClient } from '@angular/common/http';

import { MENU } from './menu';
import { MenuItem } from './menu.model';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

/**
 * Sidebar component
 */
export class SidebarComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild('componentRef') scrollRef;
  @Input() isCondensed = false;
  menu: any;
  data: any;
  menuItemsFromDB = [];
  menuItemsFromAPI = [];
  navData = [];
  navdatanew = [];
  loder: Boolean = true;
  selectedValue: any;
  user_Info: any;
  sideNavData: any;

  menuItems: MenuItem[] = [];

  @ViewChild('sideMenu') sideMenu: ElementRef;

  constructor(private eventService: EventService, private router: Router, public translate: TranslateService, private http: HttpClient) {

    this.user_Info = JSON.parse(sessionStorage.getItem('user_Info'));

    router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this._activateMenuDropdown();
        this._scrollElement();
      }
    });
  }

  ngOnInit() {
    debugger
    this.loder = true; //loder on
    let obj = {
      URL: 'common/getUserSpdata',
      name: 'Sel_GetModuleWiseMainMenu',
      params: [`@chrCompanyID='${this.user_Info.COMPANY_ID}',@chrUserId=N'${this.user_Info.USER_ID}',@chrModuleNo=N'${this.user_Info.MODULE_NO}',@intLoginIdentity=${this.user_Info.STATUS_CODE}`],
      multiflag: 1
    }
    this.http.post(environment.baseUrl + obj.URL, obj).subscribe(res => {

      //   // console.log(res)
      this.sideNavData = res;
      // this.sideNavData = JSON.parse(localStorage.getItem('MenuBar'));
      this.sideNavData[0].forEach((field: any) => {
        field["subItems"] = []  //adding subItems into item
        let a = this.sideNavData[1]
        let b = a.filter(t => t.MODULE_NO === field.MODULE_NO); // filter same data form two api
        let c = b.filter(b => b.PARENT == 0) // filter the res filter data to filter if parent data is 0 
        field.subItems.push(...c)   // pushing data under item wise subItems
        field.subItems.forEach((menu1: any) => {  // for subItems data loop
          menu1["subItems"] = []   // for in subItems under we want subItems
          b.forEach((submenu1: any) => {  // 
            if (submenu1.PARENT != 0) {
              if (submenu1.PARENT == menu1.MENU_KEY) {
                menu1.subItems.push(submenu1)
              }
            }
          })
          menu1.subItems.forEach((sub: any) => {
            sub["subItems"] = []
            b.forEach((submenu2: any) => {
              if (sub.MENU_KEY == submenu2.PARENT) {
                sub.subItems.push(submenu2)
              }
            })
          })
          menu1.subItems.forEach((sub: any) => {
            sub.subItems.forEach((sub1: any) => {
              sub1["subItems"] = []
              b.forEach((submenu2: any) => {
                if (sub1.MENU_KEY == submenu2.PARENT) {
                  sub1.subItems.push(submenu2)
                }
              })
            })
          })
        })
        this.navData.push(field)
      })
      this.navdatanew = this.navData
      this.initialize();
      this._scrollElement();
      this.triggerAfterViewInit();

      this.loder = false; //loder off

    })


    this.initialize();
    this._scrollElement();
  }
  private triggerAfterViewInit() {
    setTimeout(() => {
      // Trigger ngAfterViewInit after a short delay to ensure the view has been initialized
      this.ngAfterViewInit();
    });
  }

  ngAfterViewInit() {
    this.menu = new MetisMenu(this.sideMenu.nativeElement);
    this._activateMenuDropdown();
  }

  toggleMenu(event) {
    event.currentTarget.nextElementSibling.classList.toggle('mm-show');
  }

  ngOnChanges() {
    if (!this.isCondensed && this.sideMenu || this.isCondensed) {
      setTimeout(() => {
        this.menu = new MetisMenu(this.sideMenu.nativeElement);
      });
    } else if (this.menu) {
      this.menu.dispose();
    }
  }
  _scrollElement() {
    setTimeout(() => {
      if (document.getElementsByClassName("mm-active").length > 0) {
        const currentPosition = document.getElementsByClassName("mm-active")[0]['offsetTop'];
        if (currentPosition > 500)
          if (this.scrollRef.SimpleBar !== null)
            this.scrollRef.SimpleBar.getScrollElement().scrollTop =
              currentPosition + 300;
      }
    }, 300);
  }

  /**
   * remove active and mm-active class
   */
  _removeAllClass(className) {
    const els = document.getElementsByClassName(className);
    while (els[0]) {
      els[0].classList.remove(className);
    }
  }

  /**
   * Activate the parent dropdown
   */
  _activateMenuDropdown() {
    this._removeAllClass('mm-active');
    this._removeAllClass('mm-show');
    const links = document.getElementsByClassName('side-nav-link-ref');
    let menuItemEl = null;
    // tslint:disable-next-line: prefer-for-of
    const paths = [];
    for (let i = 0; i < links.length; i++) {
      paths.push(links[i]['pathname']);
    }
    var itemIndex = paths.indexOf(window.location.pathname);
    if (itemIndex === -1) {
      const strIndex = window.location.pathname.lastIndexOf('/');
      const item = window.location.pathname.substr(0, strIndex).toString();
      menuItemEl = links[paths.indexOf(item)];
    } else {
      menuItemEl = links[itemIndex];
    }
    if (menuItemEl) {
      menuItemEl.classList.add('active');
      const parentEl = menuItemEl.parentElement;
      if (parentEl) {
        parentEl.classList.add('mm-active');
        const parent2El = parentEl.parentElement.closest('ul');
        if (parent2El && parent2El.id !== 'side-menu') {
          parent2El.classList.add('mm-show');
          const parent3El = parent2El.parentElement;
          if (parent3El && parent3El.id !== 'side-menu') {
            parent3El.classList.add('mm-active');
            const childAnchor = parent3El.querySelector('.has-arrow');
            const childDropdown = parent3El.querySelector('.has-dropdown');
            if (childAnchor) { childAnchor.classList.add('mm-active'); }
            if (childDropdown) { childDropdown.classList.add('mm-active'); }
            const parent4El = parent3El.parentElement;
            if (parent4El && parent4El.id !== 'side-menu') {
              parent4El.classList.add('mm-show');
              const parent5El = parent4El.parentElement;
              if (parent5El && parent5El.id !== 'side-menu') {
                parent5El.classList.add('mm-active');
                const childanchor = parent5El.querySelector('.is-parent');
                if (childanchor && parent5El.id !== 'side-menu') { childanchor.classList.add('mm-active'); }
              }
            }
          }
        }
      }
    }

  }

  /**
   * Initialize
   */
  initialize(): void {
    // this.menuItems = MENU;
    this.menuItemsFromAPI = this.navdatanew;   //for with API
    console.log(this.menuItemsFromAPI)

  }

  /**
   * Returns true or false if given menu item has child or not
   * @param item menuItem
   */
  hasItems(item: MenuItem) {
    return item.subItems !== undefined ? item.subItems.length > 0 : false;
  }
  onChange() {
    let value = this.selectedValue;
    alert(value);
    this.selectedValue = '';

    for (let item of MENU) {
      if (item.hasOwnProperty('subItems')) {
        let b = item.subItems.filter(t => t.id == value)
        console.log(b);
        if (b.length != 0) {
          this.router.navigateByUrl(b[0].link);
        }
        else
          return alert('no data found');
      }
    }
  }

}
