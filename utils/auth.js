// utils/auth.js
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { prisma } from '@/utils/prisma-instance';

export async function authenticate(req) {
    const authHeader = req?.headers?.get('authorization');
    console.log(authHeader,"authHeader")
    let token = req?.cookies?.get('token')?.value;
    console.log(token,"token")
    if (authHeader?.startsWith('Bearer')) {
        token = authHeader.split(' ')[1];
    }

    // Extract the token from the authorization header

    if (!token) {
        return NextResponse.json(
            { message: "Token doesn't exist" },
            { status: 400 },
        );
    }

    // Decode token
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET);
        console.log('Decoded token:', decodedToken); // Add this line
    } catch (error) {
        return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
    }

    // Ensure email exists in decoded token
    if (!decodedToken.userId) {
        return NextResponse.json(
            { message: 'Token does not contain email' },
            { status: 400 },
        );
    }

    const user = await prisma.user.findUnique({
        where: {
            id: decodedToken.userId,
        },
    });

    if (!user) {
        return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // Additional user role check can be re-added here if necessary
    // if (user.role !== 'ADMIN' && user.role !== 'SUPER') {
    //   return NextResponse.json(
    //     { message: 'Forbidden, not authenticated!' },
    //     { status: 403 }
    //   );
    // }

    return { user };
}
