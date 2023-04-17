// // Import stylesheets
// import './style.css';

// // Write TypeScript code!
// const appDiv: HTMLElement = document.getElementById('app');
// appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
// const hello = 'hello';
// console.log(hello);

// type Role = 'admin' | 'user';

// type ID = number | string;

// interface Image {
//   id: ID;
//   link: string;
// }

// interface Post {
//   id: ID;
//   title: string;
//   description: string;
//   images: Image[];
//   publishDate: string;
// }

// interface User {
//   id: ID;
//   name: string;
//   role: Role;
//   posts: Array<Post>;
//   isVerified: boolean;
// }

// const user: User = {
//   id: 1,
//   name: 'Stephen Grider',
//   role: 'admin',
//   posts: [
//     {
//       id: 1,
//       title: 'Top 10 NPM packages for Node.js developers in 2023',
//       description:
//         'In this post we are gonna take a look at the most useful npm packages in 2023 to increase your productivity as a Node.js developer.',
//       images: [{ id: 1, link: 'https://npm-packages.jpg' }],
//       publishDate: '02-03-2023',
//     },
//   ],
//   isVerified: true,
// };

// const guitarists = new Set();
// const names = new Set<string>(['Mosh', 'Stephen']);

// guitarists.add('Jimi Hendrix');
// guitarists.add('Eric Clapton');

// const map = new Map<string, string>();
// map.set('name', 'Mosh');
// console.log(map);

// const langs = {};
// langs['name'] = 'python';
// console.log(langs);

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

interface Post {
  id: string;
  title: string;
  body: string;
}

type UserPost = User & { posts: Post[] };

export const getDefaultUserAndPosts = (): UserPost => {
  return {
    id: '1',
    firstName: 'Matt',
    lastName: 'Pocock',
    posts: [
      {
        id: '1',
        title: 'How I eat so much cheese',
        body: "It's pretty edam difficult",
      },
    ],
  };
};
