import { NextResponse } from 'next/server';
import { FISLY_IOS_APP_ID, FISLY_INVITE_PATH_PREFIX } from '@/lib/fisly';

export const dynamic = 'force-static';

/**
 * Universal links for the Fisly iOS app: `https://wowsyler.com/fisly/i/{token}` opens the app's invite screen.
 * Apple fetches this file without following redirects and expects `application/json`.
 */
export function GET() {
  return NextResponse.json({
    applinks: {
      details: [
        {
          appIDs: [FISLY_IOS_APP_ID],
          components: [{ '/': `${FISLY_INVITE_PATH_PREFIX}*`, comment: 'Fisly shared-account invitations' }],
        },
      ],
    },
  });
}
