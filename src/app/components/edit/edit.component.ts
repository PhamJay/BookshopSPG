import {Component, Host, Input, OnInit, Optional} from '@angular/core';
import {SatPopover} from '@ncstate/sat-popover';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  /** Overrides the field and provides a reset value when changes are cancelled. */
  @Input()
  get value(): string { return this._field; }
  set value(x: string) {
    this.field = this._field = x;
  }
  // tslint:disable-next-line:variable-name
  private _field = '';

  /** Form model for the input. */
  field = '';

  constructor(@Optional() @Host() public popover: SatPopover) { }

  ngOnInit() {
    // subscribe to cancellations and reset form value
    if (this.popover) {
      this.popover.closed.pipe(filter(val => val == null))
        .subscribe(() => this.field = this.value || '');
    }
  }

  onSubmit() {
    if (this.popover) {
      this.popover.close(this.field);
    }
  }

  onCancel() {
    if (this.popover) {
      this.popover.close();
    }
  }

}
