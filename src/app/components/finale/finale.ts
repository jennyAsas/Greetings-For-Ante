import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-finale',
  imports: [CommonModule],
  templateUrl: './finale.html',
  styleUrl: './finale.scss',
})
export class Finale implements OnDestroy {
  isCelebrating = false;
  hearts: Array<{ left: number; delay: number }> = [];
  confettiPieces: Array<{ left: number; color: string; delay: number }> = [];
  cakeSparkles: Array<{ left: number; top: number; delay: number }> = [];
  private audio: HTMLAudioElement | null = null;

  celebrate() {
    this.isCelebrating = true;
    this.generateHearts();
    this.generateConfetti();
    this.generateCakeSparkles();
    this.playBirthdayMusic();
  }

  generateHearts() {
    this.hearts = [];
    for (let i = 0; i < 15; i++) {
      this.hearts.push({
        left: Math.random() * 100,
        delay: Math.random() * 2,
      });
    }
  }

  generateConfetti() {
    this.confettiPieces = [];
    const colors = ['#4b0082', '#8b5dbf', '#b19cd9', '#d8b4ff', '#ffd700'];
    for (let i = 0; i < 50; i++) {
      this.confettiPieces.push({
        left: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 0.5,
      });
    }
  }

  generateCakeSparkles() {
    this.cakeSparkles = [];
    for (let i = 0; i < 12; i++) {
      this.cakeSparkles.push({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 2,
      });
    }
  }

  playBirthdayMusic() {
    // Music is already playing from the cover component
    // The Time by SB19 piano cover continues throughout
    // No additional music needed for the celebration
    console.log('Celebration started - Time by SB19 music continues playing');
  }

  ngOnDestroy() {
    // Clean up audio when component is destroyed
    if (this.audio) {
      this.audio.pause();
      this.audio = null;
    }
  }
}
