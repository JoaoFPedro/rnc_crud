
export interface User {
    id: number;
    name: string;
    email: string;
    avatarUrl: string
  }
  

const users: User[] = [
    {
        id: 1,
        name: 'Joao Pedro',
        email: 'jones.pones@gmail.com',
        avatarUrl: 'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_640.png'

    },
    {
        id: 2,
        name:'Gabriel George',
        email: 'jones.pones@gmail.com',
        avatarUrl: 'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_640.png'


    },
    {
        id: 3,
        name:'Norvina Ferreira',
        email: 'jones.pones@gmail.com',
        avatarUrl: 'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_640.png'


    },
    {
        id: 4,
        name: 'Claudia Rogeria',
        email: 'jones.pones@gmail.com',
        avatarUrl: 'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_640.png'


    },
    {
        id: 5,
        name: 'Fabio Magalhaes',
        email: 'jones.pones@gmail.com',
        avatarUrl: 'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_640.png'


    }
]

export default users