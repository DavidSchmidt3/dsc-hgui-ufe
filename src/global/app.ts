import '@material/web/button/filled-button'
import '@material/web/button/filled-tonal-button'
import '@material/web/button/outlined-button'
import '@material/web/divider/divider'
import '@material/web/icon/icon'
import '@material/web/iconbutton/filled-tonal-icon-button'
import '@material/web/iconbutton/icon-button'
import '@material/web/list/list'
import '@material/web/list/list-item'
import '@material/web/radio/radio'
import '@material/web/select/filled-select'
import '@material/web/select/select-option'
import '@material/web/switch/switch'
import '@material/web/textfield/filled-text-field'
import { registerNavigationApi } from './navigation.js'

export default function() { // or export default async function()
  registerNavigationApi();
}
