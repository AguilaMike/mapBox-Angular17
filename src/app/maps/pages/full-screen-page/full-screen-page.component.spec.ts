import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullScrennPageComponent } from './full-screen-page.component';

describe('FullScreenPageComponent', () => {
  let component: FullScrennPageComponent;
  let fixture: ComponentFixture<FullScrennPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullScrennPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullScrennPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
