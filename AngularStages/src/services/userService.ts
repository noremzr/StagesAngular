import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, retry, throwError } from "rxjs";
import { User } from "src/models/user";
import { ServiceBase } from "./servicesBase";

@Injectable({
    providedIn: 'root'
  })

export class UserService{
    constructor(private httpClient: HttpClient) { }

    defaultRoute="api/User";

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json','Accept':"*"})
      }


    public getUsers(){
        return this.httpClient.get<User[]>(ServiceBase.baseUrl + this.defaultRoute)
        .pipe(
            catchError(this.handleError)
            )
        }

        public saveUsers(users: User[]) {
            return this.httpClient.post<User[]>(ServiceBase.baseUrl+this.defaultRoute, users,this.httpOptions);
          }


        private handleError(error: HttpErrorResponse) {
            let errorMessage = '';
            if (error.error instanceof ErrorEvent) {
              // Erro ocorreu no lado do client
              errorMessage = error.error.message;
            } else {
              // Erro ocorreu no lado do servidor
              errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
            }
            console.log(errorMessage);
            return throwError(errorMessage);
          };
}