import { Component, OnInit } from '@angular/core';
import {AuthorDataSource} from '../../../datasources/author-data-source.service';
import {AuthorService} from '../../../services/author.service';
import {Router} from '@angular/router';
import {Author} from '../../../models/author';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  step = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  // For Expansion Panel

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
