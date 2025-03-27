import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  urlTheme: string = '../../assets/icons8-sun-100.png';
  theme: boolean = false;
  urlLang: string = '../../assets/icons8-spain-flag-48.png';
  lang: number = 0;
  animationReset: boolean = false;
  waterHeight: number = 0;
  fishes: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.updateWaterHeight();
    this.addFishPeriodically();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.updateWaterHeight();
  }

  private updateWaterHeight() {
    const scrollPosition = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    this.waterHeight = (scrollPosition / (documentHeight - windowHeight)) * 100;
  }

  private addFishPeriodically() {
    setInterval(() => {
      this.addFish();
    }, Math.floor(Math.random() * (4500 - 1000 + 1) + 1000))
  }

  private addFish() {
    const randomVerticalMovements = Array(5)
      .fill(0)
      .map(() => (Math.random() - 0.5) * 50); 
    const fish = {
      id: Date.now(),
      left: -10,
      bottom: Math.random() * this.waterHeight,
      direction: 'right',
      animationDuration: Math.random() * 10 + 5,
      randomVerticalMovements
    };
  
    this.fishes.push(fish);
  
    setTimeout(() => {
      this.fishes = this.fishes.filter(f => f.id !== fish.id);
    }, fish.animationDuration * 1000);
  }
  
  updateTheme(isDarkMode: boolean) {
    this.theme = isDarkMode;
    this.animationReset = false;
    setTimeout(() => {
      this.animationReset = true;
    }, 10); 
  }
}
