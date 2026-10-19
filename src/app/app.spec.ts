import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';
import { FeaturedWorkComponent } from './components/featured-work/featured-work.component';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the router outlet shell', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  });

  it('should support three equal-width featured project cards', () => {
    const fixture = TestBed.createComponent(FeaturedWorkComponent);
    const component = fixture.componentInstance;

    expect(component['projects']).toHaveSize(3);
    expect(component['projects'].every((project: { columnClass: string }) => project.columnClass === 'col-4')).toBeTrue();
  });
});
