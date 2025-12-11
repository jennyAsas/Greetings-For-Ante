import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-letter',
  imports: [CommonModule],
  templateUrl: './letter.html',
  styleUrl: './letter.scss',
})
export class Letter implements OnInit {
  // Intro sequence states
  introState: 'idle' | 'title' | 'loading' | 'complete' = 'idle';
  showTitleScreen = false;
  showLoadingScreen = false;
  showMainCard = false;
  loadingDot = 0;

  isCardOpen = false;
  isTypingActive = false;

  letterCharacters: { char: string; isBreak: boolean; index: number }[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  letterContent = `Dear Auntie,

Happy happy birthday po 💜

Today, I just want to pause for a moment and say thank you—thank you for everything, in ways words can never fully explain, but I'll try.

Salamat kaayo, Auntie, sa tanang panahon nga nagpabilin ka para nako. Sa mga adlaw nga klaro ang tanan, ug labi na sa mga panahong gubot kaayo ang akong hunahuna. Maski dili ko always kabalo unsaon pag-ingon, your support has always been there—quiet, steady, and real.

Thank you for your patience, your understanding, and your kindness. Sa mga moments nga naglibog ko, nagduha-duha, or kapoy na kaayo sa kaugalingon, ikaw ang usa sa mga rason nganong nagpadayon ko. Hindi mo man palaging sinasabi, pero ramdam ko palagi na naniniwala ka sa akin.

Maraming salamat po sa lahat ng sacrifices na ginawa mo—yung mga hindi nakikita, hindi naririnig, pero sobrang nararamdaman. Salamat sa mga dasal, sa pag-aalala, at sa pagmamahal na hindi kailanman humingi ng kapalit. Because of you, I learned what quiet strength and genuine love truly mean.

Usahay dili ko kabalo unsaon pag-sukli sa tanan, pero kabalo ko nga akong pasalamat tinuod ug lalom. Dako kaayo imong lugar sa akong kinabuhi ug sa akong kasing-kasing. You've shaped me more than you probably realize, and I will always carry that with me.

On your special day, I pray with all my heart that you are surrounded by peace, good health, and happiness. Hinaut nga matag adlaw pun-on sa kalipay, katawa, ug mga moments nga makapahinumdom nimo unsa ka ka espesyal.

You deserve all the love you give, Auntie—and even more. I'm endlessly grateful for you. Always, and in all ways.

With all my love,
—Your parang timang, Danghag, and Loving Tinuring na parang Anak 💜`;

  ngOnInit() {
    this.letterCharacters = this.buildCharacters(this.letterContent);
    // Intro sequence will be triggered by cover component
  }

  // Public method to start the intro sequence (called by cover component)
  public beginIntroSequence() {
    this.startIntroSequence();
  }

  private startIntroSequence() {
    // ============================================
    // STEP 1: Title Screen - 'A Special Letter Para Sa Imo 💜'
    // Shows immediately, stays for 3 seconds, fades out
    // ============================================
    this.introState = 'title';
    this.showTitleScreen = true;
    this.showLoadingScreen = false;
    this.showMainCard = false;
    this.cdr.detectChanges();

    // After 3.8 seconds (3s visible + 0.8s fade): Hide title and show loading
    setTimeout(() => {
      this.showTitleScreen = false;
      this.cdr.detectChanges();

      // ============================================
      // STEP 2: Opening Screen - 'Opening the Letter…'
      // Fades in after title fades out, stays for 2 seconds
      // ============================================
      setTimeout(() => {
        this.introState = 'loading';
        this.showLoadingScreen = true;
        this.cdr.detectChanges();
        this.startLoadingAnimation();

        // After 2.6 seconds (2s visible + 0.6s fade): Hide loading and show card
        setTimeout(() => {
          this.showLoadingScreen = false;
          this.cdr.detectChanges();

          // ============================================
          // STEP 3: Main Card Reveal
          // Fades in with scale animation after loading fades out
          // ============================================
          setTimeout(() => {
            this.introState = 'complete';
            this.showMainCard = true;
            this.cdr.detectChanges();

            // ============================================
            // STEP 4: Open Card & Start Typewriter
            // Card opens automatically, then typewriter effect plays
            // ============================================
            setTimeout(() => {
              this.isCardOpen = true;
              this.cdr.detectChanges();

              // Start typewriter after card opening animation
              setTimeout(() => {
                this.isTypingActive = true;
                this.cdr.detectChanges();
              }, 800);
            }, 600); // Wait for card reveal animation
          }, 100); // Small delay after loading screen fades
        }, 2600); // 2s visible + 0.6s fade out
      }, 100); // Small delay after title fades
    }, 3800); // 3s visible + 0.8s fade out
  }
  private startLoadingAnimation() {
    let dotIndex = 0;
    const loadingInterval = setInterval(() => {
      this.loadingDot = dotIndex % 3;
      dotIndex++;
      this.cdr.detectChanges();
    }, 400); // Faster animation for 2-second duration

    // Stop the interval after 2 seconds
    setTimeout(() => {
      clearInterval(loadingInterval);
      this.loadingDot = 0;
      this.cdr.detectChanges();
    }, 2000);
  }

  scrollToNext() {
    const wishesSection = document.querySelector('.wishes-container');
    wishesSection?.scrollIntoView({ behavior: 'smooth' });
  }

  private buildCharacters(text: string) {
    const chars: { char: string; isBreak: boolean; index: number }[] = [];

    Array.from(text).forEach((char, index) => {
      const isBreak = char === '\n';
      chars.push({
        char: isBreak ? '' : char,
        isBreak,
        index,
      });
    });

    return chars;
  }
}
