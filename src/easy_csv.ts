type User = {
    name: string;
    age: number;
    premiumUser: boolean;
}

const data: string = `
uhyo, 26, 1
John Smith, 17, 0
Mary Sue, 14, 1
`

const users: User[] = []

for (const user of users) {
    console.log(`${user.name} (${user.age})はプレミアムユーザー${user.premiumUser ? 'です' : 'ではありません'}。`)
}