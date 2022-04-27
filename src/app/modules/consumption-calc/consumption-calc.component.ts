import { Component, OnInit } from '@angular/core';
import { Consumer } from './models/Consumer';
import { MatDialog } from '@angular/material/dialog';
import { AddConsumerComponent } from './components/add-consumer/add-consumer.component';
import { ConsumptionService } from './services/consumption.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'awad-consumption-calc',
  templateUrl: './consumption-calc.component.html',
  styleUrls: ['./consumption-calc.component.scss']
})
export class ConsumptionCalcComponent implements OnInit {
  consumers: Consumer[] = [];
  consumption$: Observable<number>;
  constructor(
    private service: ConsumptionService,
    public dialog: MatDialog
  ) { 
    this.consumption$ = this.service.consumption$
    this.consumers = this.service.consumers
  }

  ngOnInit(): void {
    
  }

  dialogOptions() {
    let dialogOptions = {
      data: '',
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '',
      width: '',
    }
    if (window.innerWidth < 768) {
      dialogOptions.height = '100%'
      dialogOptions.width = '100%'
    }
    return dialogOptions
  }

  add(): void {
    const addConsumerDialog = this.dialog.open(AddConsumerComponent, this.dialogOptions())
    addConsumerDialog.afterClosed().subscribe((consumer: Consumer) => {
      if(consumer) this.service.addConsumer(consumer);
    });
    
  }

  delete(i: number, consumption: number): void {
    this.service.delete(i, consumption)
  }

  clear() {
    this.service.clear()
  }
}
