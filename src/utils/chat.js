const users = [
  "Anup Mahato",
  "Bot 1",
  "Bot 2",
  "Possibly Anup",
  "Hacker Babu",
  "Hacker Don",
  "Hacker Lul",
  "GigMonster",
];

const chats = [
  "hello !!!",
  "okkkkk 😎",
  "kewl kewl",
  "real time message",
  "I'm not a bot",
  "I'm not a bot. But I'm program generated",
  "this is a random chat selected from a list of chats",
  "I like functional programming",
  "OOPs is awesome",
  "OOPs is boring",
  "RUST IS BEST",
];

export function randomChat() {
  const random_users_index = Math.floor(Math.random() * users.length);
  const random_chats_index = Math.floor(Math.random() * chats.length);
  return {
    username: users[random_users_index],
    message: chats[random_chats_index],
  };
}
