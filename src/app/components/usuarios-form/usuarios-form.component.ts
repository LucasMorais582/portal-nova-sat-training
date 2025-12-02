import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../../model/user';

@Component({
  selector: 'app-usuarios-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './usuarios-form.component.html',
  styleUrl: './usuarios-form.component.css',
})
export class UsuariosFormComponent implements OnInit {
  @Input() user: User | null = null;
  @Output() save = new EventEmitter<Partial<User>>();
  @Output() cancel = new EventEmitter();

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: [this.user?.name || '', Validators.required],
      email: [this.user?.email || '', [Validators.required, Validators.email]]
    });
  }

  onSave() {
    if (this.form.valid) {
      const userData = this.form.value;
      if (this.user) {
        this.save.emit({ ...this.user, ...userData });
      } else {
        this.save.emit(userData as Omit<User, 'id'>);
      }
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
