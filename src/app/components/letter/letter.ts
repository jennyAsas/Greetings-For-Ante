import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-letter',
  imports: [CommonModule],
  templateUrl: './letter.html',
  styleUrl: './letter.scss',
})
export class Letter implements OnInit {
  currentLine = 0;
  displayedText: string[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  letterLines = [
    'Dear Auntie,',
    '',
    'Happy happy birthday po 💜',
    "Today, I just want to pause for a moment and say thank you—thank you for everything, in ways words can never fully explain, but I'll try.",
    '',
    'Salamat kaayo, Auntie, sa tanang panahon nga nagpabilin ka para nako.',
    'Sa mga adlaw nga klaro ang tanan, ug labi na sa mga panahong gubot kaayo ang akong hunahuna.',
    'Maski dili ko always kabalo unsaon pag-ingon, your support has always been there—quiet, steady, and real.',
    '',
    'Thank you for your patience, your understanding, and your kindness.',
    'Sa mga moments nga naglibog ko, nagduha-duha, or kapoy na kaayo sa kaugalingon,',
    'ikaw ang usa sa mga rason nganong nagpadayon ko.',
    'Hindi mo man palaging sinasabi, pero ramdam ko palagi na naniniwala ka sa akin.',
    '',
    'Maraming salamat po sa lahat ng sacrifices na ginawa mo—',
    'yung mga hindi nakikita, hindi naririnig, pero sobrang nararamdaman.',
    'Salamat sa mga dasal, sa pag-aalala, at sa pagmamahal na hindi kailanman humingi ng kapalit.',
    'Because of you, I learned what quiet strength and genuine love truly mean.',
    '',
    'Usahay dili ko kabalo unsaon pag-sukli sa tanan,',
    'pero kabalo ko nga akong pasalamat tinuod ug lalom.',
    'Dako kaayo imong lugar sa akong kinabuhi ug sa akong kasing-kasing.',
    "You've shaped me more than you probably realize, and I will always carry that with me.",
    '',
    'On your special day, I pray with all my heart that',
    'you are surrounded by peace, good health, and happiness.',
    'Hinaut nga matag adlaw pun-on sa kalipay, katawa,',
    'ug mga moments nga makapahinumdom nimo unsa ka ka espesyal.',
    '',
    'You deserve all the love you give, Auntie—and even more.',
    "I'm endlessly grateful for you.",
    'Always, and in all ways.',
    '',
    'With all my love,',
    '—Your parang timang, Danghag, and Loving Tinuring na parang Anak 💜',
  ];

  ngOnInit() {
    // Initialize empty strings for all lines
    this.displayedText = new Array(this.letterLines.length).fill('');

    setTimeout(() => {
      this.startTypingAnimation();
    }, 300);
  }

  startTypingAnimation() {
    let lineIndex = 0;
    let charIndex = 0;

    const typeNextChar = () => {
      if (lineIndex < this.letterLines.length) {
        const currentFullText = this.letterLines[lineIndex];

        if (charIndex < currentFullText.length) {
          // Add the next character wrapped in a span for animation
          const char = currentFullText[charIndex];
          this.displayedText[lineIndex] += `<span class="char-animate">${char}</span>`;
          charIndex++;
          this.cdr.detectChanges();

          // Slower, calming pace (80ms per character)
          setTimeout(typeNextChar, 80);
        } else {
          // Line complete, move to next
          this.currentLine = lineIndex + 1;
          lineIndex++;
          charIndex = 0;
          this.cdr.detectChanges();

          // Gentle pause between lines (800ms)
          setTimeout(typeNextChar, 800);
        }
      }
    };

    typeNextChar();
  }

  scrollToNext() {
    const wishesSection = document.querySelector('.wishes-container');
    wishesSection?.scrollIntoView({ behavior: 'smooth' });
  }
}
