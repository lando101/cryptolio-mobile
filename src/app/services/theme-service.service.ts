import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ThemeServiceService {
  themeTypeBS: BehaviorSubject<any> = new BehaviorSubject<string>('dark');
  constructor() {}

  setTheme(theme: string) {
    this.themeTypeBS.next(theme);
  }

  getTheme(): Observable<any> {
    return of(this.themeTypeBS);
  }
}
