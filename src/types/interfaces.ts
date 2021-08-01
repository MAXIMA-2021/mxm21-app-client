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
  name: string;
  kategori: string;
  shortDesc: string;
  longDesc: string;
  linkYoutube: string;
  lineID: string;
  instagram: string;
  linkLogo: any;
}

export interface DataMediaHome {
  photoID: string;
  homeID: string;
  linkMedia: string;
}

export interface DataHomeBySearchKey {
  homeID: string;
  search_key: string;
  linkLogo: any;
  name: string;
  kategori: string;
  shortDesc: string;
  longDesc: string;
  instagram: string;
  lineID: string;
  linkYoutube: string;
  home_media: [
    {
      photoID: string;
      linkMedia: string;
    }
  ];
}

export interface DataState {
  name: string;
  zoomLink: string;
  day: string;
  quota: string;
}
