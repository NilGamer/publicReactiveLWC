import { api, LightningElement } from 'lwc';

export default class MeetingRoom extends LightningElement {
  @api meetingRoomInfo; //{roomNAme , roomCapacity}
}
