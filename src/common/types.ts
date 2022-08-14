export type ArabicNumberType =
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9';

export type RomanNumberType = 'I' | 'V' | 'X' | 'L' | 'C' | 'D' | 'M';

export type NumberType = string;

export type NumbericEntityType = {
  arabic: NumberType;
  roman: NumberType;
};

export type NumbersDataType = {
  units: NumbericEntityType[];
  tens: NumbericEntityType[];
  hundreds: NumbericEntityType[];
  thousands: NumbericEntityType[];
};
