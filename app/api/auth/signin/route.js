import { NextResponse } from 'next/server';
import { prisma } from '@/utils/prisma-instance';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


export async function POST(request) {
    try {
        const { email, password } = await request.json();

        if (!email || !password) {
            return NextResponse.json(
                { message: 'Email and password are required' },
                { status: 400 },
            );
        }
        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            return NextResponse.json(
                { message: 'Invalid email or password' },
                { status: 401 },
            );
        }

        if (user?.accountStatus !== "APPROVED" && user.role.toLowerCase() === "provider") {
            return NextResponse.json(
                { message: 'Your account has not yet been verified by the lab.' },
                { status: 401 },
            );
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return NextResponse.json(
                { message: 'Invalid email or password' },
                { status: 401 },
            );
        }
        console.log(user)
        const token = jwt.sign(
            { userId: user.id, email: user.email, role: user.role , labUserId: user.labUserId },
            process.env.NEXT_PUBLIC_JWT_SECRET,
            {
                expiresIn: '1d',
            },
        );


        const response = NextResponse.json(
            { message: 'Login successful', user, token },
            { status: 200 },
        );
        response.cookies.set('token', token, { httpOnly: true });
        return response;
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 },
        );
    }
}
