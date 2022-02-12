import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Wine } from '../../models/wine';

import { WineService} from '../../services/wine.service';
import { AuthService } from "src/app/user/services/auth.service";
import { ActivatedRoute, Router } from '@angular/router';

import {
  debounceTime,
  distinctUntilChanged,
  share,
  startWith,
  switchMap,
} from "rxjs/internal/operators";

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.css']
})
export class WineListComponent implements OnInit {

  public wines$: Observable<Wine[]>;
  public searchString = "";
  private searchTerms: Subject<string> = new Subject();
  private page: number = 1;

  constructor(
    private wineService: WineService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    console.log('Page No. : ', this.route.snapshot.queryParamMap.get('page'));   
    this.route.queryParams.subscribe((params) => {         
      console.log('Page : ', params.page);
      this.fetchWines();
    }); 
  }

  search() {
    this.searchTerms.next(this.searchString);
  }

  fetchWines() {
    this.wines$ = this.searchTerms.pipe(
      startWith(this.searchString),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((query: string) => this.wineService.getWines(query)),
      share()
    );
  }

  setAuthToken() {
    this.authService.authToken = "TESTING";
  }
  resetAuthToken() {
    this.authService.authToken = null;
  }

  makeFailingCall() {
    this.wineService.makeFailingCall().subscribe(
      (res) => console.log("Successfully made failing call", res),
      (err) => console.error("Error making failing call", err)
    );
  }

  nextPage() {
    this.router.navigate([], {
      queryParams: {
        page: ++this.page                                  
      }
    })
  }

}
