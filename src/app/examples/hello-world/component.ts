import {
    Component,
    OnInit,
    Output,
    ElementRef
} from '@angular/core';
import {
    FormGroup,
    FormBuilder,
    Validators,
    AbstractControl
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

// import * as Services from '../../../../services';


@Component({
    selector: 'app-hello-world',
    templateUrl: './template.html',
    styleUrls: ['./template.sass']
})
export class HelloWorldComponent implements  OnInit {

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {

    }

}
