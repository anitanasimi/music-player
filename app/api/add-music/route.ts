import React from 'react'
import { redirect } from "next/navigation"
import { auth } from '@/app/auth'
import { Music } from "@/lib/types"
import { getUserByEmail, getUserMusicsCount } from '@/db/queries/userQueries'
import { createMusic } from '@/db/queries/musicQueries'

export async function POST(request: Request) {

  const session = await auth();

  if (!session?.user) {
      return redirect("/api/auth/signin?callbackUrl=/profile");
  }

  const user = session?.user;

  let userFromDb;
  let email:string="";
  if (user?.email) {
    userFromDb = await getUserByEmail(user.email);
    email = user.email;
  }

  if (!userFromDb) {
    throw new Error("User not found in database");
  }

  var jsonReq = await request.json();

  let music = {} as Music;
  music.userId = userFromDb?.id;
  music.url = jsonReq.url;
  music.artist = jsonReq.artist;
  music.title = jsonReq.title;

  await createMusic(music,email);

  return new Response("ok");
}


