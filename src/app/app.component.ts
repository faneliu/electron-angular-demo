import { Component } from '@angular/core';
import { TranslocoService, translate } from '@ngneat/transloco';
import { IpcRenderer } from 'electron';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'electron-angular-demo';
  vData
  count = 0

  activeLang: string
  availableLangs: string[] | { id: string, label: string }[]

  versions: any

  constructor(private translocoService: TranslocoService) {
    // this.versions = window.versions;
    this.vData = {
      name: 'Christoph Burgdorf',
      email: 'christoph@thoughtram.io'
    }
    this.activeLang = this.translocoService.getActiveLang()
    this.availableLangs = this.translocoService.getAvailableLangs();
  }

  changeLang(lang: string) {
    this.translocoService.setActiveLang(lang)
    this.activeLang = lang
  }

  ngOnInit() {
    translate('hello')
    this.translocoService.selectTranslate('hello').subscribe((translate) => {

    })
    // this.translocoService.load('en');
    // this.translocoService.events$.pipe(filter(event => event.type === 'translationLoadSuccess')).subscribe(() => {
    //   const translation = this.translocoService.translate('hello')
    //   const translation1 = this.translocoService.translate('apples', { count: this.count}, 'en')
    //   console.log(translation, translation1);
    // })
  }

  changeData() {
    this.vData.name = 'Pascal Prech';
    this.count++
  }

  handleClick() {
    this.changeData()
  }
}
