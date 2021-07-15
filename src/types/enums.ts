export enum Palette {
  Navy = "#1F2C4C",
  Cyan = "#41CEBA",
  Yellow = "#FFD008",
  Red = "#F4224B",
  White = "#FFFFFF",
  Black = "#000000",
}

export interface DataRegisterMaba {
  name: string;
  nim: string;
  tempatLahir: string;
  tanggalLahir: string;
  jenisKelamin: string;
  prodi: string;
  email: string;
  whatsapp: string;
  idLine: string;
  idInstagram: string;
}

export interface DataLogin {
  nim: number;
  password: string;
}
