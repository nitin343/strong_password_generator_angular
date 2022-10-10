import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public length:number = 0 ;
  public useNumber = false;
  public useLetter = false;
  public useSymbol = false;
  public copy = false;

  password = '';

  includeNumber() {
    this.useNumber = !this.useNumber
  }

  includeLetter(){
    this.useLetter = !this.useLetter
  }

  includeSymbol() {
    this.useSymbol = !this.useSymbol
  }

  passLength(e:any){
    this.length = parseInt(e.target.value)
  }
  
  copied(){
    this.copy = false;
  }

  generatePassword(){
    this.copy = true;

    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!%&*?#$@';

    let validPass = '';
    if(this.useNumber){
      validPass += numbers
    }
    if(this.useLetter){
      validPass += letters
    }
    if(this.useSymbol){
      validPass += symbols
    }

    let generatePassword = ''
    for(let i=1 ; i<=this.length ; i++){
      const index = Math.floor(Math.random() * validPass.length);
      generatePassword += validPass[index];
    }

    this.password = generatePassword;  
  }
}
