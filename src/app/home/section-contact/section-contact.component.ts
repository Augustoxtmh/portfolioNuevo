import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { BookGameService } from 'src/app/service/book-game.service';

@Component({
  selector: 'app-section-contact',
  templateUrl: './section-contact.component.html',
  styleUrls: ['./section-contact.component.css']
})

export class SectionContactComponent{

  email: string = 'juanaugustohaser@gmail.com'; 
  copySuccess: boolean = false;
  copied: boolean = false;
  currentLang: string = 'es';

  forth: boolean = true;
  five: boolean = true;
  nine: boolean = true;

  constructor(private toastr: ToastrService,
    private translate: TranslateService,
    private bookGameServ: BookGameService
  ) {
    emailjs.init('ShlzPiGJZe8tIhb1S');
  }


  copyEmail() {
    navigator.clipboard.writeText(this.email).then(() => {
      this.toastr.success('Copiado', '');
      setTimeout(() => {
        this.copySuccess = false;
      }, 2000);
    }).catch(err => {
      this.toastr.error('Ocurrio un error', '');
    });
    this.copied = true;
  }

  openCv(){
    this.currentLang = this.translate.currentLang;

    if (this.currentLang === 'es') {
      window.open('assets/cv/Juan Augusto Haser CV.pdf', '_blank');
    } else {
      window.open('assets/cv/Juan Augusto Haser CVIngles.pdf', '_blank');
    }
  }

  sendEmail(form: NgForm): void {
    const serviceID = 'default_service';
    const templateID = 'template_lxb6a4n';
    this.toastr.success('Email enviado!', 'Hecho!');
    emailjs.sendForm(serviceID, templateID, 'form')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
          this.toastr.success('Email enviado!', 'Hecho!');
        form.resetForm();
      }, (error) => {
        console.log(error.text);
        this.toastr.error('Oh no!, ocurrio un error.', ':c');
      });
  }

  getBook(number: string) {
    switch(number){
      case '4':
        this.forth = false;
        break;
      case '5':
        this.five = false;
        break;
      default:
        this.nine = false;
    }
    this.bookGameServ.addToLibrary('Book ' + number);
  }
}