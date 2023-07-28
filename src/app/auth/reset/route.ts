import { createRouteHandlerClient, createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { NextApiRequest, NextApiResponse } from 'next';
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'
export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest, res: NextApiResponse) {
  // const res = NextResponse.next()
  const requestUrl = new URL(req.url)
  const code = requestUrl.searchParams.get('code')
  console.log(code);
 

  if (code) {
    const supabase = createRouteHandlerClient({ cookies })
   const {data,error}= await supabase.auth.exchangeCodeForSession(code)
   console.log(data,error);
   
  }

  const next = requestUrl.searchParams.get('next')
  console.log(next);

  // using NextJS API response object in this example
  // res.redirect(next)
  // URL to redirect to after sign in process completes
  //@ts-ignore
  return NextResponse.redirect(next)
}