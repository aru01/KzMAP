import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kzmap';
  clickOne()
  {
    console.log("West-Kazakhstan region is click");
  }
  clickTwo()
  {
    console.log("Atyrau region is click");
  }
  clickThree()
  {
    console.log("Aktobe region is click");
  }
  clickFour()
  {
    console.log("Kostanay region is click");
  }
  clickFive()
  {
    console.log("North-Kazakhstan region kz is click");
  }
  clickSix()
  {
    console.log("Akmola region is click");
  }
  clickSeven()
  {
    console.log("Pavlodar region is click");
  }
  clickEight()
  {
    console.log("Karagandy region is click");
  }
  clickNine()
  {
    console.log("East-Kazakhstan region is click");
  }
  clickTen()
  {
    console.log("Almaty region is click");
  }
  clickEleven()
  {
    console.log("Dzhambul region is click");
  }
  clickTwelve()
  {
    console.log("Turkistan region is click");
  }
  clickThirteen()
  {
    console.log("Kyzylorda region is click");
  }
  clickFourteen()
  {
    console.log("Mangistau region is click");
  }
}
