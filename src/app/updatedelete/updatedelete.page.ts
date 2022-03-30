import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updatedelete',
  templateUrl: './updatedelete.page.html',
  styleUrls: ['./updatedelete.page.scss'],
})
export class UpdatedeletePage implements OnInit {

  id: any;
  npm: number;
  nama: string;
  jurusan: string;
  prodi: string;
  kelas: string;
  public getSiswa: any;
  public updateSiswa: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.route.params.subscribe((param: any) => {
      this.id = param.id;
      this.GetDataWhere(this.id);
    });
  }

  GetDataWhere(id) {
    let data: Observable<any>;
    data = this.http.get('http://localhost/ci3_restapi/index.php/Api/GetDataWhere/' + id);
    data.subscribe((result) => {
      this.getSiswa = result;
      this.npm = this.getSiswa[0].npm;
      this.nama = this.getSiswa[0].nama;
      this.jurusan = this.getSiswa[0].jurusan;
      this.prodi = this.getSiswa[0].prodi;
      this.kelas = this.getSiswa[0].kelas;
    });
  }

  submit() {
    if (this.npm!=null && this.nama!=null && this.jurusan!=null && this.prodi!=null && this.kelas!=null){
      this.updateData();
      console.log(this.npm, this.nama, this.jurusan, this.prodi, this.kelas);
      alert('Update Data Berhasil');
    } else {
      alert('Terdapat Data yang error');
    }
  }

  updateData() {
    let data: Observable<any>;
    data = this.http.get('http://localhost/ci3_restapi/index.php/Api/PutData/' + '/' + this.npm + '/' + this.nama + '/' + this.jurusan + '/' + this.prodi + '/' + this.kelas + '/');
    data.subscribe((result) => {
      this.updateSiswa = result;
      console.log(result);
    });
  }

  ngOnInit() {}

}
