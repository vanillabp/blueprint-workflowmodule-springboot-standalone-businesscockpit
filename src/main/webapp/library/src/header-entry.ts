import './assets/main.css'
import { defineCustomElement } from 'vue'
import header from './header.ce.vue'

const TAG = 'loan-approval-header'

if (!customElements.get(TAG)) {
    customElements.define(
        TAG,
        defineCustomElement(header)
    )
}
