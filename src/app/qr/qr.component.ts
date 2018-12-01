import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css']
})
export class QrComponent implements OnInit {
  //  A GERAÇÃO DOS QR CODES FICA CONDICIONADA A PADRONIZAÇAO DOS DADOS QUAIS DEVEM CIRCULAR
  //  --> EX:
  /*  - Nome do usuario
      - Timestamp
      - Creditos
      - id do QR
      - id da linha
      - id do validador
    Alguns dados sao sensiveis fazendo-se necessaria a atençao a segurança
      - Hashing destes dados
    Visando mitigar a possibilidade de fraudes o uso de tecnologias de blockchain destaca-se
      - Cadastro do usuario UNIFICADO - IMUTAVEL
      - 
    
  */
  catraca: string;
  timestamp: string;
  mensagem: string;

  constructor() { 
    this.timestamp = "2018-12-01-15:04:34";
    this.catraca = "../../assets/svgs/catraca.svg";
    this.mensagem = "Aproxime seu Codigo ao Leitor";

  }

  ngOnInit() {
  }

}
