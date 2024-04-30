import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) {
  }
  ngOnInit(): void {
  }
goToAboutPage () {
  this.router.navigate(['/about-us']);
}

  // goToAboutPage(event: MouseEvent): void {
  //   event.stopPropagation();
  //   this.router.navigate(['/about-us']);
  // }
goToDashboardPage () {
  this.router.navigate (['/dashboard'])
}
goToActivitiesPage(){
    this.router.navigate(['/activities'])
}
goToEventsPage(){
    this.router.navigate(['/events'])
}
goToStakeholdersPage() {
  this.router.navigate(['/stakeholders'])
}
goToCareerPage() {
  this.router.navigate(['/carrer'])
}
goToContactUsPage(){
    this.router.navigate(['contact-us'])
}

}
