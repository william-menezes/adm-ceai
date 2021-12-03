import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { ForgotPasswordComponent } from './../forgot-password/forgot-password.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide: boolean = true;
  email: string;

  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ForgotPasswordComponent, {
      width: '400px',
      data: {email: this.email}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.email = result;
      console.log(this.email);
    })
  }

  goToAdmin() {
    this.router.navigate(['/admin']);
  }
}
