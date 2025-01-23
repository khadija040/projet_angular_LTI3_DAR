import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-search',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchQuery: string | null = null;
  results: any[] = [];
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.searchQuery = params['q'];
      if (this.searchQuery) {
        this.performSearch(this.searchQuery);
      }
    });
  }

  performSearch(query: string): void {
    this.loading = true;
    this.searchService.searchSmartphones(query).subscribe((data) => {
      this.results = data;
      this.loading = false;
    });
  }
}
