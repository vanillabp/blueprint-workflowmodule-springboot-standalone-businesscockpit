import { Column } from "@vanillabp/bc-shared";

export const userTaskColumns: Record<string, Column> = {
  'id': {
    title: {
      'de': 'Auswahl'
    },
    path: 'id',
    width: '3rem',
    priority: -1,
    show: true,
    resizeable: false,
    sortable: false,
    filterable: false,
  },
  'caseId': {
    title: {
      'de': 'ID'
    },
    path: 'details.id',
    width: '7rem',
    priority: 10,
    show: true,
    resizeable: true,
    sortable: true,
    filterable: true,
  },
  'title': {
    title: {
      'de': 'Titel'
    },
    path: 'title',
    type: 'i18n',
    width: '', // auto-fill space available
    priority: 11,
    show: true,
    resizeable: true,
    sortable: true,
    filterable: true,
  },
  'dueDate': {
    title: {
      'de': 'Fällig'
    },
    path: 'dueDate',
    type: "date",
    width: '7rem',
    priority: 12,
    show: true,
    resizeable: true,
    sortable: true,
    filterable: true,
  },
  'assignee': {
    title: {
      'de': 'Übernommen'
    },
    path: 'assignee',
    type: 'person',
    width: '7rem',
    priority: 13,
    show: true,
    resizeable: true,
    sortable: true,
    filterable: true,
  },
  'candidateUsers': {
    title: {
      'de': 'Verantwortlich'
    },
    path: 'candidateUsers',
    width: '3rem',
    priority: 14,
    show: true,
    resizeable: true,
    sortable: true,
    filterable: true,
  },
  'circle': {
    title: {
      'de': 'Kreis'
    },
    path: 'details.circle',
    type: 'i18n',
    width: '7rem',
    priority: 50,
    show: true,
    resizeable: true,
    sortable: true,
    filterable: true,
  },
  'workflowTitle': {
    title: {
      'de': 'Vorgang'
    },
    path: 'workflowTitle',
    type: 'i18n',
    width: '10rem',
    priority: 51,
    show: true,
    resizeable: true,
    sortable: true,
    filterable: true,
  },
  'followUpDate': {
    title: {
      'de': 'Wiedervorlage'
    },
    path: 'followUpDate',
    type: 'date-time',
    width: '10rem',
    priority: 52,
    show: true,
    resizeable: true,
    sortable: true,
    filterable: true,
  },
};
