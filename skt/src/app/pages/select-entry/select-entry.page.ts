import { Component, OnInit } from '@angular/core';
import { MapGenerationService } from 'src/app/services/map-generation.service';

@Component({
  selector: 'app-select-entry',
  templateUrl: './select-entry.page.html',
  styleUrls: ['./select-entry.page.scss'],
})
export class SelectEntryPage implements OnInit {

  constructor(
    private service: MapGenerationService
  ) { }

  ngOnInit() {
  }

}
