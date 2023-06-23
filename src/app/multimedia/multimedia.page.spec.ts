import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { MultimediaPage } from './multimedia.page';

describe('MultimediaPage', () => {
  let component: MultimediaPage;
  let fixture: ComponentFixture<MultimediaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultimediaPage],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(MultimediaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});