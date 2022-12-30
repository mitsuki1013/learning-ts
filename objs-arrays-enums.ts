// const person: {
//     name: string;
//     age: number;
// }
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]
// } = {
//     name: 'mitsuki',
//     age: 24,
//     hobbies: ['coffee', 'novel'],
//     role: [2, 'author'],
// };

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, "admin", "user"];

// let favoriteActivities: string[];
// favoriteActivities = ["sports"];

// console.log(person.name);

// for (const hobby of person.hobbies) {
//     console.log(hobby.toUpperCase());
// }

// const ADMIN = 0;
// const READ_ONLY_USER = 1;
// const AUTHOR = 2;

enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR,
}

const person = {
    name: 'mitsuki',
    age: 24,
    hobbies: ['coffee', 'novel'],
    role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
    console.log('管理者ユーザー');
}
