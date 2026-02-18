import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css'],
})
export class GalleryPageComponent implements OnInit {
  galleryImages: string[] = [
    'assets/gallery/WhatsApp Image 2026-02-10 at 14.35.55.jpeg',
    'assets/gallery/WhatsApp Image 2026-02-15 at 11.43.22.jpeg',
    'assets/gallery/WhatsApp Image 2026-02-16 at 21.14.51.jpeg',
    
    'assets/gallery/WhatsApp Image 2026-02-17 at 08.18.12.jpeg',
    'assets/gallery/WhatsApp Image 2026-02-17 at 08.18.13.jpeg',
    'assets/gallery/WhatsApp Image 2026-02-18 at 23.07.26.jpeg',
    'assets/gallery/WhatsApp Image 2026-02-18 at 23.07.27.jpeg',
    'assets/gallery/WhatsApp Image 2026-02-18 at 23.07.32.jpeg',
    'assets/gallery/WhatsApp Image 2026-02-18 at 23.07.33 (1).jpeg',
    'assets/gallery/WhatsApp Image 2026-02-18 at 23.07.33.jpeg',
    'assets/gallery/WhatsApp Image 2026-02-18 at 23.07.34 (1).jpeg',
    'assets/gallery/WhatsApp Image 2026-02-18 at 23.07.34 (2).jpeg',
    'assets/gallery/WhatsApp Image 2026-02-18 at 23.07.34.jpeg',
    'assets/gallery/WhatsApp Image 2026-02-18 at 23.07.35 (1).jpeg',
    'assets/gallery/WhatsApp Image 2026-02-18 at 23.07.35.jpeg',
    'assets/gallery/WhatsApp Image 2026-02-18 at 23.07.36 (1).jpeg',
    'assets/gallery/WhatsApp Image 2026-02-18 at 23.07.36.jpeg',
    'assets/gallery/WhatsApp Image 2026-02-18 at 23.07.37 (1).jpeg',
    'assets/gallery/WhatsApp Image 2026-02-18 at 23.07.37.jpeg',
    'assets/gallery/WhatsApp Image 2026-02-18 at 23.07.38 (1).jpeg',
    'assets/gallery/WhatsApp Image 2026-02-18 at 23.07.38 (2).jpeg',
    'assets/gallery/WhatsApp Image 2026-02-18 at 23.07.38.jpeg',
    'assets/gallery/WhatsApp Image 2026-02-18 at 23.07.39 (1).jpeg',
    'assets/gallery/WhatsApp Image 2026-02-18 at 23.07.39 (2).jpeg',
    'assets/gallery/WhatsApp Image 2026-02-18 at 23.07.39.jpeg',
    'assets/gallery/WhatsApp Image 2026-02-18 at 23.07.40 (1).jpeg',
    'assets/gallery/WhatsApp Image 2026-02-18 at 23.07.40.jpeg',
  ];

  selectedImageIndex: number = -1;
  isModalOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  openModal(index: number): void {
    this.selectedImageIndex = index;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedImageIndex = -1;
    document.body.style.overflow = 'auto'; // Restore scrolling
  }

  nextImage(): void {
    if (this.selectedImageIndex < this.galleryImages.length - 1) {
      this.selectedImageIndex++;
    } else {
      this.selectedImageIndex = 0; // Loop to first image
    }
  }

  previousImage(): void {
    if (this.selectedImageIndex > 0) {
      this.selectedImageIndex--;
    } else {
      this.selectedImageIndex = this.galleryImages.length - 1; // Loop to last image
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (!this.isModalOpen) return;

    switch (event.key) {
      case 'Escape':
        this.closeModal();
        break;
      case 'ArrowRight':
        this.nextImage();
        break;
      case 'ArrowLeft':
        this.previousImage();
        break;
    }
  }
}
