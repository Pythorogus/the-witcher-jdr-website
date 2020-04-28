import 'bootstrap';
import 'popper.js';

import { library,dom } from '@fortawesome/fontawesome-svg-core';
import {
    faDownload, faUser, faUsers, faSignInAlt, faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';
// import '@fortawesome/free-regular-svg-icons'
import {
    faFacebookSquare, faDiscord, faTwitter, faYoutube
} from '@fortawesome/free-brands-svg-icons';
library.add(faFacebookSquare,faDiscord,faTwitter,faYoutube,faDownload,faUser,faUsers,faSignInAlt,faSignOutAlt);
dom.watch();

$(document).ready(function(){
    // TOOLTIPS
    $('[data-toggle="tooltip"]').tooltip()
})