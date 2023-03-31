import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrls: ['./new-contact-dialog.component.scss']
})
export class NewContactDialogComponent implements OnInit {
  avatars: string[] = ["svg-1", "svg-2", "svg-3", "svg-4", "svg-12"];
  user: User | any;
  name: FormControl = new FormControl('', [Validators.required]);

  constructor(private dialogRef: MatDialogRef<NewContactDialogComponent>, private service: UserService) { }

  ngOnInit(): void {
    this.user = new User();
  }

  save(): void {
    this.user.name = this.name.value;
    this.service.addUser(this.user).then(user => {
      this.dialogRef.close(user);
    });
    
  }

  dismiss(): void {
    this.dialogRef.close(null);
  }

  getErrorMessage() {
    return this.name.hasError('required') ? 'You must enter a value' : '';
  }

}
