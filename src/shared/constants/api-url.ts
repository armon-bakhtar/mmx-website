export const API_URL = {
  googleSheetMain: (
    name: string,
    phoneNumber: string,
    email: string,
    business: string,
  ) =>
    `${process.env.NEXT_PUBLIC_GOOGLE_SHEET_MAIN}?p1=${name}&p2=${phoneNumber}&p3=${email}&p4=${business}`,
  googleSheetQuick: (name: string, phoneNumber: string) =>
    `${process.env.NEXT_PUBLIC_GOOGLE_SHEET_QUICK}?p1=${name}&p2=${phoneNumber}`,
};
