  import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
  import { TranslateService } from '@ngx-translate/core';
  import { BookGameService } from 'src/app/service/book-game.service';

  @Component({
    selector: 'app-section-profile',
    templateUrl: './section-profile.component.html',
    styleUrls: ['./section-profile.component.css']
  })
  export class SectionProfileComponent implements OnInit {
    @Output() themeChanged = new EventEmitter<boolean>();
    urlTheme: string = '../../../assets/icons8-moon-90-removebg-preview.png';
    theme: boolean = false;
    urlLang: string = '../../../assets/icons8-spain-flag-48-removebg-preview.png';
    lang: boolean = false;
    clicked: boolean = false;
    groupedIcons: { title: string, src: string, alt: string }[][] = []; // Actualiza el tipo aquí
    first: boolean = true;
    third: boolean = true;
    six: boolean = true;
    height: boolean = true;

    icons = [
      { title: 'Angular', src: '../../assets/icons8-angular-96-removebg-preview.png', alt: 'Angular icon' },
      { title: 'Html', src: '../../assets/icons8-html-96-removebg-preview.png', alt: 'Html icon' },
      { title: 'Typescript', src: '../../assets/icons8-typescript-144-removebg-preview.png', alt: 'Typescript icon' },
      { title: 'Python', src: '../../assets/icons8-python-144-removebg-preview.png', alt: 'Python icon' },
      { title: 'Css', src: '../../assets/icons8-css-96-removebg-preview.png', alt: 'Css icon' },
      { title: 'Ionic', src: '../../assets/icons8-ionic-a-complete-open-source-sdk-for-hybrid-mobile-app-development-96-removebg-preview.png', alt: 'Ionic icon' },
      { title: 'php', src: '../../assets/icons8-php-160-removebg-preview.png', alt: 'Php icon' },
      { title: 'Java', src: '../../assets/icons8-java-100.png', alt: 'Java icon' },
      { title: 'Mysql', src: '../../assets/icons8-mysql-logo-144.png', alt: 'Mysql icon' },
      { title: 'SpringBoot', src: '../../assets/icons8-spring-boot-160.png', alt: 'Springboot icon' }
    ];

    constructor(private translate: TranslateService, private bookGameService: BookGameService){}

    ngOnInit() {
      this.updateIconGrouping(window.innerWidth);
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
      this.updateIconGrouping(event.target.innerWidth);
    }

    updateIconGrouping(screenWidth: number) {
      if (screenWidth > 991) 
        this.groupedIcons = this.chunkArray(this.icons, 7);
      else {
        if (screenWidth > 700) 
          this.groupedIcons = this.chunkArray(this.icons, 5);
        else{
          if (screenWidth > 320) 
            this.groupedIcons = this.chunkArray(this.icons, 3);
          else{
            this.groupedIcons = this.chunkArray(this.icons, 2);
          }        }
      }
    }

    switchTheme() {
      this.theme = !this.theme;
      document.body.classList.toggle('light-mode', this.theme);
      localStorage.setItem('isDarkMode', JSON.stringify(this.theme));
      this.updateThemeIcon();
      this.themeChanged.emit(this.theme);
    }

    private updateThemeIcon() {
      this.urlTheme = this.theme 
        ? '../../../assets/icons8-sun-100-removebg-preview.png'
        : '../../../assets/icons8-moon-90-removebg-preview.png';
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
