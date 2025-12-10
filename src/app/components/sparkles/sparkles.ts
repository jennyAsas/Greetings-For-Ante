import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sparkles',
  imports: [CommonModule],
  templateUrl: './sparkles.html',
  styleUrl: './sparkles.scss',
})
export class Sparkles implements OnInit {
  sparkles: Array<{ left: number; top: number; delay: number; size: number }> = [];

  ngOnInit() {
    this.generateSparkles();
  }

  generateSparkles() {
    for (let i = 0; i < 20; i++) {
      this.sparkles.push({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 3,
        size: 15 + Math.random() * 15,
      });
    }
  }
}
