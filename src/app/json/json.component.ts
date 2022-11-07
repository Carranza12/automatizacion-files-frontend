import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JsonService } from '../services/json.service';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.scss']
})
export class JsonComponent implements OnInit {

   public opcionSeleccionado: string = '';
    public jsonNew :FormGroup = new FormGroup({
      nombre_archivo: new FormControl('', Validators.required),
      id_archivo: new FormControl('', Validators.required),
      nombre_espanol: new FormControl('', Validators.required),
      nombre_ingles: new FormControl('', Validators.required),
      nombre_portugues: new FormControl('', Validators.required),
      nombre_coleccion: new FormControl('', Validators.required),
      titulo_espanol: new FormControl('', Validators.required),
      titulo_ingles: new FormControl('', Validators.required),
      titulo_portugues: new FormControl('', Validators.required),
    })

    public id_input: FormControl = new FormControl('', Validators.required);
    public nombre_input: FormControl = new FormControl('', Validators.required);
    public label_espanol: FormControl = new FormControl('', Validators.required);
    public label_ingles: FormControl = new FormControl('', Validators.required);
    public label_portuges: FormControl = new FormControl('', Validators.required);
    public tipo_input: FormControl = new FormControl('', Validators.required);

    public inputList : any = [];

  constructor(private _jsonService:JsonService) { }

  ngOnInit(): void {
  }



  public addInput(){
    const input = {
        id: this.id_input.value,
        name: this.nombre_input.value,
        label:{
          es: this.label_espanol.value,
          en:this.label_ingles.value,
          pt:this.label_portuges.value,
        },
        type:this.tipo_input.value
    }
    this.inputList.push(input);
    this.id_input.setValue("");
    this.nombre_input.setValue("");
    this.label_espanol.setValue("");
    this.label_ingles.setValue("");
    this.label_portuges.setValue("");
    this.tipo_input.setValue("");
    console.log(this.inputList)
  }

  public createJSON(){
    const jsonForm = {
      "name_file":this.jsonNew.controls['nombre_archivo'].value,
      "id_file":this.jsonNew.controls['id_archivo'].value,
      "name_file_es": this.jsonNew.controls['nombre_espanol'].value,
      "name_file_en":this.jsonNew.controls['nombre_ingles'].value,
      "name_file_pt":this.jsonNew.controls['nombre_portugues'].value,
      "db_table":this.jsonNew.controls['nombre_coleccion'].value,
      "title_file_es": this.jsonNew.controls['titulo_espanol'].value,
      "title_file_en":this.jsonNew.controls['titulo_ingles'].value,
      "title_file_pt":this.jsonNew.controls['titulo_portugues'].value,
      "inputs": this.inputList
    }
    this._jsonService.createJSON(jsonForm);
    this.jsonNew.reset();

  }

}


