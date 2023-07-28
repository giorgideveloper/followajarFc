import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'
export const dynamic = 'force-dynamic';

export async function GET(response: NextResponse, request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code) {
    const supabase = createRouteHandlerClient({ cookies })
    await supabase.auth.exchangeCodeForSession(code)
  }

  const next = requestUrl.searchParams.get('next')

  // using NextJS API response object in this example
  // response.redirect(next)

  // URL to redirect to after sign in process completes
  //@ts-ignore
  return NextResponse.redirect(next)
}