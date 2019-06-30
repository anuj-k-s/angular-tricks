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
  public filterData: Array<Participants> = new Array<Participants>();
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
    for (const participant of backendList.participants) {
      let cand = new Participants();
      cand.populateData(participant.firstName, participant.lastName, participant.emailId);
      this.participantSource.push(cand);
    }
    this.filterData = this.participantSource;
  }

  search(term: string, filterBy: string) {
    debugger;
    if (term == "" && this.filterData.length == 0) {
      this.filterData = this.participantSource;
    } else {
      if (filterBy === 'FN' && term != "") {
        this.filterData = this.filterData.filter(x =>
          x.firstName.trim().toLowerCase().includes(term.trim().toLowerCase())
        );
      } else if (filterBy === 'LN' && term != "") {
        this.filterData = this.filterData.filter(x =>
          x.lastName.trim().toLowerCase().includes(term.trim().toLowerCase()));
      } else if (filterBy === 'EId' && term != "") {
        this.filterData = this.filterData.filter(x =>
          x.emailId.trim().toLowerCase().includes(term.trim().toLowerCase()));
      }
    }
  }
}

