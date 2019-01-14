import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameGeneratorComponent } from './frame-generator.component';

describe('FrameGeneratorComponent', () => {
  let component: FrameGeneratorComponent;
  let fixture: ComponentFixture<FrameGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
