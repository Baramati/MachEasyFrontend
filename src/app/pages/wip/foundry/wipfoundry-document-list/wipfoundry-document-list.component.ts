import { Component, ViewChild } from '@angular/core';
import { GridColumn } from 'smart-webcomponents-angular';
import { GridComponent } from 'smart-webcomponents-angular/grid';
import { OffcanvasService } from 'src/app/core/services/offcanvas.service';
import { ToastService } from 'src/app/core/services/toast.service';
import * as moment from 'moment'

@Component({
  selector: 'app-wipfoundry-document-list',
  templateUrl: './wipfoundry-document-list.component.html',
  styleUrls: ['./wipfoundry-document-list.component.css']
})
export class WIPFoundryDocumentListComponent {
  constructor(
    private offcanvasService: OffcanvasService,
    private toastService: ToastService
  ) { }
  ///////----------------- smart table Grid Code ---------------/////////
  dataSource: any = [
    { 'firstName': 'Test 1', 'lastName': 'Test 1', 'productName': 'Test 1', 'amount': 10 },
    { 'firstName': 'Test 1', 'lastName': 'Test 1', 'productName': 'Test 1', 'amount': 10 },
    { 'firstName': 'Test 1', 'lastName': 'Test 1', 'productName': 'Test 1', 'amount': 10 },
    { 'firstName': 'Test 2', 'lastName': 'Test 2', 'productName': 'Test 2', 'amount': 10 },
    { 'firstName': 'Test 3', 'lastName': 'Test 3', 'productName': 'Test 3', 'amount': 10 },
    { 'firstName': 'Test 4', 'lastName': 'Test 4', 'productName': 'Test 4', 'amount': 10 },
    { 'firstName': 'Test 5', 'lastName': 'Test 5', 'productName': 'Test 5', 'amount': 10 },
  ];
  columns: GridColumn[] = [
    {
      label: 'First Name',
      dataField: 'firstName',
      template: function (formatObject: any) {
        const value = formatObject.value;
        if (!formatObject.template) {
          // render the template.
          const element = document.createElement('div');
          element.innerHTML = value;
          formatObject.template = element;
        }
        else {
          // update the template.
          formatObject.template.innerHTML = value;
        }
        // apply CSS class depending on the cell's value.
        formatObject.template.className = '';
        formatObject.template.classList.add('text-primary', 'ms-2', 'text-decoration-underline', 'mouse-pointer');
      }
    },
    {
      label: 'Last Name',
      dataField: 'lastName'
    },
    {
      label: 'Product',
      dataField: 'productName'
    },
    {
      label: 'Amount',
      dataField: 'amount',
    }
  ];

  columnGroups = [
    { label: 'Customer Name', align: 'center', name: 'name' },
  ]

  @ViewChild('grid', { static: false }) grid!: GridComponent;
  onRowClick(event: any) {
    const rowIndex = event.detail.id; // Get the row index
    const rowData = event.detail.row.data; // Get the row data
    console.log(`Row Clicked: Index = ${rowIndex}`, rowData);
  }

  onCellClick(event: any) {
    console.log('Full Event:', event); // Log full event structure

    const rowIndex = event.detail?.cell?.row?.index;  // Get row index
    const columnField = event.detail?.cell?.column?.dataField; // Get column field
    const cellValue = event.detail?.value;  // Get the clicked cell value
    if (columnField == "firstName") {
      const grid = event.target; // Get the grid instance
      grid.unselect(rowIndex); // Deselect only the clicked row
      // this.offcanvasService.openSingle(Test2Component, '', {
      //   // this.offcanvasService.open(Test3Component, '', {
      //   queryParams: {
      //     test: "test value"
      //   },
      //   isItSourceOffCanvas: true
      // });
      this.offcanvasService.openDynamicComponent({
        mainComponentPath: "pages/demo/material/material",
        mainComponentClass: "MaterialComponent",
        mainComponentTitle: '',
        queryParams: {
          status: "Edit"
        },
        isItSourceOffCanvas: true,
        formHeading: "Demo Heading",
        tabs: [
          {
            data: {
              mainComponentPath: "pages/demo/material/material",
              mainComponentClass: "MaterialComponent",
            },
            name: "Material"
          },
          {
            data: {
              mainComponentPath: "pages/demo/stock/stock",
              mainComponentClass: "StockComponent",
            },
            name: "Stock"
          },
          {
            data: {
              mainComponentPath: "InvalidPath",
              mainComponentClass: "InvalidPath",
            },
            name: "Ledger"
          },
        ]
      });
    }
  }

