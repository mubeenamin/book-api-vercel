/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    POSTGRES_URL: "postgres://default:TxWFH7gRGbs3@ep-throbbing-paper-614349-pooler.us-east-1.postgres.vercel-storage.com:5432/verceldb",
    POSTGRES_PRISMA_URL: "postgres://default:TxWFH7gRGbs3@ep-throbbing-paper-614349-pooler.us-east-1.postgres.vercel-storage.com:5432/verceldb?pgbouncer=true&connect_timeout=10",
    POSTGRES_URL_NON_POOLING: "postgres://default:TxWFH7gRGbs3@ep-throbbing-paper-614349.us-east-1.postgres.vercel-storage.com:5432/verceldb",
    POSTGRES_USER: "default",
    POSTGRES_HOST: "ep-throbbing-paper-614349-pooler.us-east-1.postgres.vercel-storage.com",
    POSTGRES_PASSWORD: "TxWFH7gRGbs3",
    POSTGRES_DATABASE: "verceldb",
  }
}

module.exports = nextConfig
