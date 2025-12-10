import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wishes',
  imports: [CommonModule],
  templateUrl: './wishes.html',
  styleUrl: './wishes.scss',
})
export class Wishes {
  flippedCards: boolean[] = [false, false, false];

  flipCard(index: number) {
    this.flippedCards[index] = !this.flippedCards[index];
  }

  scrollToFinale() {
    const finaleSection = document.querySelector('.finale-container');
    finaleSection?.scrollIntoView({ behavior: 'smooth' });
  }
}
