import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import { } from '@fortawesome/free-regular-svg-icons'

import {
  faHome, faComment, faUsers, faFile, faCalendar, faVideo, faCog, faSignOutAlt,
  faUser, faLock
} from '@fortawesome/free-solid-svg-icons'

import {
  faGithub
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faHome, faComment, faUsers, faFile, faCalendar, faVideo, faCog, faSignOutAlt,
  faUser, faLock, faGithub
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
