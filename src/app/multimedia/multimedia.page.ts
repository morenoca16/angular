import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-multimedia',
  templateUrl: './multimedia.page.html',
  styleUrls: ['./multimedia.page.scss'],
})
export class MultimediaPage implements OnInit {
  public multimedia!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor(private router: Router) { }

  ngOnInit() {
    this.multimedia = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
  redirectToPage() {
    this.router.navigate(['/multimedia']);
  }
}
