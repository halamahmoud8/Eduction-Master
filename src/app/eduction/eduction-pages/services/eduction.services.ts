import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CoursesService {
    constructor(private http: HttpClient) { }

    public getCourses() {
        return this.http.get<any[]>("../assets/courses.json");
    }

    public getAllRequests() {
        return this.http.get<any[]>("../assets/requests.json");
    }

}
