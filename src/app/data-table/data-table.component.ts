import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DataTableService } from './data-table.service';
import { Participants } from './participants.dto';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  public participantSource: Array<Participants> = new Array<Participants>();
  constructor(private dataTableService: DataTableService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dataTableService.getParticipantData()
      .subscribe(
        data => this.successCallBack(data),
        error => console.log(error)
      );
  }

  successCallBack(backendList) {
    debugger;
    for (const participant of backendList.participants) {
      let cand = new Participants();
      cand.populateData(participant.firstName, participant.lastName, participant.emailId);
      this.participantSource.push(cand);

    }
  }
}
