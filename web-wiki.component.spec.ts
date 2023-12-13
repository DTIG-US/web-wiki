import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebWikiComponent } from './web-wiki.component';

describe('WebWikiComponent', () => {
  let component: WebWikiComponent;
  let fixture: ComponentFixture<WebWikiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebWikiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebWikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
