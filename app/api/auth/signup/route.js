import { NextResponse } from 'next/server';
import { prisma } from '@/utils/prisma-instance';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function POST(request) {
    try {
        const { email, password, role, labUserId, providerId  } = await request.json();

        if (!email || !password) {
            return NextResponse.json(
                { message: 'Username, email, and password are required' },
                { status: 400 },
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const data = {
            email,
            password: hashedPassword,
            username : email.split('@')[0],
        };
        if (role) {
            data.role = role;
        }
        if (labUserId) {
            data.labUserId = parseInt(labUserId)
        }
        if (providerId) {
            data.providerId = providerId
        }
        const user = await prisma.user.create({
            data: data,
        });
        const token = jwt.sign(
            { userId: user.id, email: user.email, role: user.role, labUserId: user.labUserId },
            process.env.NEXT_PUBLIC_JWT_SECRET,
            {
                expiresIn: '1h',
            },
        );
        const response = NextResponse.json(
            { message: 'User created successful', user, token },
            { status: 200 },
        );
        // for web set cookies securely
        response.cookies.set('token', token, { httpOnly: true });
        return response;
    } catch (error) {
        if (error.code === 'P2002') {
            return NextResponse.json(
                { message: 'Email already exists' },
                { status: 409 },
            );
        }
        console.log(error);
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 },
        );
    }
}
