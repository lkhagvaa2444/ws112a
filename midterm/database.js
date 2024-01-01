import { DB } from "https://deno.land/x/sqlite/mod.ts";

let db = null
export async function open() {
    db = new DB("user.db");
    db.query(`CREATE TABLE IF NOT EXISTS users 
    (uid INTEGER PRIMARY KEY AUTOINCREMENT, 
     user TEXT, pass TEXT, email TEXT)`)
}

export async function userAdd(user) {
    db.query(`INSERT INTO users (user, pass, email) VALUES (?,?,?)`, [user.user, user.pass, user.email])
  }
  
export async function userGet(user1) {
  let q = db.query(`SELECT uid, user, pass, email FROM users WHERE user=?`, [user1])
  console.log(`userGet(${user1})=${q}`)
  if (q.length <=0) return null
  let [uid, user, pass, email] = q[0]
  return {uid, user, pass, email}
}