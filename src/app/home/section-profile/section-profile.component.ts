  import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
  import { TranslateService } from '@ngx-translate/core';
  import { BookGameService } from 'src/app/service/book-game.service';

  @Component({
    selector: 'app-section-profile',
    templateUrl: './section-profile.component.html',
    styleUrls: ['./section-profile.component.css']
  })
  
  export class SectionProfileComponent {
    @Output() themeChanged = new EventEmitter<boolean>();
    urlTheme: string = '../../../assets/icons8-sun-100-removebg-preview.png';
    theme: boolean = false;
    urlLang: string = '../../../assets/icons8-spain-flag-48-removebg-preview.png';
    lang: boolean = false;
    clicked: boolean = false;
    first: boolean = true;
    third: boolean = true;
    six: boolean = true;
    height: boolean = true;

    icons = [
      { title: 'Github', src: '../../assets/icons8-github-50.png', alt: 'Github icon', url: 'https://github.com/Augustoxtmh' },
      { title: 'Linkedin', src: '../../assets/icons8-linkedin-50.png', alt: 'Linkedin icon', url: 'https://www.linkedin.com/in/juan-augusto-haser-744733247/' },
      { title: 'Juanaugustohaser@gmail.com', src: '../../assets/icons8-email-30.png', alt: 'Email icon', url: 'mailto:Juanaugustohaser@gmail.com' }
    ];
    
    constructor(private translate: TranslateService, private bookGameService: BookGameService){}

    switchTheme() {
      this.theme = !this.theme;
      document.body.classList.toggle('light-mode', this.theme);
      localStorage.setItem('isDarkMode', JSON.stringify(this.theme));
      this.updateThemeIcon();
      this.themeChanged.emit(this.theme);
    }

    private updateThemeIcon() {
      this.urlTheme = this.theme 
        
        ? '../../../assets/icons8-moon-90-removebg-preview.png'
        : '../../../assets/icons8-sun-100-removebg-preview.png';
    }

    switchLang()
    {
      if(!this.lang)
      {
        this.translate.use('en');
        this.lang = true;
        this.urlLang = '../../../assets/icons8-usa-48-removebg-preview.png';
      }
      else{
        this.translate.use('es');
        this.lang = false;
        this.urlLang = '../../../assets/icons8-spain-flag-48-removebg-preview.png';
      }
    }

    chunkArray(array: any[], size: number): any[][] {
      const result: any[][] = [];
      for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
      }
      return result;
    }

    clickIcon()
    {
      this.clicked = true;
    }

    getBook(number: string) {
      switch (number) {
        case '1':
          this.first = false;
          break;
        case '3':
          this.third = false;
          break;
        case '6':
          this.six = false;
          break;
        default:
          this.height = false;
      }
      this.bookGameService.addToLibrary('Book ' + number);
    }
  }
