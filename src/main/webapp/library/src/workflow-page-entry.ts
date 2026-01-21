import './assets/main.css'
import { defineCustomElement } from 'vue'
import workflowPage from './workflow-page.ce.vue'

const TAG = 'loan-approval-workflow-page'

if (!customElements.get(TAG)) {
    customElements.define(
        TAG,
        defineCustomElement(workflowPage)
    )
}
