import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalContractDetailComponent } from './modal-contract-detail.component';

describe('ModalContractDetailComponent', () => {
  let component: ModalContractDetailComponent;
  let fixture: ComponentFixture<ModalContractDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalContractDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalContractDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
