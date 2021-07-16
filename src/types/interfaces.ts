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

export interface DataRegisterPanitia {
  nim: string;
  name: string;
  email: string;
  password: string;
  divisiID: string;
}

export interface DataRegisterOrganisator {
  nim: string;
  name: string;
  email: string;
  password: string;
  stateID: string;
}
