import { ApplicationRef, ComponentFactoryResolver, ComponentRef, Injectable, Injector, Renderer2, RendererFactory2, Type } from '@angular/core';
import { Offcanvas } from 'bootstrap';
import * as bootstrap from 'bootstrap';

@Injectable({
  providedIn: 'root'
})
export class OffcanvasService {
  private renderer: Renderer2;
  private offcanvasInstance: Offcanvas | null = null;
  private componentRef: ComponentRef<any> | null = null;

  constructor(
    rendererFactory: RendererFactory2,
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  //-------- single component load 
  async openSingle<T>(component: Type<T>, title?: string, data?: Partial<T>) {
    // Remove existing offcanvas if any
    const existingOffcanvas = document.getElementById('dynamicOffcanvas');
    if (existingOffcanvas) {
      existingOffcanvas.remove();
    }

    // Create offcanvas container
    const offcanvasElement = document.createElement('div');
    offcanvasElement.id = 'dynamicOffcanvas';
    offcanvasElement.className = 'offcanvas offcanvas-end  offcanvas-custom';
    offcanvasElement.tabIndex = -1;
    offcanvasElement.setAttribute('data-bs-backdrop', 'static');
    offcanvasElement.setAttribute('aria-labelledby', 'offcanvasLabel');
    offcanvasElement.innerHTML = ``;
    if (title) {
      offcanvasElement.innerHTML += `<div class="offcanvas-header"><h5 id="offcanvasLabel">${title}</h5>`
    }
    // <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button></div>
    offcanvasElement.innerHTML +=
      `<div class="offcanvas-body px-0 py-0 pt-2" id="offcanvasContent">
        <div class="bg-danger text-white rounded-circle p-1 d-flex justify-content-center align-items-center offcanvas-custom-btl-close-sm-screen"  data-bs-dismiss="offcanvas" style="cursor: default;">
          <i class='bx bx-x fs-3'></i>
        </div>

        <div class='offcanvas-custom-btl-close'>
          <div class="rounded-start-5 d-flex justify-content-center align-items-center bg-danger text-white p-2 shadow" data-bs-dismiss="offcanvas" style="cursor: default;">
            <i class='bx bx-x fs-3'></i> 
            <!-- Close -->
          </div>
        </div>
      </div>`;

    // Append to body
    document.body.appendChild(offcanvasElement);

    // Render Angular Component inside the Offcanvas
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.componentRef = componentFactory.create(this.injector);

    // Pass data to the component
    if (data) {
      Object.assign(this.componentRef.instance, data);
    }

    this.appRef.attachView(this.componentRef.hostView);
    document.getElementById('offcanvasContent')?.appendChild(this.componentRef.location.nativeElement);

    // Initialize Bootstrap Offcanvas
    this.offcanvasInstance = new Offcanvas(offcanvasElement);
    this.offcanvasInstance.show();
  }
  /*
  async openDynamicComponent<T>(path: string, component: string, title?: string, data?: Partial<T>) {
    // Remove existing offcanvas if any
    const existingOffcanvas = document.getElementById('dynamicOffcanvas');
    if (existingOffcanvas) {
      existingOffcanvas.remove();
    }

    // Create offcanvas container
    const offcanvasElement = document.createElement('div');
    offcanvasElement.id = 'dynamicOffcanvas';
    offcanvasElement.className = 'offcanvas offcanvas-end  offcanvas-custom';
    offcanvasElement.tabIndex = -1;
    offcanvasElement.setAttribute('data-bs-backdrop', 'static');
    offcanvasElement.setAttribute('aria-labelledby', 'offcanvasLabel');
    offcanvasElement.innerHTML = ``;
    if (title) {
      offcanvasElement.innerHTML += `<div class="offcanvas-header"><h5 id="offcanvasLabel">${title}</h5>`
    }
    // <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button></div>
    offcanvasElement.innerHTML +=
      `<div class="offcanvas-body px-0 py-0 pt-2" id="offcanvasContent">
        <div class="bg-danger text-white rounded-circle p-1 d-flex justify-content-center align-items-center offcanvas-custom-btl-close-sm-screen"  data-bs-dismiss="offcanvas" style="cursor: default;">
          <i class='bx bx-x fs-3'></i>
        </div>

        <div class='offcanvas-custom-btl-close'>
          <div class="rounded-start-5 d-flex justify-content-center align-items-center bg-danger text-white p-2 shadow" data-bs-dismiss="offcanvas" style="cursor: default;">
            <i class='bx bx-x fs-3'></i> 
            <!-- Close -->
          </div>
        </div>

        <h4 class="container-fluid my-2 mx-2 p-0 ms-3">
          <span> formHeading</span>
        </h4>
        <div class="w-100 d-flex my-2 flex-wrap mx-2" id="navContainer">
        </div>
      </div>`;

    // Append to body
    document.body.appendChild(offcanvasElement);
    // Add navigation items dynamically
    const navContainer = document.getElementById('navContainer');
    if (navContainer) {
      data["tabs"].forEach((nav, index) => {
        const navElement = document.createElement('div');
        navElement.className = 'fs-6 fw-lighter mx-2 px-2 mouse-pointer component-nav-item';
        navElement.innerText = nav.name;
        if (index === 0) {
          navElement.classList.add('active'); // First item active
        }
        navContainer.appendChild(navElement);
      });
    }

    // Render Angular Component inside the Offcanvas
    let module = await import(`src/app/${path}.component`);

    // Render Angular Component inside the Offcanvas
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(module[component]);
    this.componentRef = componentFactory.create(this.injector);

    // Pass data to the component
    if (data) {
      Object.assign(this.componentRef.instance, data);
    }

    this.appRef.attachView(this.componentRef.hostView);
    document.getElementById('offcanvasContent')?.appendChild(this.componentRef.location.nativeElement);

    // Initialize Bootstrap Offcanvas
    this.offcanvasInstance = new Offcanvas(offcanvasElement);
    this.offcanvasInstance.show();
  }*/
  //************************* */
  async openDynamicComponent<T>(data?: any) {
    this.close(); // Close existing offcanvas

    // Create Offcanvas Container
    const offcanvasElement = document.createElement('div');
    offcanvasElement.id = 'dynamicOffcanvas';
    offcanvasElement.className = 'offcanvas offcanvas-end offcanvas-custom';
    offcanvasElement.tabIndex = -1;
    offcanvasElement.setAttribute('data-bs-backdrop', 'static');
    offcanvasElement.innerHTML = ``;
    if (data.mainComponentTitle) {
      offcanvasElement.innerHTML += `<div class="offcanvas-header"><h5 id="offcanvasLabel">${data.mainComponentTitle}</h5>`
    }
    offcanvasElement.innerHTML +=
      `<div class="offcanvas-body px-0 py-0 pt-2  overflow-hidden" id="offcanvasContent">
          <!-- CLOSE BUTTON -->
          <div id="closeBtnSmallScreen" class="bg-danger text-white rounded-circle p-1 d-flex justify-content-center align-items-center offcanvas-custom-btl-close-sm-screen"   style="cursor: default;">
            <i class='bx bx-x fs-3'></i>
          </div>

          <div class='offcanvas-custom-btl-close'>
            <div id="closeBtnLargeScreen" class="rounded-start-5 d-flex justify-content-center align-items-center bg-danger text-white p-2 shadow"  style="cursor: default;">
              <i class='bx bx-x fs-3'></i> 
              <!-- Close -->
            </div>
          </div>
          <!-- CLOSE BUTTON END -->


          <!-- FORM STACK BUTTON -->
          <div class='offcanvas-custom-btl-stack'>
            <div id="stackBtnLargeScreen" class="rounded-start-5 d-flex justify-content-center align-items-center bg-warning text-white p-2 shadow"  style="cursor: default;">
              <i class='bx bxs-right-down-arrow-circle fs-3'></i>
            </div>
          </div>
          <!-- FORM STACK BUTTON end -->


          <h4 class="container-fluid my-2 mx-2 p-0 ms-3">
            <span>${data.formHeading}</span>
          </h4>
          <div class="w-100 d-flex my-2 flex-wrap mx-2" id="navContainer"></div>
          <div id="componentContainer"></div>
        </div>`;
    document.body.appendChild(offcanvasElement);
    // ✅ Add event listeners to close buttons
    setTimeout(() => {
      document.getElementById('closeBtnSmallScreen')?.addEventListener('click', () => this.closeCanvas());
      document.getElementById('closeBtnLargeScreen')?.addEventListener('click', () => this.closeCanvas());
      document.getElementById('stackBtnLargeScreen')?.addEventListener('click', () => this.addInStack());
    }, 0);

    const navContainer = document.getElementById('navContainer');
    const componentContainer = document.getElementById('componentContainer');

    if (!navContainer || !componentContainer) return;

    // Load the First Component Initially
    await this.loadComponent(data, componentContainer);

    // Add Navigation Items
    data["tabs"]?.forEach((tab, index) => {
      const navElement = document.createElement('div');
      navElement.className = `component-nav-item nav-item mx-2 px-2 py-1 mouse-pointer ${index === 0 ? 'active' : ''}`;
      navElement.innerText = tab.name;
      navElement.addEventListener('click', async () => {
        await this.loadComponent(tab.data, componentContainer);
        document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
        navElement.classList.add('active');
      });
      navContainer.appendChild(navElement);
    });

    // Show Offcanvas
    new bootstrap.Offcanvas(offcanvasElement).show();
  }


  async loadComponent(data: any, container: HTMLElement) {
    // Destroy the existing component if any
    if (this.componentRef) {
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
    }
    let module: any = {};
    try {
      module = await import(`src/app/${data.mainComponentPath}.component`);
    } catch (e: any) {
      module = await import(`src/app//pages/demo/module-not-found/module-not-found.component`);
      data.mainComponentClass = "ModuleNotFoundComponent"
    }
    // Render Angular Component inside the Offcanvas
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(module[data.mainComponentClass]);
    this.componentRef = componentFactory.create(this.injector);
    this.componentRef = componentFactory.create(this.injector);


    // Pass data to component
    if (data) {
      Object.assign(this.componentRef.instance, data);
    }

    this.appRef.attachView(this.componentRef.hostView);
    container.innerHTML = ''; // Clear previous component
    container.appendChild(this.componentRef.location.nativeElement);
  }


  close() {
    this.offcanvasInstance?.hide();
    if (this.componentRef) {
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }

  closeCanvas() {
    if (this.offcanvasInstance) {
      this.offcanvasInstance.hide(); // Hide Bootstrap Offcanvas
      this.offcanvasInstance = null;
    }
    debugger
    if (this.componentRef) {
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
      this.componentRef = null;
    }

    // Remove offcanvas element from the DOM
    const existingOffcanvas = document.getElementById('dynamicOffcanvas');
    if (existingOffcanvas) {
      existingOffcanvas.remove();
    }

    // ✅ Remove the Bootstrap backdrop manually
    const backdrop = document.querySelector('.offcanvas-backdrop');
    if (backdrop) {
      backdrop.remove();
    }

    // ✅ Ensure body scrolling is restored
    document.body.classList.remove('offcanvas-open');
  }

  addInStack() {
    if (this.componentRef?.instance && typeof this.componentRef.instance.addInStack === 'function') {
      this.componentRef.instance.addInStack(); // ✅ Call function inside the component
    } else {
      console.warn('addInStack function not found in the loaded component.');
    }
    this.closeCanvas();
  }

  // -------------- STACK
  __STACK_KEY: string = "STACK_KEY";
  __STACK_ID: string = "__STACK_ID";
  getStackData() {
    let temp: any = localStorage.getItem(this.__STACK_KEY);
    if (temp) {
      temp = JSON.parse(temp);
      return temp;
    }
    return [];
  }
  addDataInStack(data: any) {
    let new_stack_id: any = 1;
    let existingData: any = localStorage.getItem(this.__STACK_KEY)
    if (existingData) {
      try {
        existingData = JSON.parse(existingData);
        new_stack_id = existingData.length + 1;
      } catch (e: any) {
        new_stack_id = 1;
      }
    }
    if (new_stack_id == 1) {
      //--------- fresh entry 
      existingData = [];
    } else {
      //---------- if data availble then push in existing data 
    }
    data[this.__STACK_ID] = new_stack_id;
    existingData.push(data)
    localStorage.setItem(this.__STACK_KEY, JSON.stringify(existingData))
  }
  clearStack() {
    localStorage.removeItem(this.__STACK_KEY)
  }
  removeTran(__STACK_ID: any) {
    let stackData = this.getStackData();
    stackData = stackData.filter(ele => ele.__STACK_ID != __STACK_ID);
    localStorage.setItem(this.__STACK_KEY, JSON.stringify(stackData))

  }
  //-------- single component load end


}

