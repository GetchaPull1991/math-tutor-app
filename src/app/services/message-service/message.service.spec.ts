import { TestBed } from '@angular/core/testing';
import { MessageService } from './message.service';

//Added
import { ToastrService } from 'ngx-toastr';
import { ToastrModule } from 'ngx-toastr';


describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      //Added
      imports: [ToastrModule.forRoot()],
      providers: [{
        provide: ToastrService
      }],
    });
    service = TestBed.inject(MessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
