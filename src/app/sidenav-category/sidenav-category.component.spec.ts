import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavCategoryComponent } from './sidenav-category.component';

describe('SidenavCategoryComponent', () => {
  let component: SidenavCategoryComponent;
  let fixture: ComponentFixture<SidenavCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
