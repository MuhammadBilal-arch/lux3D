import { NextResponse } from 'next/server';
import { authenticate } from '@/utils/auth'

export async function GET(req) {
    const authResult = await authenticate(req);
    if (authResult instanceof NextResponse) {
        return authResult;
    }

    try {
        const response = NextResponse.json({
            message: 'You logout successfully',
            success: true,
        });
        response.cookies.set('token', '', { httpOnly: true, expires: new Date(0) });
        return response;
    } catch (error) {
        console.log(error);
    }
}
