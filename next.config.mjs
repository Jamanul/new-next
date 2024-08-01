/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async ()=> {return [
    {
source: '/about',
destination: '/post',
permanent: true
  }
]},
};

export default nextConfig;
