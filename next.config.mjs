/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async ()=> {return [
    {
source: '/about',
destination: '/post',
permanent: true
  }
]},
  images :{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: "*",
        port: "",
        pathname: "/**"
      }
    ]
  }
};

export default nextConfig;
