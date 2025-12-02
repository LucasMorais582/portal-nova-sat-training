import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, RouterModule],
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    registerForm: FormGroup;
    isLoading = false;
    errorMessage = '';

    private authService = inject(AuthService);
    private router = inject(Router);
    private fb = inject(FormBuilder);

    constructor() {
        this.registerForm = this.fb.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    onSubmit() {
        if (this.registerForm.valid) {
            this.isLoading = true;
            this.errorMessage = '';
            const user = this.registerForm.value;

            this.authService.register(user).subscribe({
                next: () => {
                    this.isLoading = false;
                    this.router.navigate(['/login']); 
                },
                error: (err) => {
                    this.isLoading = false;
                    this.errorMessage = err.message || 'Erro ao cadastrar.';
                }
            });
        }
    }
}
