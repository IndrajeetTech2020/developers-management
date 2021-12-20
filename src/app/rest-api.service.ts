import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TimeSheet, TimeSheetPage } from './time-sheet';

export interface OAuthLoginResponse {
  access_token: string;
}

const clientId = 'Jp38I84M2Iyjk5AD2Nb1ZZE1iJ1VBZKg91fWzAj3' ; //'wql5aqXepfkcF0JQOAoOo921zbvcrQSg1MUb2VUe';
const clientSecret = 'YJzBU2VEktkjzI7fMONa99TUB1Hz9BjPUiTI21egAcpDvVEJAxJRGOl4rEsdOYxJ7hn5QthRuWx8RW2idkIrnZ0xP1SBzelRqTSHbHjEMRhrlcu7pCZipD7tpdZJMqPx';
// 'tVnwobvL4C7D76AOsYkrtDLh1D1mahbUqkzSBfqVi2zXfsBBD9Jm8FNe6yWof1XYIOwBfxtKrZh4Eug3piGu94Oga2R0VHJVG2VxQn1pw5Y5xcBOva0IX1n4WrPXZn0N';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  public loggedIn = false;
  public accessToken: string;

  constructor(private http: HttpClient) {
    this.accessToken = localStorage.getItem('accessToken');
    this.loggedIn = false;
    this.accessToken = null;
  }

  logout() {
    this.loggedIn = false;
    this.accessToken = null;
  }

  login(username: string, password: string) {
    const headers = new HttpHeaders({});
    const data = {
      grant_type: 'password',
      username,
      password,
      client_id: clientId,
      client_secret: clientSecret,
      scope: 'read write timesheets'
    };
    this.http.post('/oauth/token/', data, { headers }).subscribe((response: OAuthLoginResponse) => {
      this.loggedIn = true ;
      this.accessToken = response.access_token;
      localStorage.setItem('accessToken', this.accessToken);
    }, (error) => {
      this.logout();
    });
  }

  commonOptions(): { params?: any, headers?: HttpHeaders } {
    if (!this.loggedIn) {
      return {};
    }
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.accessToken}`
      })
    };
  }

  createTimesheet(timeSheetData: TimeSheet) {
    const { date, ...data } = timeSheetData;
    return this.http.post(
      `api/v1/timesheets/`,
      {
        date: date.toISOString().split('T')[0],
        ...data
      },
      this.commonOptions()
    );
  }
  lstCreateTimesheet(timeSheetData : TimeSheet[]){
    console.log('EventFires');
    return this.http.post(
      `api/v1/timesheets/`,
      timeSheetData
      ,
      this.commonOptions()
    );
  }

  getTimesheet(id: number) {
    return this.http.get(`/api/v1/timesheets/${id}/`, this.commonOptions()).pipe(
      map((data: any) => {
        return new TimeSheet(
          data.id, data.date, data.fromTime, data.toTime,
          data.onsite_or_offsite, data.customer, data.contract,
          data.tickets , data.others
        );
      })
    );
  }

  listTimesheet(pageIndex: number = 1): Observable<TimeSheetPage> {
    const options = this.commonOptions();
    options.params = { page: pageIndex };
    
    return this.http.get<TimeSheetPage>('/api/v1/timesheets/', options).pipe(
      map((page: any) => {
        const { results, count } = page;
        let timeSheets = results.map((data) => {
          return new TimeSheet(
            data.id, data.date, data.fromTime, data.toTime,
            data.onsite_or_offsite, data.customer, data.contract,
            data.tickets , data.others
          );
        })
        return { results: timeSheets, count };
      })
    );
  }

  deleteTimesheet(id: number) {
    return this.http.delete(`/api/v1/timesheets/${id}/`, this.commonOptions());
  }

  updateTimesheet(timeSheetData: TimeSheet) {
    const { date, ...data } = timeSheetData;
    return this.http.put(
      `/api/v1/timesheets/${timeSheetData.id}/`,
      {
        ...data
      },
      this.commonOptions()
    );
  }

  api_link : string = 'http://182.58.137.63';

  getAllPosts() {
    return this.http.get(this.api_link + `/res_poissons?min_csl=0.92&max_csl=0.98&avg_csl=0.95`);
  }

  getAllPostsByPostMeth() {
    return this.http.post(this.api_link + `/res_poissons`,{"min_csl":0.92,"max_csl":0.98,"avg_csl":0.95});
  }

}