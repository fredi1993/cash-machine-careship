import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should return 20,10', async(() => {
    let component =  new AppComponent();
    let values= component.deliverNotes(30);
    expect(values).toEqual([20,10]);
  }));


  it('should return 50,20,10', async(() => {
    let component =  new AppComponent();
    let values= component.deliverNotes(80);
    expect(values).toEqual([50,20,10]);
  }));


  it('should return an empty array', async(() => {
    let component =  new AppComponent();
    expect(component.deliverNotes(undefined)).toEqual([]);
  }));


  it('should throw NoteUnavailableException error', async(() => {
    let component =  new AppComponent();
    expect(() =>component.deliverNotes(125)).toThrow(new Error('NoteUnavailableException'));
  }));

  
  it('should throw InvalidArgumentException error', async(() => {
    let component =  new AppComponent();
    expect(() =>component.deliverNotes(-130)).toThrow(new Error("InvalidArgumentException"));
  }));


});
