import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr-ok',
  templateUrl: './qr-ok.component.html',
  styleUrls: ['./qr-ok.component.css']
})
export class QrOkComponent implements OnInit {

  timestampok: string;
  catracaok: string;
  mensagemok: string;

  constructor() { 
    this.timestampok = "2018-12-01-15:04:35";
    this.catracaok = "../../assets/svgs/catraca_fechada.svg";
    this.mensagemok = "Boa Viagem";
  }

  ngOnInit() {
  }

}
