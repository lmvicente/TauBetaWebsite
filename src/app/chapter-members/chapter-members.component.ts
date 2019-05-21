import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter-members',
  templateUrl: './chapter-members.component.html',
  styleUrls: ['./chapter-members.component.css']
})
export class ChapterMembersComponent implements OnInit {

  constructor() {
    // search function for table if needed
    // $(document).ready(function() {
    //   $('#myInput').on('keyup', function() {
    //     var value = $(this).val().toLowerCase();
    //     $('#myTable tr').filter(function() {
    //       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    //     });
    //   });
    // });
  }

  ngOnInit() {

  }

}