  filtering = {
    enabled: false
  };
  appearance = {
    alternationCount: 2,
    showRowHeader: true,
    showRowStatus: true,
    showRowHeaderSelectIcon: true,
    showRowHeaderFocusIcon: false,
    showColumnIcon: false,
    allowHover: true,
    showRowNumber: true
  }
  summaryRow = {
    visible: true,
  }

  sorting = {
    enabled: true,
    mode: 'many'
  }

  editing = {
    enabled: false,
    addNewRow: {
      visible: true,
      displayMode: 'button'
    }
  }
  selection = {
    enabled: true,
    allowCellSelection: false,
    allowRowHeaderSelection: true,
    allowColumnHeaderSelection: true,
    mode: 'single'
  }

  behavior = { allowColumnReorder: true, rowResizeMode: 'growAndShrink', columnResizeMode: 'growAndShrink' }
  grouping = {
    enabled: false,
    renderMode: 'compact',
    groupBar: {
      visible: true
    },
    summaryRow: {
      inline: false
    }
  }
  header = {
    visible: false,
    buttons: ['columns', 'filter', 'sort', 'delete', 'search'],
    onInit(item) {
    }
  }

  rowDetail = {
    enabled: true,
    dialog: {
      enabled: true
    }
  }

  columnMenu = {
    dataSource: {
      columnMenuCustomizeType: {
        visible: true
      },
      columnMenuItemDelete: {
        visible: true
      }
    }
  }

  ngOnInit() {
    this.getStackData()
  }
  isLoading: boolean = false;
  isItEdit: boolean = true;
  fromDate: string = moment().format("DD/MM/YYY")
  toDate: string = moment().format("DD/MM/YYY")
  onCreate() {
    this.offcanvasService.openDynamicComponent({
      mainComponentPath: "pages/demo/material/material",
      mainComponentClass: "MaterialComponent",
      mainComponentTitle: '',
      queryParams: {
        status: "Add"
      },
      isItSourceOffCanvas: true,
      formHeading: "Demo Heading",
      tabs: [
        { path: "pages/demo/material/material", component: "MaterialComponent", name: "Material" },
        { path: "pages/demo/stock/stock", component: "StockComponent", name: "Stock" },
        { path: "InvalidPath", component: "InvalidPath", name: "Ledger" },
      ]
    });
  }
  //------------------- STACK BUTOTN 
  showStackBtn: boolean = false;
  buttonWidth: any = 'auto'
  isShowFull: boolean = false;
  showPopover: boolean = false;
  stackData: any[] = [];
  getStackData() {
    debugger
    this.showStackBtn = true;
    this.stackData = this.offcanvasService.getStackData();
  }
  onRemoveItemFromStack(item) {
    this.offcanvasService.removeTran(item.__STACK_ID);
    this.getStackData();
    if (this.stackData.length == 0) {
      this.showStackBtn = false;
    }

  }
  onClear() {
    this.offcanvasService.clearStack();
    this.stackData = [];
    this.showStackBtn = false;
    this.getStackData();
  }
  openCanvas(item: any) {
    this.isShowFull = false;
    this.offcanvasService.openDynamicComponent({
      mainComponentPath: "pages/demo/material/material",
      mainComponentClass: "MaterialComponent",
      mainComponentTitle: '',
      queryParams: {
        status: "Edit"
      },
      isItSourceOffCanvas: true,
      formHeading: "Demo Heading",
      tabs: [
        { path: "pages/demo/material/material", component: "MaterialComponent", name: "Material" },
        { path: "pages/demo/stock/stock", component: "StockComponent", name: "Stock" },
        { path: "InvalidPath", component: "InvalidPath", name: "Ledger" },
      ]
    });
  }

  onSearch() {

  }
}

  


