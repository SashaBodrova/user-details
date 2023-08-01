import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from "@angular/router";
import { count, map, Observable, Subscription } from "rxjs";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute, ) {
  }

  private subscription!: Subscription;

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      console.log(data)
    })

    let customObservable = new Observable<number>(observer => {
      let count = 0
      setInterval(() => {
        observer.next(count)

        if(count > 3) {
          observer.error('error')
        }

        if(count > 2) {
          observer.complete()
        }

        count++
      }, 1000)
    })

    this.subscription = customObservable.pipe(map((data) => {
      return "lalal " + data
    })).subscribe((data: string) => {
      console.log(data)
    }, (error) => {
      console.log(error)
    }, () => {
      console.log(132)
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
