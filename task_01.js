const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

console.table(user);

user.mood = 'happy';
console.table(user);

user.hobby = 'skydiving';
console.table(user);

user.premium = false;
console.table(user);

const keys = Object.keys(user);

for (const key of keys) {
	console.log(`${key}: ${user[key]}`);
}

console.log('task 1');