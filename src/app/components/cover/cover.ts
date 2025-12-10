import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sparkles } from '../sparkles/sparkles';
import { Letter } from '../letter/letter';
import { Wishes } from '../wishes/wishes';
import { Finale } from '../finale/finale';

@Component({
  selector: 'app-cover',
  imports: [CommonModule, Sparkles, Letter, Wishes, Finale],
  templateUrl: './cover.html',
  styleUrl: './cover.scss',
})
export class Cover implements OnDestroy {
  private audio: HTMLAudioElement | null = null;

  openLetter() {
    // Play the Time by SB19 piano cover music
    this.playBackgroundMusic();

    const cover = document.querySelector('.cover-container');
    cover?.classList.add('fade-out');
    setTimeout(() => {
      this.showLetter();
    }, 800);
  }

  showLetter() {
    const coverContainer = document.querySelector('.cover-container') as HTMLElement;
    const letterSection = document.querySelector('.letter-section') as HTMLElement;

    if (coverContainer) {
      coverContainer.style.display = 'none';
    }
    if (letterSection) {
      letterSection.classList.add('visible');
    }
  }

  playBackgroundMusic() {
    // Create audio element for the Time by SB19 piano cover
    this.audio = new Audio();
    this.audio.src = 'music/time-by-sb19.mp3';
    this.audio.volume = 1.0; // Set volume to 100%
    this.audio.loop = true; // Loop the music throughout the experience

    // Try to play the audio
    this.audio.play().catch((error) => {
      console.log('Audio playback failed:', error);
      // Browser might block autoplay, but since user clicked, it should work
    });
  }

  ngOnDestroy() {
    // Clean up audio when component is destroyed
    if (this.audio) {
      this.audio.pause();
      this.audio = null;
    }
  }
}
