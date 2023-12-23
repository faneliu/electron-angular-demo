import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoService, translate } from '@ngneat/transloco';

@Component({
  selector: 'app-test-i18n-comp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-i18n-comp.component.html',
  styleUrls: ['./test-i18n-comp.component.scss']
})
export class TestI18nCompComponent {

  activeLang: string
  availableLangs: string[] | { id: string, label: string }[]

  constructor(private translocoService: TranslocoService) {
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
}
