import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './components/app.component'
import {HTTP_PROVIDERS} from 'angular2/http';

bootstrap(AppComponent, [HTTP_PROVIDERS]);