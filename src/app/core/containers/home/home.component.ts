import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/core/services/message.service';
import { ProgressService } from 'src/app/core/services/progress.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  addresses$ = this.http.get('https://angular-challenge-api.herokuapp.com/addresses');
  constructor(private message: MessageService, private progress: ProgressService, private http: HttpClient) { }

  ngOnInit() {
  }

  showMsg() {
    this.message.showOkMessage('This is a message!');
  }

  showProgressSpinner() {
    this.progress.showProgressSpinner();
    setTimeout(() => this.progress.hideProgressSpinner(), 2000);
  }

}
