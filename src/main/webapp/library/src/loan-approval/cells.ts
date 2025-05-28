import { Column } from "@vanillabp/bc-shared";

export const userTaskColumns: Record<string, Column> = {
  loanRequestId: {
    title: {
      en: "Loan Request ID",
      de: "Kreditanfrage",
    },
    path: "details.loanRequestId",
    width: "5rem",
    priority: 10,
    show: true,
    resizeable: true,
    sortable: true,
    filterable: true,
  },
};

export const workflowColumns: Record<string, Column> = {
  loanRequestId: {
    title: {
      en: "Loan Request ID",
      de: "Kreditanfrage",
    },
    path: "details.loanRequestId",
    width: "5rem",
    priority: 10,
    show: true,
    resizeable: true,
    sortable: true,
    filterable: true,
  },
};
