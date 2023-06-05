export interface CommonTypes {
  className?: string;
}

export type TypeWithoutClassName<T> = Omit<T, 'className'>;

export type Maybe<T> = T | null;

export enum InputStatus {
  SUCCESS = `SUCCESS`,
  ERROR = `ERROR`,
}
