import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app-faker-formulario';
  cadastroUsuarioForm: FormGroup | any;
  
  formStatusView = {
    nome: false,
    idade: false,
  };

  cadastroUsuario = {
    nome: "",
    idade: '',
  };

  btnSalvar: boolean = false; 
  btnEdit: boolean = true;

  
  ngOnInit(): void { 
    this.cadastroUsuarioForm = new FormGroup({
      nome: new FormControl({ value: this.cadastroUsuario.nome , disabled:false }, [Validators.required]),
      idade: new FormControl({ value: this.cadastroUsuario.idade, disabled:false }, [Validators.required]) 
    });     
  }

  get nome() {
    console.info(this.cadastroUsuarioForm.get('nome'))
    return this.cadastroUsuarioForm.get('nome');
  }

  
  get idade() {
      console.info(this.cadastroUsuarioForm.get('idade'))
    return this.cadastroUsuarioForm.get('idade');
  }

  submit() {
    this.btnSalvar =true;
    this.btnEdit = false;
    this.nome.disable();
    this.idade.disable();
  }

  edit() {
    this.btnSalvar = false;
    this.btnEdit = true;
    this.nome.enable();
    this.idade.enable();
  }

  onSubmit() {
    if (this.cadastroUsuarioForm.valid) {
      this.submit();
      console.log("Envidado com sucesso")
    } else {
      console.warn(this.cadastroUsuarioForm.valid)      
    }
  }
}
