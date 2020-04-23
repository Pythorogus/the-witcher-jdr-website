import 'bootstrap';
import 'popper.js';

import { library,dom } from '@fortawesome/fontawesome-svg-core';
// import '@fortawesome/free-solid-svg-icons';
// import '@fortawesome/free-regular-svg-icons'
import {
    faFacebookSquare, faDiscord, faTwitter, faYoutube,
} from '@fortawesome/free-brands-svg-icons';
library.add(faFacebookSquare,faDiscord,faTwitter,faYoutube);
dom.watch();

$(document).ready(function(){
    
})