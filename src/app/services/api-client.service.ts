import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { tap } from "rxjs/operators";

@Injectable()
export class ApiClient {

    constructor(private http: HttpClient) {}

    get(url) {
        return this.http.get(this.getApiUrl(url))
        .pipe(tap(res=>console.log("tapping all get calls",res)));
    }

    post(url, data: any) {
        return this.http.post(this.getApiUrl(url),data);
    }

    private getApiUrl(url) {
        return environment.apiPath + url;
    }
}