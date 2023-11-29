import React from 'react'
import { redirect } from "next/navigation"
import { auth } from '@/app/auth'
import { Music } from "@/lib/types"
import { getUserByEmail, getUserMusicsCount } from '@/db/queries/userQueries'
import { deleteMusic } from '@/db/queries/musicQueries'

export async function DELETE(request: Request) {

  const session = await auth();

  if (!session?.user) {
      return redirect("/api/auth/signin?callbackUrl=/profile");
  }

  var jsonReq = await request.json();

  await deleteMusic(jsonReq.id);

  return new Response("ok");
}


