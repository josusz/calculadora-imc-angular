
import { Component } from '@angular/core';

@Component({
  selector: 'app-calc-imc',
  templateUrl: './calc-imc.component.html',
  styleUrls: ['./calc-imc.component.css']
})
export class CalcImcComponent {
  peso: number=0;
  altura: number=0;
  imc: number=0;
  classificacao: string="Classificação";

  calcular(){
  this.imc = +(this.peso/(this.altura*this.altura)).toFixed(2);

    if (this.peso < 1|| this.altura < 1){
      window.alert("PESO e ALTURA não podem ser menores ou iguais a 0.");
      this.imc = 0;
      return;
    }
    
    if (this.imc < 18.5){
      this.classificacao = "Magreza";
    } else if (this.imc < 25){
        this.classificacao = "Normal";
      } else if (this.imc < 30){
          this.classificacao = "Sobrepeso";
        } else if (this.imc < 35){
            this.classificacao = "Obesidade grau I";
          } else if (this.imc < 40){
              this.classificacao = "Obesidade grau II";
            } else{
                this.classificacao = "Obesidade grau III";
              } 
  }

  limpar(){
    this.peso=0;
    this.altura=0;
    this.imc=0
    this.classificacao="Classificação";
  }
}