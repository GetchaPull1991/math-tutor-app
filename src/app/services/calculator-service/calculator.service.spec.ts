import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /**********************************************************/
  it('should return a number between 1 and 10', () => {
    let number = service.generateNumber();

    expect(number).toBeGreaterThan(0);
    expect(number).toBeLessThan(11);
  })

  it('should return true on correct answer', () => {
    let x = 5;
    let y = 4;
    let correctAnswer = x + y;
    let result = service.checkAnswer(x, y, correctAnswer);

    expect(result).toBe(true);
  })

  it('should return false on incorrect answer', () =>{
    let x = 5;
    let y = 4;
    let incorrectAnswer = x + y - 1;
    let result = service.checkAnswer(x, y, incorrectAnswer);

    expect(result).toBe(false);
  })
});
