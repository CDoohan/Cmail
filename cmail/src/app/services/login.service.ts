import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

@Injectable()

export class LoginService{
    api = 'http://localhost:3200/login'

    constructor(private http: HttpClient){}

    logar(dadosLogin){
        console.log(dadosLogin);
        return this.http
            .post(this.api, dadosLogin)
            .pipe(
                map( (response: any) => {

                    let user = {
                        nome: response.name,
                        imagem: response.avatarUrl,
                        email: response.email
                    }

                    // localStorage.setItem('USER', response.)
                    localStorage.setItem('TOKEN', response.token);
                    localStorage.setItem('USER', JSON.stringify(user));
                    
                    return response;
                })
            )
    }
}
