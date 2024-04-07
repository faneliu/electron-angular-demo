import { Component } from '@angular/core';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { ApiService } from 'src/app/core/services/api.service';
import { CommonModule } from '@angular/common';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { FormsModule } from '@angular/forms';
import throttle from 'lodash/throttle';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  imports: [ScrollingModule, CommonModule, NzSliderModule, FormsModule],
  standalone: true
})
export class ListComponent {
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
  fontlist: any = []

  size: any = 28

  constructor(private apiService: ApiService) { }

  previewSizeChange = throttle((v: any) => {
    this.size = v
  }, 16)

  getAllFontList() {
    this.apiService.getFontList().subscribe((data) => {
      if (data.result) {
        this.fontlist = data.result
        this.createFontNameStyleList(data.result)
      }
    })

  }

    //生成全局字体名字体文件
    createFontNameStyleList(fontlist: any) {
      let addingstyle: any
      const addinglinks = []
      if (document.getElementById('font-all-name')) {
        addingstyle = document.getElementById('font-all-name')
      } else {
        addingstyle = document.createElement('div')
        addingstyle.id = 'font-all-name'
      }
      addingstyle.innerHTML = ""
      for (let index = 0; index < fontlist.length; index++) {
        const val = fontlist[index];
        // getFontList.push({"ProductId":val.id,"FontFamily":`${mathrdm}-${val.id}`})
        // https://www.hellowebfont.com/CloudFontServerV3/api/Subset/Get?tag=123&fontId=123&text=123
        //tag 0-平台官方字库, 1-字由用户个人上传
        addinglinks.push(`@font-face{font-family: "font-name-${val.id}";src: url("https://hellofontfonts.oss-us-west-1.aliyuncs.com/${val.ProductSetName}/${val.Version}/${val.ProductFileName}");font-display: swap;}`)
        if (fontlist[index].familyList && fontlist[index].familyList.length > 0) {
          fontlist[index].familyList.forEach((val: any) => {
            addinglinks.push(`@font-face{font-family: "font-name-${val.id}";src: url("https://hellofontfonts.oss-us-west-1.aliyuncs.com/${val.ProductSetName}/${val.Version}/${val.ProductFileName}");font-display: swap;}`)
          });
        }
      }
      addingstyle.innerHTML = '<style type="text/css">' + addinglinks.join("") + '</style>'
      if (document.getElementById("addingstyles")) {
        document.getElementById("addingstyles")?.appendChild(addingstyle)

      }
    }
  ngOnInit() {
    this.getAllFontList()
  }
}
