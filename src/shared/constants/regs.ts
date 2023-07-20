export const REG_EXP_EMAIL =
  /^([a-z0-9\+\._\/&!#$%'*=?^`{}|~][-a-z0-9\+\._\/&!#$%'*=?^`{}|~]*)@(([a-z0-9][-a-z0-9]*\.)([-a-z0-9]+\.)*[a-z]{2,})$/i; // eslint-disable-line

export const REG_EXP_PHONE =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

export const REG_EXP_ONLY_WORDS = /^[a-zA-Z0-9_.-]*$/;
