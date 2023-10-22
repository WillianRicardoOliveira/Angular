import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '@services/site/login/login.service';

@Component({
  selector: 'app-login-site',
  templateUrl: './login-site.component.html',
  styleUrls: ['./login-site.component.scss']
})
export class LoginSiteComponent implements OnInit {

  loginForm!: FormGroup

  constructor(private formBuilder: FormBuilder,
    private service: LoginService,
    private router: Router
    ){}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, Validators.required]
    })
  }

  login() {
    const email = this.loginForm.value.email
    const senha = this.loginForm.value.senha
    this.service.login(email, senha).subscribe({
      next: (value) => {
        console.log("LOGIN : ", value)
        this.router.navigateByUrl("/")
      },
      error: (err) => {
        console.log("Erro no login : ", err)
      }
    })
  }

}
