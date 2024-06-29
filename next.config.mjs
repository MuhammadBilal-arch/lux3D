/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: '/',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'no-cache, must-revalidate',
                    },
                ],
            },
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'no-cache, must-revalidate',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
