import { HostBinding, HostListener, Directive } from '@angular/core';

@Directive({
    selector: '[appDropDown]',
    exportAs:'appDropDown'
})
export class DropDownDirective {
    @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
}