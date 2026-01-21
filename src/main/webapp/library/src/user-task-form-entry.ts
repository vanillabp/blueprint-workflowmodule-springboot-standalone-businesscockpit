import './assets/main.css'
import { defineCustomElement } from 'vue'
import usertaskform from './user-task-form.ce.vue'

const TAG = 'loan-approval-user-task-form'

if (!customElements.get(TAG)) {
    customElements.define(
        TAG,
        defineCustomElement(usertaskform)
    )
}
