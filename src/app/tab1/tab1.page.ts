/* eslint-disable prefer-const */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  public GETMahasiwa: any;
  public deleteSiswa: any;
  constructor(
    private http: HttpClient
  ) { }


  ionViewWillEnter() {
    this._Getdata();
  }


  _Getdata() {
    let data: Observable<any>;
    data = this.http.get('http://localhost/ci3_restapi/index.php/Api/GetData');
    data.subscribe(result => {
      this.GETMahasiwa = result;
      console.log(result);
    });
  }

  public deleteData(id) {
    let data: Observable<any>;
    data = this.http.get('http://localhost/ci3_restapi/index.php/Api/DeleteData/' + id);
    data.subscribe((result) => {
      this.deleteSiswa = result;
      console.log(result.status);
      if (result.status === 'Ok') {
        alert('Delete Data Successfully!');
        this.ionViewWillEnter();
      }
    });
  }
}




