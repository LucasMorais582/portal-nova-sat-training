/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UsersServiceService } from './usersService.service';

describe('Service: UsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersServiceService]
    });
  });

  it('should ...', inject([UsersServiceService], (service: UsersServiceService) => {
    expect(service).toBeTruthy();
  }));
});
