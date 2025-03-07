import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Offcanvas } from 'bootstrap';
import { OffcanvasService } from 'src/app/core/services/offcanvas.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent {
  //********** Defaults for Offcanvas Start **************/
  @Input() mainComponentPath: string = "";
  @Input() mainComponentName: string = "";
  @Input() mainComponentClass: string = "";
  @Input() queryParams: any = {};
  @Input() isItSourceOffCanvas: boolean = false;
  @Input() formHeading: string = "";
  @Input() tabs: any[] = [];
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
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly toastService: ToastService,
    private readonly offcanvasService: OffcanvasService
  ) { }

  ngOnInit(): void {
    this.dataForm = this.formBuilder.group({
      //----------------
      matType: [''],
      matName: [''],
      alternateMatName: [''],
      matGroup: [''],
      //----------------
      purchaseLedger: [''],
      purchaseReturnLedger: [''],
      salesLedger: [''],
      salesReturnLedger: [''],
      hsnCode: [''],
      goodsCategory: [''],
      rateForITC4: [''],
      labourRateINR: [""],
      //----------------
      matSubGrade: [''],
      subGradeDesc: [''],
      matOwnType: [''],
      despatchAs: [''],
      drawingNo: [''],
      revisionNum: [''],
      revisionDate: [''],
      castingWeight: [''],
      finishedWeight: [''],
      castingRateINR: [''],
      finishedRateINR: [''],
      bhnSpecFrom: [''],
      bhnSpecTo: [''],
      salesClassification: [''],
      marketSegment: [''],
      internalPartCode: [''],
      uom: [''],
      qualityType: [''],
      rejectedScarpMaterial: [''],
      isActiveMaterial: [true],
      //-------------------------
    });
    this.setData();
    this.toastService.show('Error', 'Fail To Load Data', 'Error', 2000);
    setTimeout(() => {
      this.toastService.show('Warning', 'Try Again.', 'Warning', 2000);
    }, 2000);
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

  setData() {
    this.displaySubmitBtn = false;
    this.displayBackBtn = true;
    this.displayDelBtn = false;
    this.displayUpdateBtn = false;
    this.displayApproveBtn = false;
    this.displayPrintBtn = false;
    if (this.queryParams.status == "Add") {
      this.displaySubmitBtn = true;
      this.isItEdit = true;
    } else if (this.queryParams.status == "Edit") {
      this.viewObj()
      this.displayUpdateBtn = true;
    }
  }

  viewObj() {
    this.dataForm.patchValue({
      //----------------
      matType: '1',
      matName: 'Mat Name',
      alternateMatName: 'Alternate Mat Name',
      matGroup: '1',
      //----------------
      purchaseLedger: '1',
      purchaseReturnLedger: '1',
      salesLedger: '1',
      salesReturnLedger: '1',
      hsnCode: '1',
      goodsCategory: 'Good Category',
      rateForITC4: '14',
      labourRateINR: "1401",
      //----------------
      matSubGrade: '1',
      subGradeDesc: 'Sub Grade Desc',
      matOwnType: 'Own Type',
      despatchAs: '0',
      drawingNo: '1234',
      revisionNum: '123',
      revisionDate: '27/02/2025',
      castingWeight: '15.2',
      finishedWeight: '10.2',
      castingRateINR: '14',
      finishedRateINR: '20',
      bhnSpecFrom: '10',
      bhnSpecTo: '20',
      salesClassification: '1',
      marketSegment: '1',
      internalPartCode: 'SHUBH1401',
      uom: '2',
      qualityType: '3',
      rejectedScarpMaterial: '1',
      isActiveMaterial: true,
      //-------------------------
    });
  }
  onBack() {
    this.offcanvasService.closeCanvas();
  }
  onSubmit() {
    this.toastService.show('Bootstrap', 'This is a toast notification', 'Success', 5000);
    this.toastService.show('Bootstrap', 'This is a toast notification', 'Error', 5000);
    this.toastService.show('Bootstrap', 'This is a toast notification', 'Fail', 5000);
    this.toastService.show('Bootstrap', 'This is a toast notification', 'Warning', 5000);
  }
  onUpdate() { alert("function call : onUpdate()") }
  onDelete() { alert("function call : onDelete()") }
  onApprove() { alert("function call : onApprove()") }
  onPrint() { alert("function call : onPrint()") }
  addInStack() {
    let data: any = {
      // --------- FOR CANVAS
      mainComponentPath: this.mainComponentPath,
      mainComponentName: this.mainComponentName,
      mainComponentClass: this.mainComponentClass,
      queryParams: this.queryParams,
      isItSourceOffCanvas: this.isItSourceOffCanvas,
      formHeading: this.formHeading,
      tabs: this.tabs,
      // -------------- FOR STACK BTN
      NAME: this.matName.value,
      //------------- FORM DATA 
      formData: this.dataForm.value
    }
    this.offcanvasService.addDataInStack(data);
  }

  //-------------form edit option 
  isItEdit: boolean = false;

  //----------------
  get matType() { return this.dataForm.get("matType") }
  get matName() { return this.dataForm.get("matName") }
  get alternateMatName() { return this.dataForm.get("alternateMatName") }
  get matGroup() { return this.dataForm.get("matGroup") }
  get purchaseLedger() { return this.dataForm.get("purchaseLedger") }
  get purchaseReturnLedger() { return this.dataForm.get("purchaseReturnLedger") }
  get salesLedger() { return this.dataForm.get("salesLedger") }
  get salesReturnLedger() { return this.dataForm.get("salesReturnLedger") }
  get hsnCode() { return this.dataForm.get("hsnCode") }
  get goodsCategory() { return this.dataForm.get("goodsCategory") }
  get rateForITC4() { return this.dataForm.get("rateForITC4") }
  get labourRateINR() { return this.dataForm.get("labourRateINR") }
  get matSubGrade() { return this.dataForm.get("matSubGrade") }
  get subGradeDesc() { return this.dataForm.get("subGradeDesc") }
  get matOwnType() { return this.dataForm.get("matOwnType") }
  get despatchAs() { return this.dataForm.get("despatchAs") }
  get drawingNo() { return this.dataForm.get("drawingNo") }
  get revisionNum() { return this.dataForm.get("revisionNum") }
  get revisionDate() { return this.dataForm.get("revisionDate") }
  get castingWeight() { return this.dataForm.get("castingWeight") }
  get finishedWeight() { return this.dataForm.get("finishedWeight") }
  get castingRateINR() { return this.dataForm.get("castingRateINR") }
  get finishedRateINR() { return this.dataForm.get("finishedRateINR") }
  get bhnSpecFrom() { return this.dataForm.get("bhnSpecFrom") }
  get bhnSpecTo() { return this.dataForm.get("bhnSpecTo") }
  get salesClassification() { return this.dataForm.get("salesClassification") }
  get marketSegment() { return this.dataForm.get("marketSegment") }
  get internalPartCode() { return this.dataForm.get("internalPartCode") }
  get uom() { return this.dataForm.get("uom") }
  get qualityType() { return this.dataForm.get("qualityType") }
  get rejectedScarpMaterial() { return this.dataForm.get("rejectedScarpMaterial") }
  get isActiveMaterial() { return this.dataForm.get("isActiveMaterial") }
}
