import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlist',
  template: `
            <h1>
            Template example
            </h1>
            <h2>This is an example</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            <body>

<h1>Employee Interests Survey Form</h1>
<div class="container">
  <form action="/action_page.php">
    <div class="row">
      <div class="col-25">
        <label for="fname">Enter your name:</label>
      </div>
      <div class="col-75">
        <input type="text" id="fname" name="name">
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="lname">Enter your department:</label>
      </div>
      <div class="col-75">
        <input type="text" id="lname" name="department">
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="subject">Tell us a little about yourself:</label>
      </div>
      <div class="col-75">
        <textarea id="subject" name="subject" style="height:200px"></textarea>
      </div>
    </div>
    <div class="container">
    <p>Do you exercise at home?</p>
    <form>
      <label class="radio-inline">
        <input type="radio" name="optradio" checked>Yes
      </label>
      <label class="radio-inline">
        <input type="radio" name="optradio">No
      </label>
    </form>
  </div>
<div class="container">
  <p>How do you like to read about your favorite topics:</p>
  <form>
    <label class="checkbox-inline">
      <input type="checkbox" value="">Books
    </label>
    <label class="checkbox-inline">
      <input type="checkbox" value="">Online Resources
    </label>
    <label class="checkbox-inline">
      <input type="checkbox" value="">Phone apps
    </label>
     <label class="checkbox-inline">
      <input type="checkbox" value="">Magazines
    </label>
  </form>
</div>
<p>What genre of movies do you like:</p>
<div class="wrapper" ><select name="" id="" class="form-control">
        <option value="">Comedy</option>
        <option value="">Action</option>
        <option value="">Drama</option>
    </select></div>
    <div class="row">
      <input type="submit" value="Submit Forms">
    </div>
  </form>
</div>

</body>
            `,
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
