import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverId : number = 10;
  serverStatus : string = 'offline';
  serverCreationStatus : string = 'Wala kapa nagawa';
  serverName = '';
  serverCreated = false;
  serverList = ['server1' , 'server 2'];

  getServerStatus() {
    return this.serverStatus;
  }

  allowServer = false;


  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';

    setTimeout( () => {
      this.allowServer = true;
    }, 2000);
  }

  ngOnInit(){

  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  serverCreate() {
    this.serverCreated = true;
    this.serverList.push(this.serverName);
    this.serverCreationStatus = 'Meron na nagawa' + this.serverName;
  }

  onUpdateServerName(event : Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
