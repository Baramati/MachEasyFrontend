import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { ConfirmAlertService } from '../confirm-alert/confirm-alert.service';
import { ConfirmAlertComponent } from '../confirm-alert/confirm-alert.component';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent {
  @ViewChild(ConfirmAlertComponent) confirmAlert!: ConfirmAlertComponent;

  //********** Defaults for Offcanvas Start **************/
  @Input() queryParams: any = {};
  @Input() isItSourceOffCanvas: boolean = false;
  //********** Defaults for Offcanvas End **************/

  // Form Group
  dataForm!: FormGroup;

  // Buttons
  displaySubmitBtn: boolean;
  displayBackBtn: boolean;
  displayDelBtn: boolean;
  displayUpdateBtn: boolean;
  displayApproveBtn: boolean;
  displayPrintBtn: boolean;

  // Drop down variables
  DrpDwn_MaterialType: any[] = [
    { CODE: '1', NAME: "Type Test1" },
    { CODE: '2', NAME: "Type Test2" },
    { CODE: '3', NAME: "Type Test3" },
  ];
  DrpDwn_MaterialGroup: any[] = [
    { CODE: '1', NAME: "Group Test1" },
    { CODE: '2', NAME: "Group Test2" },
    { CODE: '3', NAME: "Group Test3" },
  ];

  isLoading: boolean = true;
  isItEdit: boolean = false;

  constructor(
    private readonly formBuilder: FormBuilder,
    // private confirmAlertService: ConfirmAlertService
  ) { }

  ngOnInit(): void {
    this.dataForm = this.formBuilder.group({
      matType: ['1'],
      matName: ['Mat Name'],
      alternateMatName: ['Alternate Mat Name'],
      matGroup: ['1'],
    });

    this.setData();
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);


  }

  setData() {
    this.displaySubmitBtn = true;
    this.displayBackBtn = true;
    this.displayDelBtn = true;
    this.displayUpdateBtn = false;
    this.displayApproveBtn = false;
    this.displayPrintBtn = false;
  }


  viewObj() { alert("function call : viewObj()") }
  onBack() { alert("function call : onBack()") }
  onSubmit() { alert("function call : onSubmit()") }
  onUpdate() { alert("function call : onUpdate()") }
  async onDelete() {
    const result = await new Promise<boolean>((resolve) => {
      this.confirmAlert.openConfirmModal(resolve);
    });

    if (result) {
      console.log('Item deleted');
    } else {
      console.log('Action cancelled');
    }
  }
  onApprove() { alert("function call : onApprove()") }
  onPrint() { alert("function call : onPrint()") }
}
