import { DatetimeToIsoDatePipe } from './datetime-to-iso-date.pipe';

describe('DatetimeToIsoDatePipe', () => {
  it('create an instance', () => {
    const pipe = new DatetimeToIsoDatePipe();
    expect(pipe).toBeTruthy();
  });
});
