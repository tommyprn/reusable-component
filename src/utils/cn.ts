export type ClassNamesInput = (string | boolean | null | undefined | 0)[];

export type ClassNamesOutput = string;

export const classNames = (...classes: ClassNamesInput): ClassNamesOutput => {
  return classes.filter(Boolean).join(' ');
};

export default classNames;
