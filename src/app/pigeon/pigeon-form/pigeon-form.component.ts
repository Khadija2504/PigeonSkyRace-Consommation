import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PigeonService } from '../pigeon.service';

@Component({
  selector: 'app-pigeon-form',
  standalone: false,
  
  templateUrl: './pigeon-form.component.html',
  styleUrl: './pigeon-form.component.css'
})
export class PigeonFormComponent {
  pigeonForm: FormGroup;
  errorMessage: String | null = null;
  successMessage: String | null = null;
  isSubmitting = false;

  constructor(private fb: FormBuilder, private pigeonService: PigeonService, private router: Router) {
    this.pigeonForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', [Validators.required, Validators.pattern('^(Male|Female)$')]],
      color: ['', Validators.required]
    });
  }

  addPigeon() {
    if(this.pigeonForm.invalid) return;

    this.isSubmitting = true;
    this.errorMessage = null;
    this.successMessage = null;

    const pigeonData = this.pigeonForm.value;
    this.pigeonService.addPigeon(pigeonData).subscribe({
      next: (Response) => {
        this.successMessage = 'Pigron added succesfully';
        setTimeout(() => this.router.navigate(['/pigeon/addForm']), 200);
      },
      error: (error) => {
        this,this.errorMessage = error.error.message || 'add pigeon fild';
        this.isSubmitting = false;
      }
    });
  }

  get f() {
    return this.pigeonForm.controls;
  }
}
