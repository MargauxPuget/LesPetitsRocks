export default [

  // All categories
  {
    id: 1,
    name: 'Nos chiens',
    picture: 'https://images.unsplash.com/photo-1635774855717-0aec182f92cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
    slug: 'nos-chien',
    description: 'Tous nos chiens',
    dogs:
    [
      {
        id: 1,
        state: 0, // 0-> à l'élevage; 1->à vendre; 2-> vendu; 3-> DCD
        firstname: 'prenom',
        lastname: 'nom',
        mother: 'premon nom',
        father: 'premon nom',
        slug: 'prenom-nom',
        sexe: 'f', // f ou m
        birthday: '23-05-2019',
        summary: 'Ne plus utiliser de sac en plastique',
        picture: 'https://images.unsplash.com/photo-1576037728058-ab2c538ac8d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80',
      },
      {
        id: 2,
        state: 0,
        firstname: 'prenom2',
        lastname: 'nom2',
        mother: 'premon21 nom',
        father: 'premon22 nom',
        slug: 'prenom-nom',
        sexe: 'f', // f ou m
        birthday: '23-05-2019',
        summary: 'Ne plus utiliser de sac en plastique',
        picture: 'https://images.unsplash.com/photo-1576037728058-ab2c538ac8d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80',
      },
      {
        id: 3,
        state: 0,
        firstname: 'prenom3',
        lastname: 'nom3',
        mother: 'premon31 nom',
        father: 'premon32 nom',
        slug: 'prenom-nom',
        sexe: 'f', // f ou m
        birthday: '23-05-2019',
        summary: 'Ne plus utiliser de sac en plastique',
        picture: 'https://images.unsplash.com/photo-1576037728058-ab2c538ac8d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80',
      },
    ],
  },
  {
    id: 2,
    name: 'Nos chiots',
    picture: 'https://images.unsplash.com/photo-1529313780224-1a12b68bed16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    slug: 'nos-chiots',
    description: 'Toutes nos portées',
    litter: // portée de chiots
        [
          // une portée
          {
            id: 1,
            mother: 'prenom nom',
            father: 'prenom nom',
            date: '12-05-2023', // date de mise bas
            numberDogs: 5, // nombre de chiots
            female: 2, // nombre de femmelle
            male: 3, // nombre de male
            dogs:
            [
              {
              id: 4,
              state: 1,
              firstname: 'prenom3',
              lastname: 'nom3',
              mother: 'premon31 nom',
              father: 'premon32 nom',
              slug: 'prenom-nom',
              sexe: 'f', // f ou m
              birthday: '23-05-2019',
              summary: 'Ne plus utiliser de sac en plastique',
              picture: 'https://images.unsplash.com/photo-1576037728058-ab2c538ac8d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80',
              },
              {
                id: 2,
                state: 2,
                firstname: 'prenom3',
                lastname: 'nom3',
                mother: 'premon31 nom',
                father: 'premon32 nom',
                slug: 'prenom-nom',
                sexe: 'm', // f ou m
                birthday: '23-05-2019',
                summary: 'Ne plus utiliser de sac en plastique',
                picture: 'https://images.unsplash.com/photo-1576037728058-ab2c538ac8d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80',
              },
            ],
          },
          {
            id: 2,
            mother: 'prenom nom',
            father: 'prenom nom',
            date: '12-05-2023', // date de mise bas
            numberDogs: 5, // nombre de chiots
            female: 2, // nombre de femmelle
            male: 3, // nombre de male
            dogs:
            [
              {
                id: 4,
                state: 1,
                firstname: 'prenom3',
                lastname: 'nom3',
                mother: 'premon31 nom',
                father: 'premon32 nom',
                slug: 'prenom-nom',
                sexe: 'f', // f ou m
                birthday: '23-05-2019',
                summary: 'Ne plus utiliser de sac en plastique',
                picture: 'https://images.unsplash.com/photo-1576037728058-ab2c538ac8d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80',
              },
              {
                id: 2,
                state: 2,
                firstname: 'prenom3',
                lastname: 'nom3',
                mother: 'premon31 nom',
                father: 'premon32 nom',
                slug: 'prenom-nom',
                sexe: 'm', // f ou m
                birthday: '23-05-2019',
                summary: 'Ne plus utiliser de sac en plastique',
                picture: 'https://images.unsplash.com/photo-1576037728058-ab2c538ac8d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80',
              },
            ],
          },
        ],
  },
  {
    id: 3,
    name: 'Actualités',
    picture: 'https://i.notretemps.com/1800x0/smart/2021/04/20/cosmetiques-maison-lancez-vous.jpeg',
    slug: 'actualites',
    description: 'Toute les nouvelles de l\'élevage',
    posts:
        [
          {
            id: 1,
            title: 'Naissance de notre première portée',
            slug: 'naissance-de-notre-premiere-portee',
            summary: 'quelque mot sur la portée',
            decrisption: 'beaucoup de mots sur la portée quelque mot sur la portée quelque mot sur la portée quelque mot sur la portéeque lque mot sur la portée quelque mot sur la portée',
            picture: 'https://planetezerodechet.fr/wp-content/uploads/2020/01/deo-en-pot-lavande-deodorant-recette-naturel2-e1578940534954.jpg',
            date: '05-05-2022',
          },
          {
            id: 7,
            name: 'Faire sa lessive soit même',
            slug: 'faire-sa-lessive',
            summary: 'Faire une lessive maison à base de produits bio',
            picture: 'https://www.zerowastemarseille.org/wp-content/uploads/2021/11/lessive-maison-au-savon-de-marseille-5.jpg',
            level: 2,
            point: 8,
          },
        ],
  },
];
