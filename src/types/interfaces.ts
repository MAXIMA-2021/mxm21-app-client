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

//interface untuk HoME
export interface DataHome {
  homeID: string;
  search_key: string;
  linkLogo: string;
  name: string;
  kategori: string;
  shortDesc: string;
  longDesc: string;
  instagram: string;
}

export interface DataMediaHome {
  //masih belum selesai
  photoID: string;
  homeID: string;
  linkMedia: string;
}
