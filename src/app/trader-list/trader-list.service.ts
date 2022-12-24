import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TraderListService {

  constructor() { }

  getDataSource(){
    return [
      {
        key: '1',
        id: 1,
        firstName: 'Mike',
        lastName: 'Spencer',
        dob: new Date().toLocaleDateString(),
        country: 'Canada',
        email: 'mike@test.com'
      },
      {
          key: '2',
          id: 2,
          firstName: 'Hellen',
          lastName: 'Miller',
          dob: new Date().toLocaleDateString(),
          country: 'Austria',
          email: 'hellen@test.com'
      }
    ]
  }

  getColumns() {
    return ['First Name', 'Last Name', 'Email', 'DateOfBirth', 'Country', 'Actions']
  //   return [
  //     {
  //         title: 'First Name',
  //         dataIndex: 'firstName',
  //         key: 'firstName',
  //     },
  //     {
  //         title: 'Last Name',
  //         dataIndex: 'lastName',
  //         key: 'lastName',
  //     },
  //     {
  //         title: 'Email',
  //         dataIndex: 'email',
  //         key: 'email',
  //     },
  //     {
  //         title: 'Date of Birth',
  //         dataIndex: 'dob',
  //         key: 'dob',
  //     },
  //     {
  //         title: 'Country',
  //         dataIndex: 'country',
  //         key: 'country',
  //     },
  //     {
  //         title: 'Actions',
  //         dataIndex: 'actions',
  //         key: 'actions'
  //     },
  // ]
  }
}
